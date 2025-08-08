export function Stats() {
  const stats = [
    { value: '5,000+', label: 'Youth Empowered' },
    { value: '50+', label: 'Communities Reached' },
    { value: '25+', label: 'Active Programs' },
    { value: '100+', label: 'Local Partners' },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-gray-50 dark:from-dark-bg dark:via-dark-card dark:to-dark-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
              <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                index % 2 === 0 ? 'text-brand-green' : 'text-brand-blue'
              }`}>
                {stat.value}
              </div>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
