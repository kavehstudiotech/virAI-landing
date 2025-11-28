import React from 'react';
import { APP_NAME, FAQ_ITEMS } from '../constants';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-gray-900">
      
      {/* FAQ Section */}
      <div id="faq" className="max-w-4xl mx-auto px-4 mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">سوالات متداول</h2>
        <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
                <div key={idx} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">{item.q}</h3>
                    <p className="text-gray-400">{item.a}</p>
                </div>
            ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold text-white mb-2">{APP_NAME}</span>
            <p className="text-gray-500 text-sm">توسعه داده شده با ❤️ و هوش مصنوعی.</p>
        </div>

        <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Mail className="w-6 h-6" />
            </a>
        </div>
      </div>
      
      <div className="text-center mt-10 pt-10 border-t border-gray-900">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} {APP_NAME}. تمامی حقوق محفوظ است.
          </p>
      </div>
    </footer>
  );
};

export default Footer;