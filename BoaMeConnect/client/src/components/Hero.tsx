export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-brand-blue to-brand-green text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Youth empowerment activities" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Youth for a <span className="text-yellow-300">Brighter Future</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Join us in transforming communities through education, mentorship, and sustainable development programs across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-brand-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105">
              Get Involved
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-brand-blue transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L50 110C100 100 200 80 300 70C400 60 500 60 600 65C700 70 800 80 900 85C1000 90 1100 90 1150 90L1200 90V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z" 
            fill="currentColor" 
            className="text-white dark:text-dark-bg"/>
        </svg>
      </div>
    </section>
  );
}
