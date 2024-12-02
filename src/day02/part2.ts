function isValidSequence(levels: number[], skipIndex = -1): boolean {
	const len = levels.length;
	if (len < 2) return true;

	let prev = skipIndex === 0 ? levels[1] : levels[0];
	let i = skipIndex === 0 ? 2 : 1;

	while (i < len && i === skipIndex) i++;
	if (i >= len) return true;

	const isIncreasing = levels[i] > prev;

	for (; i < len; i++) {
		if (i === skipIndex) continue;

		const curr = levels[i];
		const diff = curr - prev;

		if (
			Math.abs(diff) < 1 ||
			Math.abs(diff) > 3 ||
			(isIncreasing && diff <= 0) ||
			(!isIncreasing && diff >= 0)
		) {
			return false;
		}

		prev = curr;
	}

	return true;
}

export function day02Part2(reports: string[]): number {
	let safeCount = 0;

	for (const report of reports) {
		if (!report.trim()) continue;

		const levels = report.split(/\s+/).map(Number);

		if (isValidSequence(levels)) {
			safeCount++;
			continue;
		}

		for (let i = 0; i < levels.length; i++) {
			if (isValidSequence(levels, i)) {
				safeCount++;
				break;
			}
		}
	}

	return safeCount;
}
