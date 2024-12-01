import { readFileSync } from "node:fs";
import { day01Part1 } from "./part1";
import { day01part2 } from "./part2";

const input = readFileSync("./src/day01/input.txt", "utf8");

console.log(`Part 1: ${day01Part1(input)}`);
console.log(`Part 2: ${day01part2(input)}`);
