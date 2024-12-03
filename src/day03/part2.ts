export function day03Part2(input: string) {
	const mulRegex = /mul\((\d+),(\d+)\)/g;
	const doRegex = /do\(\)/g;
	const dontRegex = /don't\(\)/g;

	let total = 0;
	let enabled = true;
	let lastIndex = 0;

	while (true) {
		const doMatch = doRegex.exec(input);
		const dontMatch = dontRegex.exec(input);

		const nextDo = doMatch?.index ?? Number.POSITIVE_INFINITY;
		const nextDont = dontMatch?.index ?? Number.POSITIVE_INFINITY;
		const nextStateChange = Math.min(nextDo, nextDont);

		mulRegex.lastIndex = lastIndex;
		let mulMatch: RegExpExecArray | null = mulRegex.exec(input);
		while (mulMatch !== null) {
			if (mulMatch.index >= nextStateChange) break;

			if (enabled) {
				const x = Number.parseInt(mulMatch[1], 10);
				const y = Number.parseInt(mulMatch[2], 10);
				total += x * y;
			}
			mulMatch = mulRegex.exec(input);
		}

		if (nextStateChange === Number.POSITIVE_INFINITY) break;

		enabled = nextDo < nextDont;
		lastIndex = nextStateChange + (enabled ? 4 : 7);
		doRegex.lastIndex = lastIndex;
		dontRegex.lastIndex = lastIndex;
	}

	return total;
}
