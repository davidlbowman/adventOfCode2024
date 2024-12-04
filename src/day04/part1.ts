import fs from "node:fs";

export function day04Part1(input: string): number {
	const lines = input.split("\n").map((line) => line.trim());
	const grid = lines.map((line) => line.split(""));
	const word = "XMAS";
	const wordLength = word.length;
	let count = 0;

	const directions = [
		[0, 1],
		[1, 0],
		[1, 1],
		[1, -1],
		[0, -1],
		[-1, 0],
		[-1, 1],
		[-1, -1],
	];

	const isValid = (x: number, y: number) =>
		x >= 0 && y >= 0 && x < grid.length && y < grid[0].length;

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === "X") {
				for (const [dx, dy] of directions) {
					let k: number;
					for (k = 0; k < wordLength; k++) {
						const x = i + k * dx;
						const y = j + k * dy;
						if (!isValid(x, y) || grid[x][y] !== word[k]) {
							break;
						}
					}
					if (k === wordLength) {
						count++;
					}
				}
			}
		}
	}

	return count;
}
