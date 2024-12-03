import { readFileSync } from "node:fs";
import { bench, run } from "mitata";
import { day03Part1 } from "./part1";
import { day03Part2 } from "./part2";

const input = readFileSync("./src/day03/input.txt", "utf8");

bench("Day 03 - Read Input", () => {
	readFileSync("./src/day03/input.txt", "utf8");
});

bench("Day 03 - Part 1", () => {
	day03Part1(input);
});

bench("Day 03 - Part 2 ", () => {
	day03Part2(input);
});

run({
	format: "markdown",
});
