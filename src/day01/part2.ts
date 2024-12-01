export function day01part2(input: string): number {
	const rightListCounts = new Map<number, number>();
	const rows = input
		.trim()
		.split("\n")
		.filter((row) => row.length > 0)
		.map((row) => row.split(/\s+/).map(Number));

	for (const [_, col2] of rows) {
		rightListCounts.set(col2, (rightListCounts.get(col2) || 0) + 1);
	}

	return rows.reduce((score, [col1, _]) => {
		return score + col1 * (rightListCounts.get(col1) || 0);
	}, 0);
}
