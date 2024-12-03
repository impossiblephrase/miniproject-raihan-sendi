"use client"
import { useState, useEffect } from 'react';
import { debounce } from 'lodash'; // Consider installing lodash for debounce

type EventType = {
  id: number;
  name: string;
  date: string;
  location: string;
  category: string;
  availableSeats: number;
};

const mockEvents: EventType[] = [
  // Mock data for events; replace with actual data fetching in production
  { id: 1, name: 'Music Concert', date: '2024-12-10', location: 'Tokyo', category: 'Music', availableSeats: 120 },
  { id: 2, name: 'Tech Conference', date: '2024-12-15', location: 'Kyoto', category: 'Technology', availableSeats: 200 },
  { id: 3, name: 'Art Festival', date: '2024-12-20', location: 'Osaka', category: 'Art', availableSeats: 75 },
  // Add more mock events here
];

export default function SearchEvents() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [events, setEvents] = useState<EventType[]>(mockEvents); //????
  const [filteredEvents, setFilteredEvents] = useState<EventType[]>([]);
  const [category, setCategory] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const eventsPerPage = 5;

  useEffect(() => {
    handleFilter();
  }, [searchTerm, category, location, currentPage]);

  const handleSearch = debounce((value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  }, 300);

  const handleFilter = () => {
    let filtered = mockEvents;

    if (searchTerm) {
      filtered = filtered.filter((event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter((event) => event.category === category);
    }

    if (location) {
      filtered = filtered.filter((event) => event.location === location);
    }

    setFilteredEvents(filtered);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setCurrentPage(1);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const displayedEvents = filteredEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <div className="w-full mx-auto">
        {/* Unified search and filter container */}
        <section className="bg-gray-700 mx-auto p-6 sticky text-sm top-16 z-40">
        <div className="flex flex-col md:flex-row">
          <div className="flex w-full md:px-44 items-center gap-1">
            <input
              type="text"
              placeholder="Search events..."
              onChange={(e) => handleSearch(e.target.value)}
              className="border p-2 rounded flex-grow"
            />

            {/* Category dropdown, hidden on small screens */}
            <select
              onChange={handleCategoryChange}
              className="hidden md:block border h-9"
            >
              <option value="">All Categories</option>
              <option value="Music">Music</option>
              <option value="Technology">Technology</option>
              <option value="Art">Art</option>
              {/* Add more categories as needed */}
            </select>

            {/* Location dropdown, hidden on small screens */}
            <select
              onChange={handleLocationChange}
              className="hidden md:block border h-9"
            >
              <option value="">All Locations</option>
              <option value="Tokyo">Tokyo</option>
              <option value="Kyoto">Kyoto</option>
              <option value="Osaka">Osaka</option>
              {/* Add more locations as needed */}
            </select>

            {/* Filter and search buttons */}
            <button
              onClick={handleFilter}
              className="bg-gray-700 border border-white hover:bg-gray-400 hover:text-black text-white px-4 h-9 rounded"
            >
              Filter
            </button>
            <button
              onClick={() => handleSearch(searchTerm)}
              className="bg-gray-700 border border-white hover:bg-gray-400 hover:text-black text-white px-4 h-9 rounded"
            >
              Search
            </button>
          </div>
        </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mb-10 mt-24">
          {displayedEvents.map((event) => (
            <div key={event.id} className="bg-gray-200 border p-4 rounded shadow-sm">
              <h2 className="text-base font-semibold">{event.name}</h2>
              <p>{new Date(event.date).toLocaleDateString()}</p>
              <p>Location: {event.location}</p>
              <p>Available Seats: {event.availableSeats}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4 mb-10">
          {Array.from(
            { length: Math.ceil(filteredEvents.length / eventsPerPage) },
            (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 mx-1 rounded ${
                  currentPage === index + 1
                    ? 'bg-gray-600 text-white'
                    : 'bg-gray-200'
                }`}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};



