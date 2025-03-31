import { readFileSync } from "node:fs";
import { bench, run } from "mitata";
import { day06Part1 } from "./part1";
import { day06Part2 } from "./part2";

const input = readFileSync("./src/day06/input.txt", "utf8");

bench("Day 06 - Read Input", () => {
	readFileSync("./src/day06/input.txt", "utf8");
});

bench("Day 06 - Part 1", () => {
	day06Part1(input);
});

bench("Day 06 - Part 2 ", () => {
	day06Part2(input);
});

run({
	format: "markdown",
});
