import EventCard from "@/components/event-card";
import {getEvents} from "@/lib/server-utilities";
import PaginationControls from "@/components/pagination-controls";
import {EVENTS_PER_PAGE} from "@/lib/constants";

type EventsListProps = {
	city: string;
	page?: number;
}

export default async function EventsList({ city, page = 1 }: EventsListProps) {
	const { events, totalCount } = await getEvents(city, page);
	const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : '';
	const nextPath = totalCount > EVENTS_PER_PAGE * page ? `/events/${city}?page=${page + 1}` : '';

	return (
		<section className="card-list">
			{
				events.map(event => (
					<EventCard key={event.id} event={event} />
				))
			}
			<PaginationControls previousPath={previousPath} nextPath={nextPath} />
		</section>
	);
}