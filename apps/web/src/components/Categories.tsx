const categories = [
    { name: 'Concerts', icon: '🎶' },
    { name: 'Workshops', icon: '🛠️' },
    { name: 'Networking', icon: '🤝' },
    { name: 'Sports', icon: '⚽' },
    { name: 'Parties', icon: '🎉' },
  ];
  
  const Categories = () => (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Browse by Category</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-gray-200 p-6 rounded-lg shadow-md w-40 z-10 flex flex-col items-center transition transform hover:cursor-pointer hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="text-4xl">{category.icon}</div>
              <p className="mt-4 text-gray-700 font-medium">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Categories;
  