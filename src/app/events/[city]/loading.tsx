export default function Loading() {
	return (
		<div className="flex flex-wrap mx-auto px-80 g-80 justify-content-center" style={{ maxWidth: '1100px' }}>
			{Array.from({ length: 6 }, (_, index) => (
				<Skeleton key={index} />
			))}
		</div>
	);
}

export function Skeleton() {
	return (
		<div className="flex flex-col align-items-center g-16 pt-28">
			<div className="skeleton skeleton--w-48 skeleton--h-48 skeleton--circle"></div>
			<div className="skeleton skeleton--w-240 skeleton--h-16"></div>
			<div className="skeleton skeleton--w-200 skeleton--h-16"></div>
		</div>
	);
}