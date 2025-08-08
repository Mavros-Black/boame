export default function About() {
  const values = [
    {
      title: 'Empowerment',
      description: 'We believe in giving young people the tools and confidence to transform their own lives and communities.',
      icon: 'fas fa-fist-raised',
      color: 'bg-brand-green'
    },
    {
      title: 'Education',
      description: 'Quality education is the foundation of development. We ensure every youth has access to learning opportunities.',
      icon: 'fas fa-graduation-cap',
      color: 'bg-brand-blue'
    },
    {
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to address modern challenges facing African youth.',
      icon: 'fas fa-lightbulb',
      color: 'bg-brand-green'
    },
    {
      title: 'Community',
      description: 'Strong communities are built through collaboration. We foster connections that create lasting change.',
      icon: 'fas fa-users',
      color: 'bg-brand-blue'
    }
  ];

  const team = [
    {
      name: 'Dr. Akosua Mensah',
      role: 'Executive Director',
      description: 'PhD in Development Studies with 15+ years experience in youth development across Africa.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b650?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300'
    },
    {
      name: 'Emmanuel Osei',
      role: 'Programs Director',
      description: 'Former tech entrepreneur dedicated to bridging the digital divide in African communities.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300'
    },
    {
      name: 'Fatima Al-Rashid',
      role: 'Community Outreach Manager',
      description: 'Masters in Social Work with extensive experience in grassroots community organizing.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300'
    }
  ];

  const milestones = [
    { year: '2018', achievement: 'Founded BOA ME Youth Empowerment in Accra, Ghana' },
    { year: '2019', achievement: 'Launched our first Education Support program, reaching 500 students' },
    { year: '2020', achievement: 'Expanded to 10 communities across Ghana and Nigeria' },
    { year: '2021', achievement: 'Introduced Tech Skills Training, empowering 1,000+ youth' },
    { year: '2022', achievement: 'Reached 5,000+ beneficiaries across 50+ communities' },
    { year: '2023', achievement: 'Launched entrepreneurship program with 25 active initiatives' },
    { year: '2024', achievement: 'Partnered with 100+ local organizations across West Africa' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-green text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About BOA ME</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Transforming Africa, One Youth at a Time
            </p>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              We are dedicated to empowering the next generation of African leaders through comprehensive education, skills training, and community development programs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue dark:text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                To empower African youth through comprehensive education, skills training, and mentorship programs that create lasting positive change in communities across the continent.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We believe that when young people are equipped with the right tools, knowledge, and opportunities, they become powerful agents of transformation in their communities.
              </p>
              <div className="space-y-4">
                {[
                  'Provide Quality Education Access',
                  'Develop Essential Life Skills',
                  'Foster Community Leadership',
                  'Create Sustainable Impact'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fadeIn" style={{ animationDelay: '200ms' }}>
              <img 
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Youth empowerment mission" 
                className="rounded-2xl shadow-2xl w-full" 
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-blue rounded-full flex items-center justify-center shadow-xl">
                <i className="fas fa-heart text-white text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fadeIn">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Vision for Africa's future" 
                className="rounded-2xl shadow-2xl w-full" 
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-green rounded-full flex items-center justify-center shadow-xl">
                <i className="fas fa-eye text-white text-2xl"></i>
              </div>
            </div>
            <div className="animate-fadeIn" style={{ animationDelay: '200ms' }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue dark:text-white">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                A thriving Africa where every young person has the opportunity to reach their full potential and contribute meaningfully to their community's development.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We envision a continent where youth are not just beneficiaries of development programs, but leaders, innovators, and change-makers who drive sustainable progress in their societies.
              </p>
              <div className="bg-gradient-to-r from-brand-blue to-brand-green text-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">By 2030, we aim to:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <i className="fas fa-star"></i>
                    <span>Empower 50,000+ young people across Africa</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="fas fa-star"></i>
                    <span>Establish programs in 20+ African countries</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="fas fa-star"></i>
                    <span>Create 10,000+ sustainable job opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue dark:text-white">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to African youth development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-dark-card rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${value.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-brand-blue dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue dark:text-white">Our Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From humble beginnings to transforming thousands of lives across Africa.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-green"></div>
              
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className="relative flex items-center mb-12 animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                    {milestone.year}
                  </div>
                  <div className="ml-8 bg-white dark:bg-dark-bg p-6 rounded-xl shadow-lg flex-1">
                    <p className="text-gray-700 dark:text-gray-300">{milestone.achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue dark:text-white">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Meet the dedicated professionals leading BOA ME's mission to empower African youth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-dark-card rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-lg"
                />
                <h3 className="text-xl font-semibold mb-2 text-brand-blue dark:text-white">
                  {member.name}
                </h3>
                <p className="text-brand-green font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-dark-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue dark:text-white">Why Choose BOA ME?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our unique approach sets us apart in youth development and community empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Local Expertise',
                description: 'Deep understanding of African contexts and challenges, with solutions designed by and for African communities.',
                icon: 'fas fa-globe-africa'
              },
              {
                title: 'Holistic Approach',
                description: 'We address education, skills training, mentorship, and community development as interconnected elements.',
                icon: 'fas fa-puzzle-piece'
              },
              {
                title: 'Proven Impact',
                description: 'Track record of transforming lives with measurable results and sustainable community change.',
                icon: 'fas fa-chart-line'
              },
              {
                title: 'Innovation Focus',
                description: 'Leveraging technology and creative solutions to address modern challenges facing African youth.',
                icon: 'fas fa-rocket'
              },
              {
                title: 'Community-Led',
                description: 'Programs developed with community input, ensuring relevance and long-term sustainability.',
                icon: 'fas fa-handshake'
              },
              {
                title: 'Partnership Network',
                description: 'Strong collaborations with local organizations, governments, and international partners.',
                icon: 'fas fa-network-wired'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-dark-bg rounded-2xl p-6 hover:shadow-xl transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-brand-blue dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-green text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Together, we can empower the next generation of African leaders and create lasting change in our communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                Become a Volunteer
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-blue transition-all">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
