"use client";

import { useState, useEffect } from "react";
import { Shield, ShieldAlert, Terminal, Radio, Clock, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [timeLeft, setTimeLeft] = useState("04:12:33");

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      const now = new Date();
      const resetTime = new Date();
      resetTime.setUTCHours(24, 0, 0, 0);
      const diff = resetTime.getTime() - now.getTime();
      
      const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");
      
      setTimeLeft(`${hours}:${minutes}:${seconds}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  if (!mounted) return <div className="min-h-screen bg-[#050505]" />;

  return (
    <main 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#050505] text-white font-sans overflow-hidden select-none blueprint-grid flex items-center justify-center p-6 md:p-12"
    >
      {/* Interactive Concrete-Blue Aurora Plume */}
      <motion.div 
        animate={{
          x: mousePos.x - 250,
          y: mousePos.y - 250,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 80 }}
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full bg-[#4D9CFF] opacity-[0.04] blur-[120px] will-change-transform"
      />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Matrix Column: Dynamic Branding */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5 backdrop-blur-md"
          >
            <Radio className="w-3.5 h-3.5 text-[#4D9CFF] animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] text-white/50">Network Status: Armed</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95]"
          >
            Never miss a <br/>
            <span className="text-[#4D9CFF]">check-in</span> again.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 max-w-md text-sm md:text-base leading-relaxed font-light"
          >
            A high-fidelity automated habit operating system. Guarding your position and structural integrity across the global ecosystem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className="group relative px-6 py-3 rounded-md bg-white text-black font-semibold text-sm transition-all duration-300 hover:bg-[#4D9CFF] hover:text-white overflow-hidden shadow-lg shadow-white/5">
              Activate Protection Layer
            </button>
          </motion.div>
        </div>

        {/* Right Matrix Column: High-Fidelity Infrastructure Telemetry Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 glass-panel rounded-xl p-6 relative overflow-hidden space-y-6"
        >
          <div className="flex justify-between items-start border-b border-white/5 pb-4">
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-widest text-white/30">System Core</div>
              <div className="text-sm font-bold tracking-tight">SENTINEL-NODE // BAGS</div>
            </div>
            <Shield className="w-5 h-5 text-[#4D9CFF]" />
          </div>

          {/* Telemetry Matrix Grid */}
          <div className="grid grid-cols-2 gap-4 font-mono">
            <div className="bg-white/[0.01] border border-white/5 rounded-lg p-3 space-y-1">
              <div className="flex items-center gap-1.5 text-white/30 text-[10px] uppercase tracking-wider">
                <Clock className="w-3 h-3" /> Reset Window
              </div>
              <div className="text-lg font-bold text-white tracking-tight tabular-nums">{timeLeft}</div>
            </div>

            <div className="bg-white/[0.01] border border-white/5 rounded-lg p-3 space-y-1">
              <div className="flex items-center gap-1.5 text-white/30 text-[10px] uppercase tracking-wider">
                <Activity className="w-3 h-3" /> Live Streaks
              </div>
              <div className="text-lg font-bold text-[#4D9CFF] tracking-tight">142,080</div>
            </div>
          </div>

          {/* Luxury Simulated Telegram Toast Component */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, type: "spring" }}
            className="bg-[#111111]/80 border border-amber-500/20 rounded-lg p-3 flex gap-3 items-start"
          >
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="text-[11px] font-bold text-amber-400 font-mono uppercase tracking-wider">Telemetry Warning</div>
              <p className="text-white/60 text-xs leading-normal font-light">
                Streak integrity at risk. Secure today's verification cycle immediately to prevent automated network penalty.
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </main>
  );
}
