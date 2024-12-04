export function day04Part2(input: string): number {
	const lines = input.split("\n").map((line) => line.trim());
	const grid = lines.map((line) => line.split(""));
	const rows = grid.length;
	const cols = grid[0].length;
	let count = 0;

	const patternSet = new Set(["M", "S"]);

	for (let r = 1; r < rows - 1; r++) {
		for (let c = 1; c < cols - 1; c++) {
			if (grid[r][c] === "A") {
				const diag1 = new Set([grid[r - 1][c - 1], grid[r + 1][c + 1]]);
				const diag2 = new Set([grid[r - 1][c + 1], grid[r + 1][c - 1]]);

				if (
					diag1.size === patternSet.size &&
					diag2.size === patternSet.size &&
					[...diag1].every((value) => patternSet.has(value)) &&
					[...diag2].every((value) => patternSet.has(value))
				) {
					count++;
				}
			}
		}
	}

	return count;
}
