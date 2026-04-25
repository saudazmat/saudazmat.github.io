import { motion } from 'motion/react';
import { Download, ChevronDown, Linkedin, Mail, Phone, ExternalLink, Award, GraduationCap } from 'lucide-react';
import { resumeData } from '../resumeData';

const getProfileIcon = (network: string) => {
  switch (network.toLowerCase()) {
    case 'linkedin': return <Linkedin size={18} />;
    case 'coursera': return <GraduationCap size={18} />;
    case 'credly': return <Award size={18} />;
    default: return <ExternalLink size={18} />;
  }
};

export const Hero = () => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl text-center z-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium tracking-wider uppercase"
        >
          Available for Opportunities
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          {resumeData.basics.name}
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
          {resumeData.basics.label}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          <a href={`mailto:${resumeData.basics.email}`} className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
            <Mail size={18} />
            <span className="text-sm">Email</span>
          </a>
          <a href={`tel:${resumeData.basics.phone}`} className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
            <Phone size={18} />
            <span className="text-sm">Call</span>
          </a>
          {resumeData.basics.profiles.map((profile, idx) => (
            <a 
              key={idx}
              href={profile.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
            >
              {getProfileIcon(profile.network)}
              <span className="text-sm">{profile.network}</span>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToExperience}
            className="group relative px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold overflow-hidden transition-all hover:bg-blue-500 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Experience
              <ChevronDown className="group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
          
          <button className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-semibold backdrop-blur-sm hover:bg-white/10 transition-all flex items-center gap-2">
            <Download size={20} />
            Download Resume
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2"
        >
          <div className="w-1 h-2 bg-blue-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
