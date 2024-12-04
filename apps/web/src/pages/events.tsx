"use client"
import { GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';

type Event = {
  id: number;
  name: string;
  location: string;
  date: string;
  seats: number;
  price: number;
  imageUrl: string;
};

type EventsPageProps = {
  initialEvents: Event[];
};

const EventsPage: React.FC<EventsPageProps> = ({ initialEvents }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [search, setSearch] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  

  const fetchFilteredEvents = async () => {
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (filterDate) params.append('date', filterDate);
    if (filterLocation) params.append('location', filterLocation);

    const res = await fetch(`/api/events?${params.toString()}`);
    const filteredEvents = await res.json();
    setEvents(filteredEvents);
  };

  useEffect(() => {
    fetchFilteredEvents();
  }, [search, filterDate, filterLocation]);

  return (
    <div className="p-6">
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search events..."
          className="border rounded px-4 py-2 w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Date Filter */}
        <input
          type="date"
          className="border rounded px-4 py-2 w-full md:w-1/3"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />

        {/* Location Filter */}
        <input
          type="text"
          placeholder="Filter by location..."
          className="border rounded px-4 py-2 w-full md:w-1/3"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
        />
      </div>

      {/* Events List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard
            key={event.id}
            name={event.name}
            location={event.location}
            start_date={event.date}
            seats={event.seats}
            price={event.price}
            imageUrl={event.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events`);
  const initialEvents = await res.json();

  return {
    props: {
      initialEvents,
    },
  };
};

export default EventsPage;
