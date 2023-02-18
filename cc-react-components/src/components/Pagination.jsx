import './pagination.css';

export default function Pagination({ count, onChange, currentPage }) {
	let countArray = [];
	const PAGE_NUMBER = createArray();

	function createArray() {
		for (let i = 1; i <= count; i++) {
			countArray.push(i);
		}
		return countArray;
	}

	return (
		<>
			{PAGE_NUMBER.map((count) => {
				return (
					<div
						className={
							currentPage === count
								? 'page-number-active page-number'
								: 'page-number'
						}
						key={count}
						id={count}
						onClick={() => onChange(count)}
					>
						{count}
					</div>
				);
			})}
		</>
	);
}
