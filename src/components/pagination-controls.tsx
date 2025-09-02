import Link from "next/link";
import {ArrowLeftIcon, ArrowRightIcon} from "@radix-ui/react-icons";

type PaginationControlsProps = {
	previousPath: string;
	nextPath: string;
}

export default function PaginationControls({ previousPath, nextPath }: PaginationControlsProps) {
	return (
		<section className="pagination">
			{
				previousPath && (
					<Link
						href={previousPath}
						className="pagination__btn"
					>
						<ArrowLeftIcon />
						Previous
					</Link>
				)
			}
			{
				nextPath && (
					<Link
						href={nextPath}
						className="pagination__btn pagination__btn--next"
					>
						Next
						<ArrowRightIcon />
					</Link>
				)
			}
		</section>
	);
}