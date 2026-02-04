"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Shield, ShieldCheck, Download, Chrome, Monitor, Zap, Globe, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-blue-500" size={32} />
            <span className="text-xl font-bold tracking-tighter uppercase">M2VPN</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
            <a href="#security" className="hover:text-blue-400 transition-colors">Security</a>
            <a href="#download" className="px-5 py-2 rounded-full border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-all">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -mr-96 -mt-96" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Zap size={14} /> Powered by M2
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]"
            >
              SOVEREIGN <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">ENCRYPTION.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed"
            >
              High-performance, WireGuard-powered VPN ecosystem designed for professionals who demand absolute privacy and speed.
            </motion.p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition-all flex items-center gap-3 shadow-xl shadow-blue-500/20">
                <Download size={20} /> Download for Mac
              </button>
              <button className="px-8 py-4 glass rounded-2xl font-bold transition-all border-white/10 hover:border-white/20 flex items-center gap-3">
                <Chrome size={20} /> Add to Chrome
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Lock />, title: 'Zero Logs', desc: 'No tracking, no logs, no exceptions. Your data remains yours.' },
              { icon: <Globe />, title: 'Global Nodes', desc: 'High-speed sovereign exit nodes optimized for low latency.' },
              { icon: <Monitor />, title: 'Multi-Device', desc: 'Seamless protection across Desktop, Browser, and Mobile.' }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl glass border-white/5 hover:border-blue-500/20 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-blue-500" size={24} />
            <span className="text-md font-bold tracking-tighter uppercase">M2VPN</span>
          </div>
          <p className="text-slate-500 text-sm font-bold tracking-widest uppercase">
            Powered by M2
          </p>
          <div className="flex gap-6 text-slate-500 text-xs uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
