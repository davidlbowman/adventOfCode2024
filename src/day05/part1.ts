export function day04Part1(input: string): number {
	const lines = input.split("\n").map((line) => line.trim());
	const grid = lines.map((line) => line.split(""));
	const word = "XMAS";
	const wordLength = word.length;
	let count = 0;

	const rows = grid.length;
	const cols = grid[0].length;

	const directions = [
		[0, 1],
		[1, 0],
		[1, 1],
		[1, -1],
	];

	const isValid = (x: number, y: number) =>
		x >= 0 && x < rows && y >= 0 && y < cols;

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (grid[i][j] !== "X") continue;

			for (const [dx, dy] of directions) {
				const endX = i + (wordLength - 1) * dx;
				const endY = j + (wordLength - 1) * dy;
				if (!isValid(endX, endY)) continue;

				let matches = true;
				for (let k = 1; k < wordLength; k++) {
					const x = i + k * dx;
					const y = j + k * dy;
					if (grid[x][y] !== word[k]) {
						matches = false;
						break;
					}
				}
				if (matches) count++;
			}
		}
	}

	return count;
}
