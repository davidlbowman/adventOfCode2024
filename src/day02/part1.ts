export function day02Part1(reports: string[]): number {
	let safeCount = 0;

	for (const report of reports) {
		if (!report.trim()) continue;

		const levels = report.split(/\s+/).map(Number);
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

			if (isValid) safeCount++;
		}
	}

	return safeCount;
}
