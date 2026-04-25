import { motion } from 'motion/react';
import { Linkedin, Mail, Phone, ArrowUp, ExternalLink, Award, GraduationCap } from 'lucide-react';
import { resumeData } from '../resumeData';

const getProfileIcon = (network: string) => {
  switch (network.toLowerCase()) {
    case 'linkedin': return <Linkedin size={20} />;
    case 'coursera': return <GraduationCap size={20} />;
    case 'credly': return <Award size={20} />;
    default: return <ExternalLink size={20} />;
  }
};

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-slate-950/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">{resumeData.basics.name}</h2>
          <p className="text-slate-500 text-sm">{resumeData.basics.label}</p>
        </div>

        <div className="flex items-center gap-6">
          <a href={`mailto:${resumeData.basics.email}`} className="p-3 rounded-full bg-white/5 text-slate-400 hover:bg-blue-600 hover:text-white transition-all" title="Email">
            <Mail size={20} />
          </a>
          <a href={`tel:${resumeData.basics.phone}`} className="p-3 rounded-full bg-white/5 text-slate-400 hover:bg-blue-600 hover:text-white transition-all" title="Call">
            <Phone size={20} />
          </a>
          {resumeData.basics.profiles.map((profile, idx) => (
            <a 
              key={idx}
              href={profile.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white/5 text-slate-400 hover:bg-blue-600 hover:text-white transition-all"
              title={profile.network}
            >
              {getProfileIcon(profile.network)}
            </a>
          ))}
        </div>

        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <span className="text-sm font-medium">Back to Top</span>
          <div className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-600 transition-all">
            <ArrowUp size={16} />
          </div>
        </button>
      </div>
      
      <div className="mt-12 text-center text-slate-600 text-xs font-mono">
        © {new Date().getFullYear()} {resumeData.basics.name}.
      </div>
    </footer>
  );
};
