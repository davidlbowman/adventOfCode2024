import { readFileSync } from "node:fs";

function calculateDistance(input: string): number {
	const rows = input
		.trim()
		.split("\n")
		.filter((row) => row.length > 0);

	const list1: number[] = [];
	const list2: number[] = [];

	for (const row of rows) {
		const [col1, col2] = row.split(/\s+/).map(Number);
		list1.push(col1);
		list2.push(col2);
	}

	list1.sort((a, b) => a - b);
	list2.sort((a, b) => a - b);

	let totalDistance = 0;
	for (let i = 0; i < list1.length; i++) {
		totalDistance += Math.abs(list1[i] - list2[i]);
	}

	return totalDistance;
}

const input = readFileSync("./src/day01/input.txt", "utf8");
const result = calculateDistance(input);
console.log(result);
