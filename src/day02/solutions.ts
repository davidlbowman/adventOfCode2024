import { readFileSync } from "node:fs";
import { day02Part1 } from "./part1";
import { day02Part2 } from "./part2";

const input = readFileSync("./src/day02/input.txt", "utf8");
const reports = input.split("\n");

console.log(`Part 1: ${day02Part1(reports)}`);
console.log(`Part 2: ${day02Part2(reports)}`);
