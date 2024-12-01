import { readFileSync } from "node:fs";
import { bench, run } from "mitata";
import { day01Part1 } from "./part1";
import { day01part2 } from "./part2";

const input = readFileSync("./src/day01/input.txt", "utf8");

bench("Day 01 - Part 1", () => {
	day01Part1(input);
});

bench("Day 01 - Part 2 ", () => {
	day01part2(input);
});

run({
	colors: true,
	format: "markdown",
});
