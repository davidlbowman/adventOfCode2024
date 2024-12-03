import { readFileSync } from "node:fs";
import { day03Part1 } from "./part1";
import { day03Part2 } from "./part2";

const input = readFileSync("src/day03/input.txt", "utf-8");

console.log(`Part 1: ${day03Part1(input)}`);
console.log(`Part 2: ${day03Part2(input)}`);
