import Image from "next/image";
import {Metadata} from "next";
import {getEvent} from "@/lib/utilities";

type Props = {
	params: {
		slug: string;
	}
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const slug = params.slug;
	const event = await getEvent(slug);

	return {
		title: event.name
	};
}

export default async function EventPage({ params }: Props) {
	const { slug } = await params;
	const event = await getEvent(slug);

	return (
		<main className="event">
			<header className="event__header">
				<Image
					className="event__bg-img"
					src={event.imageUrl}
					alt='Event background image'
					fill
					quality={10}
					sizes="(max-width: 1280px) 100vw, 1280px"
					priority
				/>

				<div className="event__header-content">
					<Image
						src={event.imageUrl}
						alt={event.name}
						className="event__img"
						width={300}
						height={201}
					/>

					<div className="flex-col">
						<time className="event__time">
							{new Date(event.date).toLocaleDateString('en-US', {
							weekday: 'long',
							month: 'long',
							day: 'numeric'
						})}
						</time>
						<h1 className="event__title">{event.name}</h1>
						<p className="event__organizer">Organized by <span className="text-italic">{event.organizerName}</span></p>
						<button className="event__btn btn btn--secondary">Get tickets</button>
					</div>
				</div>
			</header>
			<div className="event__content">
				<section className="mb-40">
					<h2>About this event</h2>
					<p className="event__description">{event.description}</p>
				</section>

				<section>
					<h2>Location</h2>
					<p className="event__location">{event.location}</p>
				</section>
			</div>
		</main>
	);
}