export function day05Part2(input: string): number {
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
		if (!isValidOrder(update, rules)) {
			const sortedUpdate = sortByRules(update, rules);
			const middleIndex = Math.floor(sortedUpdate.length / 2);
			sum += sortedUpdate[middleIndex];
		}
	}

	return sum;
}

function sortByRules(
	pages: number[],
	rules: Map<number, Set<number>>,
): number[] {
	return [...pages].sort((a, b) => {
		const aDeps = rules.get(a) || new Set();
		const bDeps = rules.get(b) || new Set();

		if (aDeps.has(b)) return 1;
		if (bDeps.has(a)) return -1;
		return 0;
	});
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
