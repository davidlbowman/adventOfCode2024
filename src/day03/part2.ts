export function day03Part2(input: string) {
	const mulRegex = /mul\((\d+),(\d+)\)|do\(\)|don't\(\)/g;
	let total = 0;
	let enabled = true;

	let match: RegExpExecArray | null;
	match = mulRegex.exec(input);
	while (match !== null) {
		const [full, x, y] = match;

		if (full === "do()") {
			enabled = true;
		} else if (full === "don't()") {
			enabled = false;
		} else if (enabled) {
			total += Number(x) * Number(y);
		}
		match = mulRegex.exec(input);
	}

	return total;
}
