import { readFileSync } from "node:fs";
import { day06Part1 } from "./part1";
import { day06Part2 } from "./part2";

const input = readFileSync("src/day06/input.txt", "utf-8");

console.log(`Part 1: ${day06Part1(input)}`);
// console.log(`Part 2: ${day06Part2(input)}`);
