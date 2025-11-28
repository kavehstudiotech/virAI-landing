import React from 'react';
import { STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-900 to-transparent"></div>
        
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">شروع کار ساده است</h2>
          <p className="text-gray-400 text-lg">بدون پیچیدگی، فقط در سه مرحله قدرت هوش مصنوعی را فعال کنید.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-800 -z-10"></div>

          {STEPS.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-gray-900 border-4 border-gray-800 rounded-full flex items-center justify-center text-3xl font-bold text-cyan-500 shadow-xl mb-6 z-10 relative">
                  {step.step}
                  <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-pulse"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 px-4">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;