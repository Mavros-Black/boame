export default function Programs() {
  const programs = [
    {
      title: 'Education Support',
      description: 'Providing scholarships, learning materials, and educational infrastructure to ensure quality education access for all youth.',
      icon: 'fas fa-graduation-cap',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      bgColor: 'bg-brand-green'
    },
    {
      title: 'Tech Skills Training',
      description: 'Equipping young people with digital literacy and technical skills for the modern economy and future opportunities.',
      icon: 'fas fa-laptop-code',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      bgColor: 'bg-brand-blue'
    },
    {
      title: 'Entrepreneurship',
      description: 'Supporting young entrepreneurs with mentorship, funding, and resources to start and grow sustainable businesses.',
      icon: 'fas fa-seedling',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      bgColor: 'bg-brand-green'
    },
    {
      title: 'Mentorship Network',
      description: 'Connecting youth with experienced professionals and leaders for guidance, career development, and personal growth.',
      icon: 'fas fa-users',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      bgColor: 'bg-brand-blue'
    },
    {
      title: 'Health & Wellness',
      description: 'Promoting physical and mental health awareness through workshops, healthcare access, and wellness programs.',
      icon: 'fas fa-heart',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      bgColor: 'bg-brand-green'
    },
    {
      title: 'Community Development',
      description: 'Building sustainable infrastructure and creating opportunities for entire communities to thrive and prosper.',
      icon: 'fas fa-globe-africa',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      bgColor: 'bg-brand-blue'
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue dark:text-white">Our Programs</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive initiatives designed to create lasting impact in youth development and community empowerment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-dark-card rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={program.image} 
                alt={program.title} 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="p-6">
                <div className={`w-12 h-12 ${program.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <i className={`${program.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-brand-blue dark:text-white">
                  {program.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {program.description}
                </p>
                <a href="#" className="text-brand-green hover:text-brand-blue transition-colors font-medium">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
