import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Link } from 'wouter';

export default function Home() {
  const programs = [
    {
      title: 'Education Support',
      description: 'Providing scholarships and learning materials to ensure quality education access for all youth.',
      icon: 'fas fa-graduation-cap',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      bgColor: 'bg-brand-green'
    },
    {
      title: 'Tech Skills Training',
      description: 'Equipping young people with digital literacy and technical skills for the modern economy.',
      icon: 'fas fa-laptop-code',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      bgColor: 'bg-brand-blue'
    },
    {
      title: 'Entrepreneurship',
      description: 'Supporting young entrepreneurs with mentorship, funding, and resources to start businesses.',
      icon: 'fas fa-seedling',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      bgColor: 'bg-brand-green'
    }
  ];

  const testimonials = [
    {
      name: 'Amara Johnson',
      role: 'Tech Skills Graduate',
      quote: 'BOA ME changed my life by teaching me coding skills. Now I work as a software developer and support my family.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b650?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150'
    },
    {
      name: 'Kwame Asante',
      role: 'Entrepreneur',
      quote: 'Through their mentorship program, I started my own business. BOA ME believes in youth potential.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150'
    },
    {
      name: 'Fatou Diallo',
      role: 'Education Beneficiary',
      quote: 'The scholarship I received helped me complete my education. Now I give back to my community.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150'
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      
      {/* Mission Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-card">
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
                We believe every young person deserves the opportunity to reach their full potential and become a catalyst for transformation in their community.
              </p>
              <Link href="/about">
                <button className="bg-brand-green text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all font-medium">
                  Learn More About Us
                </button>
              </Link>
            </div>
            <div className="relative animate-fadeIn" style={{ animationDelay: '200ms' }}>
              <img 
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Youth empowerment mission" 
                className="rounded-2xl shadow-2xl w-full" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue dark:text-white">Our Programs</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive initiatives designed to create lasting impact in youth development and community empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-dark-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group animate-fadeIn"
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
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/programs">
              <button className="bg-brand-blue text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all font-medium">
                View All Programs
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-dark-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue dark:text-white">Success Stories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hear from the young people whose lives have been transformed through our programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-dark-bg rounded-2xl shadow-lg p-8 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
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
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join us in transforming lives and building stronger communities. Whether you want to volunteer, donate, or partner with us, every action counts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                Volunteer With Us
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-blue transition-all">
                Make a Donation
              </button>
              <Link href="/shop">
                <button className="bg-brand-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                  Shop for a Cause
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
