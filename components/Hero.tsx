import React, { useState, useEffect } from 'react';
import { Chrome, ArrowLeft, Wand2, RefreshCw } from 'lucide-react';
import { HERO_CONTENT, DEMO_SCENARIOS } from '../constants';

const Hero: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState('formal');
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const targetText = DEMO_SCENARIOS.scenarios.find(s => s.id === activeScenario)?.text || "";
    setIsAnimating(true);
    setDisplayText('');
    
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(targetText.substring(0, i + 1));
      i++;
      if (i === targetText.length) {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 20); // Typing speed

    return () => clearInterval(interval);
  }, [activeScenario]);

  const handleScrollToDemo = () => {
    const demoElement = document.getElementById('interactive-demo');
    if (demoElement) {
        demoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]"></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            {HERO_CONTENT.badge}
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          {HERO_CONTENT.title} <br className="hidden md:block" />
          <span className="gradient-text">{HERO_CONTENT.titleHighlight}</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {HERO_CONTENT.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-cyan-900/50 flex items-center justify-center gap-2">
            <Chrome className="w-5 h-5" />
            {HERO_CONTENT.ctaPrimary}
          </button>
          
          <button 
            onClick={handleScrollToDemo}
            className="w-full sm:w-auto px-8 py-4 bg-gray-800 hover:bg-gray-700 text-gray-200 font-bold rounded-xl border border-gray-700 transition-all flex items-center justify-center gap-2 group"
          >
            {HERO_CONTENT.ctaSecondary}
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </button>
        </div>

        {/* INTERACTIVE DEMO VISUALIZATION */}
        <div id="interactive-demo" className="mt-20 relative max-w-4xl mx-auto">
            {/* Glow effect behind */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-purple-500/5 to-transparent blur-3xl -z-10"></div>
            
            <div className="glass-card rounded-2xl p-1 shadow-2xl overflow-hidden border-gray-700 text-right dir-rtl">
                {/* Simulated Browser/App Header */}
                <div className="bg-gray-800/80 px-4 py-3 border-b border-gray-700 flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="text-xs text-gray-400 font-mono">virAI Editor Demo</div>
                </div>

                <div className="p-6 md:p-8 grid md:grid-cols-2 gap-6 bg-gray-900/40">
                    
                    {/* LEFT SIDE: INPUT (Original Text) */}
                    <div className="flex flex-col gap-3">
                        <label className="text-sm text-gray-400 font-medium">متن شما (انتخاب شده در مرورگر)</label>
                        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 h-48 md:h-64 text-gray-300 leading-7 relative group">
                            <p>{DEMO_SCENARIOS.input}</p>
                            {/* Cursor Simulation */}
                            <div className="absolute bg-cyan-500/20 inset-2 rounded pointer-events-none border border-cyan-500/30 animate-pulse"></div>
                            <div className="absolute -top-3 -right-2 bg-cyan-600 text-white text-[10px] px-2 py-0.5 rounded-full shadow-lg">virAI فعال شد</div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: ACTIONS & OUTPUT */}
                    <div className="flex flex-col gap-3">
                        <label className="text-sm text-gray-400 font-medium">خروجی هوش مصنوعی</label>
                        
                        {/* Control Tabs */}
                        <div className="flex bg-gray-800 p-1 rounded-lg mb-2">
                            {DEMO_SCENARIOS.scenarios.map((scenario) => (
                                <button
                                    key={scenario.id}
                                    onClick={() => setActiveScenario(scenario.id)}
                                    className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                                        activeScenario === scenario.id 
                                        ? 'bg-cyan-600 text-white shadow' 
                                        : 'text-gray-400 hover:text-white hover:bg-gray-700'
                                    }`}
                                >
                                    {scenario.label}
                                </button>
                            ))}
                        </div>

                        {/* Output Box */}
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/30 rounded-xl p-4 h-full min-h-[160px] relative shadow-inner">
                            <div className="flex items-start gap-3">
                                <Wand2 className={`w-5 h-5 text-cyan-400 mt-1 ${isAnimating ? 'animate-spin' : ''}`} />
                                <p className="text-white leading-7 text-lg font-light">
                                    {displayText}
                                    <span className="inline-block w-0.5 h-5 bg-cyan-400 align-middle ml-1 animate-pulse"></span>
                                </p>
                            </div>
                            
                            {/* Copy/Apply Button Simulation */}
                            <div className="absolute bottom-3 left-3 flex gap-2">
                                <button className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 text-gray-300 transition-colors">
                                    <RefreshCw className="w-4 h-4" />
                                </button>
                                <button className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-colors">
                                    جایگزینی متن
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;