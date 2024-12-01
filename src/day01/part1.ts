export function day01Part1(input: string): number {
	const [list1, list2] = input
		.trim()
		.split("\n")
		.filter((row) => row.length > 0)
		.reduce(
			(acc, row) => {
				const [num1, num2] = row.split(/\s+/).map(Number);
				acc[0].push(num1);
				acc[1].push(num2);
				return acc;
			},
			[[], []] as number[][],
		);

	list1.sort((a, b) => a - b);
	list2.sort((a, b) => a - b);

	return list1.reduce((sum, val, i) => sum + Math.abs(val - list2[i]), 0);
}
