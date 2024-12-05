export function day05Part1(input: string): number {
	const [rulesSection, updatesSection] = input.trim().split("\n\n");

	const rules = new Map<number, Set<number>>();
	for (const rule of rulesSection.split("\n")) {
		const [before, after] = rule.split("|").map(Number);
		if (!rules.has(before)) rules.set(before, new Set());
		if (!rules.has(after)) rules.set(after, new Set());
		const afterSet = rules.get(after);
		if (afterSet) afterSet.add(before);
	}

	const updates = updatesSection
		.split("\n")
		.map((line) => line.split(",").map(Number));

	let sum = 0;

	for (const update of updates) {
		if (isValidOrder(update, rules)) {
			const middleIndex = Math.floor(update.length / 2);
			sum += update[middleIndex];
		}
	}

	return sum;
}

function isValidOrder(
	pages: number[],
	rules: Map<number, Set<number>>,
): boolean {
	for (let i = 0; i < pages.length; i++) {
		const currentPage = pages[i];
		const dependencies = rules.get(currentPage) || new Set();

		const laterPages = new Set(pages.slice(i + 1));

		for (const dep of dependencies) {
			if (laterPages.has(dep)) {
				return false;
			}
		}
	}

	return true;
}
