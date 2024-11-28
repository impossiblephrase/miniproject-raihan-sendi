const events = [
    { id: 1, title: 'Live Music Concert', date: 'Nov 15', location: 'Tokyo' },
    { id: 2, title: 'Startup Workshop', date: 'Dec 01', location: 'Tokyo' },
    { id: 3, title: 'Networking Event', date: 'Dec 10', location: 'Tokyo' },
  ];
  
  const FeaturedEvents = () => (
    <section className="w-full py-12">
      <h3 className="text-2xl font-bold text-center">Featured Events</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {events.map((event) => (
          <div key={event.id} className="p-6 bg-white rounded-lg shadow-md">
            <h4 className="text-xl font-bold">{event.title}</h4>
            <p className="text-gray-600">{event.date}</p>
            <p className="text-gray-600">{event.location}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default FeaturedEvents;
  