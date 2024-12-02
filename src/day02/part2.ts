function isValidSequence(levels: number[]): boolean {
	if (levels.length < 2) return true;

	let isValid = true;

	for (let i = 1; i < levels.length; i++) {
		const diff = Math.abs(levels[i] - levels[i - 1]);
		if (diff < 1 || diff > 3) {
			isValid = false;
			break;
		}
	}

	if (isValid) {
		const firstDiff = levels[1] - levels[0];
		const isIncreasing = firstDiff > 0;

		for (let i = 2; i < levels.length && isValid; i++) {
			const diff = levels[i] - levels[i - 1];
			if ((isIncreasing && diff <= 0) || (!isIncreasing && diff >= 0)) {
				isValid = false;
			}
		}
	}

	return isValid;
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
			const modifiedLevels = [...levels.slice(0, i), ...levels.slice(i + 1)];
			if (isValidSequence(modifiedLevels)) {
				safeCount++;
				break;
			}
		}
	}

	return safeCount;
}
