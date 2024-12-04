import { readFileSync } from "node:fs";
import { day04Part1 } from "./part1";
import { day04Part2 } from "./part2";

const input = readFileSync("src/day04/input.txt", "utf-8");

console.log(`Part 1: ${day04Part1(input)}`);
// console.log(`Part 2: ${day04Part2(input)}`);
