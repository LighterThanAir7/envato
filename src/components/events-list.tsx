import EventCard from "@/components/event-card";
import {getEvents} from "@/lib/utilities";

type EventsListProps = {
	city: string;
}

export default async function EventsList({ city }: EventsListProps) {
	const events = await getEvents(city);

	return (
		<section className="card-list">
			{
				events.map(event => (
					<EventCard key={event.id} event={event} />
				))
			}
		</section>
	);
}