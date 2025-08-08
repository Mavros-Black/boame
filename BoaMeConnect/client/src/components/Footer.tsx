import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="@assets/Asset 8_1754570718252.png" 
                alt="BOA ME Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold text-brand-green">BOA ME</h3>
                <p className="text-xs text-gray-300">Youth Empowerment</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering African youth through education, skills training, and community development programs.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/" className="hover:text-brand-green transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-green transition-colors">About</Link></li>
              <li><Link href="/programs" className="hover:text-brand-green transition-colors">Programs</Link></li>
              <li><Link href="/shop" className="hover:text-brand-green transition-colors">Shop</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-brand-green transition-colors">Education Support</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Tech Skills Training</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Entrepreneurship</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Mentorship</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Stay updated with our latest programs and impact stories.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-green"
              />
              <button 
                type="submit" 
                className="w-full bg-brand-green text-white py-2 rounded-lg hover:bg-opacity-90 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 BOA ME Youth Empowerment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
