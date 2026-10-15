import React, { useState } from 'react';
import { 
  Sun, 
  Moon, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  Smile, 
  Target, 
  Droplets
} from 'lucide-react';

export default function App() {
  const [isCurtainsOpen, setIsCurtainsOpen] = useState(false);
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: 'Alifya Aisya Widjayani',
    email: '',
    mood: 'Semangat 🚀',
    waterTarget: 6,
    focusGoal: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleCurtains = () => {
    setIsCurtainsOpen(prev => !prev);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className={`min-h-screen transition-all duration-1000 flex items-center justify-center p-4 relative overflow-hidden font-sans select-none ${
      isCurtainsOpen 
        ? 'bg-gradient-to-br from-amber-100 via-orange-100 to-amber-200 text-stone-800' 
        : 'bg-gradient-to-br from-slate-950 via-zinc-950 to-slate-900 text-stone-100'
    }`}>
      
      {/* Interactive Opening Curtains - Enhanced Visibility & Rich Texturing */}
      <div className="absolute inset-0 flex justify-between pointer-events-none z-30 overflow-hidden">
        {/* Left Curtain */}
        <div 
          onClick={toggleCurtains}
          className={`pointer-events-auto cursor-pointer w-1/2 h-full bg-gradient-to-r from-red-950 via-red-900 to-rose-950 shadow-[20px_0_50px_rgba(0,0,0,0.8)] transition-transform duration-1000 ease-in-out border-r-8 border-amber-600/80 relative flex items-center justify-end pr-8 ${
            isCurtainsOpen ? '-translate-x-full' : 'translate-x-0'
          }`}
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(0,0,0,0.2) 0px, rgba(255,255,255,0.05) 15px, rgba(0,0,0,0.3) 30px)'
          }}
        >
          {/* Golden Tieback / Handle indicator */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-24 bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 rounded-full shadow-lg flex items-center justify-center">
            <div className="w-1.5 h-16 bg-amber-200/50 rounded-full"></div>
          </div>

          <div className="bg-red-950/90 border border-amber-500/50 px-4 py-2 rounded-xl text-amber-300 text-xs font-bold uppercase tracking-widest shadow-2xl rotate-90 sm:rotate-0 flex items-center gap-2 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" /> 
            {isCurtainsOpen ? 'Klik Tutup Tirai' : 'Klik Buka Tirai ➔'}
          </div>
        </div>

        {/* Right Curtain */}
        <div 
          onClick={toggleCurtains}
          className={`pointer-events-auto cursor-pointer w-1/2 h-full bg-gradient-to-l from-red-950 via-red-900 to-rose-950 shadow-[-20px_0_50px_rgba(0,0,0,0.8)] transition-transform duration-1000 ease-in-out border-l-8 border-amber-600/80 relative flex items-center justify-start pl-8 ${
            isCurtainsOpen ? 'translate-x-full' : 'translate-x-0'
          }`}
          style={{
            backgroundImage: 'repeating-linear-gradient(270deg, rgba(0,0,0,0.2) 0px, rgba(255,255,255,0.05) 15px, rgba(0,0,0,0.3) 30px)'
          }}
        >
          {/* Golden Tieback / Handle indicator */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-24 bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 rounded-full shadow-lg flex items-center justify-center">
            <div className="w-1.5 h-16 bg-amber-200/50 rounded-full"></div>
          </div>

          <div className="bg-red-950/90 border border-amber-500/50 px-4 py-2 rounded-xl text-amber-300 text-xs font-bold uppercase tracking-widest shadow-2xl -rotate-90 sm:rotate-0 flex items-center gap-2 backdrop-blur-md">
            {isCurtainsOpen ? 'Klik Tutup Tirai' : '← Klik Buka Tirai'} <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Main Glassmorphism Form */}
      <div className={`w-full max-w-md rounded-3xl p-8 backdrop-blur-2xl transition-all duration-700 relative z-25 shadow-2xl border ${
        isCurtainsOpen 
          ? 'bg-white/85 border-amber-200/80 text-stone-800 shadow-amber-900/15' 
          : 'bg-stone-900/75 border-stone-800/80 text-stone-100 shadow-black/90'
      }`}>

        {!isCurtainsOpen && (
          <div className="mb-6 p-3 bg-amber-500/20 border border-amber-500/40 rounded-2xl text-center text-amber-300 text-xs animate-bounce flex items-center justify-center gap-2 cursor-pointer shadow-lg" onClick={toggleCurtains}>
            <Sparkles className="w-4 h-4" /> Klik tirai merah beludru di samping untuk membuka ruangan!
          </div>
        )}

        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-500 mb-2 animate-float">
            {isCurtainsOpen ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </div>
          <h1 className="text-2xl font-bold tracking-tight">MorningGlow Form</h1>
          <p className="text-xs opacity-70 mt-1">Formulir Rutinitas & Masuk Ruang Kerja Harian</p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className={`space-y-5 transition-opacity duration-500 ${!isCurtainsOpen ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
            
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-sm font-semibold flex items-center gap-2 text-amber-600">
                  <Smile className="w-4 h-4" /> 1. Identitas & Suasana Hati
                </h2>
                <div>
                  <label className="block text-xs uppercase font-semibold opacity-70 mb-1">Nama Lengkap</label>
                  <input 
                    type="text" 
                    required
                    placeholder="cth. Alifya Aisya Widjayani"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full bg-stone-500/10 border border-stone-500/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-semibold opacity-70 mb-1">Email Akademik / Profesional</label>
                  <input 
                    type="email" 
                    required
                    placeholder="cth. alifya@student.ac.id"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full bg-stone-500/10 border border-stone-500/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-semibold opacity-70 mb-1">Mood Hari Ini</label>
                  <select 
                    value={formData.mood}
                    onChange={(e) => handleInputChange('mood', e.target.value)}
                    className="w-full bg-stone-500/10 border border-stone-500/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="Semangat 🚀">Semangat 🚀</option>
                    <option value="Santai ☕">Santai ☕</option>
                    <option value="Fokus Tajam 💻">Fokus Tajam 💻</option>
                    <option value="Butuh Istirahat 🌙">Butuh Istirahat 🌙</option>
                  </select>
                </div>
                <button 
                  type="button" 
                  onClick={() => setStep(2)}
                  disabled={!formData.name || !formData.email}
                  className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-stone-950 font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
                >
                  Lanjut <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-sm font-semibold flex items-center gap-2 text-amber-600">
                  <Droplets className="w-4 h-4" /> 2. Hidrasi & Target Harian
                </h2>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold uppercase opacity-70">Target Air Minum</span>
                    <span className="font-bold text-amber-600">{formData.waterTarget} Gelas ({formData.waterTarget * 250} ml)</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="12" 
                    value={formData.waterTarget}
                    onChange={(e) => handleInputChange('waterTarget', e.target.value)}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-semibold opacity-70 mb-1">Misi Utama Hari Ini</label>
                  <textarea 
                    rows="3"
                    required
                    placeholder="cth. Menyelesaikan komponen React & tugas project"
                    value={formData.focusGoal}
                    onChange={(e) => handleInputChange('focusGoal', e.target.value)}
                    className="w-full bg-stone-500/10 border border-stone-500/20 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                  ></textarea>
                </div>
                <div className="flex gap-2">
                  <button 
                    type="button" 
                    onClick={() => setStep(1)}
                    className="w-1/3 py-2.5 bg-stone-500/20 hover:bg-stone-500/30 font-semibold rounded-xl text-sm transition-all cursor-pointer flex items-center justify-center gap-1"
                  >
                    <ArrowLeft className="w-4 h-4" /> Kembali
                  </button>
                  <button 
                    type="submit" 
                    className="w-2/3 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
                  >
                    Masuk Ruang Kerja <CheckCircle2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

          </form>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-500">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="t-xl font-bold">Selamat Datang, {formData.name}!</h2>
            <p className="text-xs opacity-70">
              Ruang kerja harianmu sudah aktif dengan mood <span className="font-bold text-amber-600">{formData.mood}</span>.
            </p>
            <div className="p-3 bg-stone-500/10 rounded-xl text-xs text-left">
              <div className="font-semibold text-amber-600 mb-1 flex items-center gap-1">
                <Target className="w-3.5 h-3.5" /> Misi Utamamu:
              </div>
              <p className="italic opacity-80">"{formData.focusGoal}"</p>
            </div>
            <button 
              onClick={() => { setIsSubmitted(false); setStep(1); }}
              className="text-xs underline opacity-70 hover:opacity-100 cursor-pointer"
            >
              Isi Ulang Formulir
            </button>
          </div>
        )}

      </div>

    </div>
  );
}