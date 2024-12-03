export function day03Part1(input: string) {
	const regex = /mul\((\d+),(\d+)\)/g;
	let match: RegExpExecArray | null;
	let total = 0;

	match = regex.exec(input);
	while (match !== null) {
		const x = Number.parseInt(match[1], 10);
		const y = Number.parseInt(match[2], 10);
		total += x * y;
		match = regex.exec(input);
	}

	return total;
}
