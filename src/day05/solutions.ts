import { readFileSync } from "node:fs";
import { day05Part1 } from "./part1";
import { day05Part2 } from "./part2";

const input = readFileSync("src/day05/input.txt", "utf-8");

console.log(`Part 1: ${day05Part1(input)}`);
console.log(`Part 2: ${day05Part2(input)}`);
