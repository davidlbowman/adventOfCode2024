import { readFileSync } from "node:fs";
import { bench, run } from "mitata";
import { day04Part1 } from "./part1";
import { day04Part2 } from "./part2";

const input = readFileSync("./src/day04/input.txt", "utf8");

bench("Day 04 - Read Input", () => {
	readFileSync("./src/day04/input.txt", "utf8");
});

bench("Day 04 - Part 1", () => {
	day04Part1(input);
});

// bench("Day 04 - Part 2 ", () => {
// 	day04Part2(input);
// });

run({
	format: "markdown",
});
