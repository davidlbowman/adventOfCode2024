import { readFileSync } from "node:fs";
import { bench, run } from "mitata";
import { day05Part1 } from "./part1";
import { day05Part2 } from "./part2";

const input = readFileSync("./src/day04/input.txt", "utf8");

bench("Day 05 - Read Input", () => {
	readFileSync("./src/day05/input.txt", "utf8");
});

bench("Day 05 - Part 1", () => {
	day05Part1(input);
});

bench("Day 05 - Part 2 ", () => {
	day05Part2(input);
});

run({
	format: "markdown",
});
