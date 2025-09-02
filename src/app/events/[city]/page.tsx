import EventsList from "@/components/events-list";
import {Suspense} from "react";
import Loading from "./loading";
import {Metadata} from "next";
import {titleCaseSmart} from "@/lib/utilities";

type Props = {
	params: {
		city: string;
	}
}

export function generateMetadata({ params }: Props): Metadata {
	const city = params.city;

	return {
		title: city === 'all' ? 'All Events' : `Events in ${titleCaseSmart(city)}`,
	};
}

export default function EventsPage({params}: Props) {
  const city = params.city;

  return (
    <main className="main">
      <h1 className="mb-80">
        {
          city === 'all' ? "All Events" : (
            <>
              Events in <span className="text-capitalize">{city}</span>
            </>
          )
        }
        </h1>

	    <Suspense fallback={<Loading />}>
		    <EventsList city={city} />
	    </Suspense>
    </main>
  );
}
