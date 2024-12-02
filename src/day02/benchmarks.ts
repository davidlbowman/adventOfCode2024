import { readFileSync } from "node:fs";
import { bench, run } from "mitata";
import { day02Part1 } from "./part1";
import { day02Part2 } from "./part2";

const input = readFileSync("./src/day02/input.txt", "utf8");
const reports = input.split("\n");

bench("Day 02 - Read Input", () => {
	readFileSync("./src/day01/input.txt", "utf8");
});

bench("Day 02 - Part 1", () => {
	day02Part1(reports);
});

bench("Day 01 - Part 2 ", () => {
	day02Part2(reports);
});

run({
	format: "markdown",
});
