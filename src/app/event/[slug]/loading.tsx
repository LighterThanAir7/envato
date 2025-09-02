export default function Loading() {
	return (
		<div className="flex flex-col align-items-center g-20 pt-28">
			<div className="skeleton skeleton--w-550 skeleton--h-20"></div>
			<div className="skeleton skeleton--w-400 skeleton--h-20"></div>
			<div className="skeleton skeleton--w-480 skeleton--h-20"></div>
		</div>
	);
}