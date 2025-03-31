interface PATH {
	start: POS;
	end: POS;
}

interface PATHS {
	UP: PATH[];
	DOWN: PATH[];
	LEFT: PATH[];
	RIGHT: PATH[];
}

function storePath(
	layout: TYPE[][],
	paths: PATHS,
	{ x, y }: DIRECTION,
	start: POS,
	_end?: POS,
): PATHS {
	if (y < 0) {
		const end = _end ? _end : { ...start, y: 0 };
		return { ...paths, UP: [...paths.UP, { start, end }] };
	}
	if (x > 0) {
		const end = _end ? _end : { ...start, x: layout[0].length - 1 };
		return { ...paths, RIGHT: [...paths.RIGHT, { start, end }] };
	}
	if (y > 0) {
		const end = _end ? _end : { ...start, y: layout.length - 1 };
		return { ...paths, DOWN: [...paths.DOWN, { start, end }] };
	}
	if (x < 0) {
		const end = _end ? _end : { ...start, x: 0 };
		return { ...paths, LEFT: [...paths.LEFT, { start, end }] };
	}
	throw new Error("error storing paths");
}
function findTypePos(type: TYPE, layout: TYPE[][]) {
	const positions: POS[] = [];
	for (let y = 0; y < layout.length; y++) {
		const row = layout[y];
		for (let x = 0; x < row.length; x++) {
			if (row[x] === type) {
				positions.push({ x, y });
			}
		}
	}
	return positions;
}

function doesPathsIntersect(origin: PATH, destination: PATH) {
	const originYDelta = origin.start.y - origin.end.y;
	const originXDelta = origin.start.x - origin.end.x;
	const destinationYDelta = destination.start.y - destination.end.y;
	const destinationXDelta = destination.start.x - destination.end.x;
	if (
		(originXDelta === 0 && destinationXDelta === 0) ||
		(originYDelta === 0 && destinationYDelta === 0)
	) {
		return {
			intersect: false,
		};
	}
	if (originXDelta > 0 && destinationYDelta > 0) {
		// RIGHT DOWN
		return intersect(
			origin.start,
			destination.start,
			origin.end,
			destination.end,
			{ x: 1, y: 0 },
		);
	}
	if (originXDelta < 0 && destinationYDelta > 0) {
		// LEFT DOWN
		return { intersect: false };
	}
	if (originXDelta > 0 && destinationYDelta < 0) {
		// RIGHT UP
		return { intersect: false };
	}
	if (originXDelta < 0 && destinationYDelta < 0) {
		// LEFT UP
		return intersect(
			origin.end,
			destination.end,
			origin.start,
			destination.start,
			{ x: -1, y: 0 },
		);
	}

	if (originYDelta > 0 && destinationXDelta > 0) {
		// DOWN RIGHT
		return { intersect: false };
	}
	if (originYDelta < 0 && destinationXDelta > 0) {
		// UP RIGHT
		return intersect(
			destination.start,
			origin.end,
			destination.end,
			origin.start,
			{ x: 0, y: -1 },
		);
	}
	if (originYDelta > 0 && destinationXDelta < 0) {
		// DOWN LEFT
		return intersect(
			destination.end,
			origin.start,
			destination.start,
			origin.end,
			{ x: 0, y: 1 },
		);
	}
	if (originYDelta < 0 && destinationXDelta < 0) {
		// UP LEFT
		return { intersect: false };
	}
}

function comparePaths(paths: PATHS, curr: PATH) {
	const allPaths: PATH[] = Object.values(paths).flat();
	return allPaths.filter((p) => doesPathsIntersect(p, curr).intersect);
}

function intersect(left: POS, top: POS, right: POS, down: POS, dir: DIRECTION) {
	const point = {
		x: top.x + dir.x,
		y: left.y + dir.y,
	};
	const res = {
		point,
		intersect:
			left.x > top.x && right.x < top.x && left.y > top.y && left.y < down.y,
		dir,
		left,
		right,
		down,
		top,
	};
	if (res.intersect) console.log(res, left, top, right, down, dir);
	return res;
}

export function day06Part2(input: string): number {
	let layout = input
		.trim()
		.split("\n")
		.map((r) => r.trim().split("")) as TYPE[][];
	let [guardPos] = findTypePos(TYPE.GUARD, layout);
	const obstacles = findTypePos(TYPE.OBSTACLE, layout);
	let guardDirection: DIRECTION = { x: 0, y: -1 };
	let paths: PATHS = {
		UP: [],
		DOWN: [],
		LEFT: [],
		RIGHT: [],
	};
	let newPos: POS | undefined = guardPos;
	let intersectionPoints = new Set<string>();

	while (newPos !== undefined) {
		newPos = walkGuard(guardPos, guardDirection, obstacles);
		if (newPos) {
			const potentialPath = {
				start: guardPos,
				end: newPos,
			};

			const intersections = comparePaths(paths, potentialPath);

			intersections.forEach((path) => {
				const intersection = doesPathsIntersect(path, potentialPath);
				if (intersection.intersect && intersection.point) {
					intersectionPoints.add(
						`${intersection.point.x},${intersection.point.y}`,
					);
				}
			});

			paths = storePath(layout, paths, guardDirection, guardPos, newPos);
			const newDir = rotateGuardDirection(guardDirection);
			layout = updateLayout(layout, guardPos, newPos);
			guardPos = newPos;
			guardDirection = newDir;
		} else {
			paths = storePath(layout, paths, guardDirection, guardPos);
			layout = updateLayoutFinal(layout, guardPos, guardDirection);
		}
	}

	intersectionPoints.delete(`${guardPos.x},${guardPos.y}`);

	return intersectionPoints.size;
}
