export function day01part2(input: string): number {
	const rows = input
		.trim()
		.split("\n")
		.filter((row) => row.length > 0);

	const list1: number[] = [];
	const list2: number[] = [];

	for (const row of rows) {
		const [col1, col2] = row.split(/\s+/).map(Number);
		list1.push(col1);
		list2.push(col2);
	}

	const rightListCounts = new Map<number, number>();
	for (const num of list2) {
		rightListCounts.set(num, (rightListCounts.get(num) || 0) + 1);
	}

	let similarityScore = 0;
	for (const num of list1) {
		const occurrences = rightListCounts.get(num) || 0;
		similarityScore += num * occurrences;
	}

	return similarityScore;
}
