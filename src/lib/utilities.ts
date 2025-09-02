import {API_URL} from "@/lib/constants";
import {EventoEvent} from "@/lib/types";

export async function sleep(ms: number) {
	return new Promise(resolve =>
		setTimeout(resolve, ms)
	);
}

export function titleCaseSmart(str: string) {
	const small = new Set(["a","an","and","at","but","by","for","in","nor","of","on","or","the","to","with"]);
	const tokens = str.toLowerCase().split(/(\s+|-)/); // keep separators

	return tokens
		.map((tok, i, arr) => {
			// Skip separators
			if (/^\s+$|^-$/u.test(tok)) return tok;

			const isFirst = i === 0;
			const isLast = i === arr.length - 1;
			if (!isFirst && !isLast && small.has(tok)) return tok;

			return tok.replace(/^\p{L}/u, (c) => c.toUpperCase());
		})
		.join("");
}

export async function getEvents(city: string) {
	const response = await fetch(`${API_URL}events?city=${city}`);
	const events: EventoEvent[] = await response.json();

	return events;
}

export async function getEvent(slug: string) {
	const response = await fetch(`${API_URL}events/${slug}`);
	const event = await response.json();

	return event;
}