"use client"

import {useState} from "react";
import {useRouter} from "next/navigation";

export default function SearchForm() {
	const [searchText, setSearchText] = useState('');
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!searchText) return;

		router.push(`/events/${searchText}`);
	}

	return (
		<form className="form form--hero" onSubmit={handleSubmit}>
			<input
				className="form__input"
				type="text"
				placeholder="Search events in any city..."
				spellCheck={false}
				onChange={(e) => setSearchText(e.target.value)}
			/>
		</form>
	);
}