export function day04Part2(input: string): number {
	const lines = input.split("\n").map((line) => line.trim());
	const grid = lines.map((line) => line.split(""));
	const rows = grid.length;
	const cols = grid[0].length;
	let count = 0;

	const validDiagonalPattern = new Set(["MS", "SM"]);

	for (let r = 1; r < rows - 1; r++) {
		for (let c = 1; c < cols - 1; c++) {
			if (grid[r][c] !== "A") continue;

			const diag1 = grid[r - 1][c - 1] + grid[r + 1][c + 1];
			const diag2 = grid[r - 1][c + 1] + grid[r + 1][c - 1];

			if (validDiagonalPattern.has(diag1) && validDiagonalPattern.has(diag2)) {
				count++;
			}
		}
	}

	return count;
}
