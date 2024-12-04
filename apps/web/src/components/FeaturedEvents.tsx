const events = [
    { id: 1, title: 'Live Music Concert', date: 'Nov 15', location: 'Tokyo' },
    { id: 2, title: 'Startup Workshop', date: 'Dec 01', location: 'Tokyo' },
    { id: 3, title: 'Networking Event', date: 'Dec 10', location: 'Tokyo' },
  ];
  
  const FeaturedEvents = () => (
    <section className="w-full py-12">
      <h3 className="text-2xl font-bold text-center">Featured Events</h3>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 px-8 mt-8">
        {events.map((event) => (
          <div key={event.id} className="p-6 bg-gray-200 rounded-lg shadow-md">
            <h4 className="text-base font-bold">{event.title}</h4>
            <p className="text-gray-600 text-sm">{event.date}</p>
            <p className="text-gray-600 text-sm">{event.location}</p>
            <button className="mt-4 px-4 py-2 bg-cyan-700 hover:bg-cyan-500 text-white text-sm rounded-md">Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default FeaturedEvents;
  