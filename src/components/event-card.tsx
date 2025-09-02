"use client"

import {EventoEvent} from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import {motion, MotionStyle, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

type EventCardProps = {
	event: EventoEvent;
}

const MotionLink = motion(Link);

export default function EventCard({event}: EventCardProps) {
	const ref = useRef(null);
	const {scrollYProgress} = useScroll({
		target: ref,
		offset: ["0 1", "1.5 1"]
	});

	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
	const style = (
		{
			['--scroll-y-progress' as const]: scaleProgress,
			['--opacity-progress' as const]: opacityProgress,
		} as unknown
	) as MotionStyle;

	return (
		<MotionLink className="card__link" href={`/event/${event.slug}`} ref={ref} style={style}>
			<article className="card">
				<div className="card__date">
					<p className="card__date-day">
						{new Date(event.date).toLocaleDateString('en-US', {
							day: '2-digit'
						})}
					</p>
					<p className="card__date-month">
						{
							new Date(event.date).toLocaleDateString('en-US', {
								month: 'short'
							})
						}
					</p>
				</div>
				<Image
					src={event.imageUrl}
					alt={event.name}
					width={500}
					height={280}
					className="card__image"
				/>
				<div className="card__content">
					<h2 className="card__title">{event.name}</h2>
					<p className="card__organizer">By {event.organizerName}</p>
					<p className="card__location">{event.location}</p>
				</div>
			</article>
		</MotionLink>
	);
}