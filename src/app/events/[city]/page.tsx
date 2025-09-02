import EventsList from "@/components/events-list";
import {Suspense} from "react";
import Loading from "./loading";
import {Metadata} from "next";
import {titleCaseSmart} from "@/lib/utilities";
import {z} from "zod";

type Props = {
	params: {
		city: string;
	}
}

type EventsPageProps = Props & {
	searchParams: {
		 [key: string]: string | string[] | undefined;
	}
}

export function generateMetadata({ params }: Props): Metadata {
	const city = params.city;

	return {
		title: city === 'all' ? 'All Events' : `Events in ${titleCaseSmart(city)}`,
	};
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({ params, searchParams }: EventsPageProps) {
	const { city } = await params;
	const sp = await searchParams;
	const parsedPage = pageNumberSchema.safeParse(sp.page);
	if (!parsedPage.success) {
		throw new Error('Invalid page number');
	}

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

	    <Suspense key={city + parsedPage.data} fallback={<Loading />}>
		    <EventsList city={city} page={parsedPage.data} />
	    </Suspense>
    </main>
  );
}
