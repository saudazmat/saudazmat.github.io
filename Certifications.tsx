import { motion } from 'motion/react';
import { Award, ShieldCheck, GraduationCap, Globe, Shield } from 'lucide-react';
import { resumeData } from '../resumeData';

const getCertIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('google')) return <Globe className="text-blue-400" />;
  if (n.includes('cyber')) return <Shield className="text-red-400" />;
  if (n.includes('american')) return <Globe className="text-green-400" />;
  return <Award className="text-yellow-400" />;
};

const getProviderLink = (name: string) => {
  const coursera = "https://www.coursera.org/user/684cf226b5a5db25f46498ca60cf7265";
  const credly = "https://www.credly.com/users/muhammad-saud.587e4f00";
  if (name.toLowerCase().includes('google') || name.toLowerCase().includes('cyber')) return credly;
  return coursera;
};

export const Certifications = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Credentials & Badges</h2>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
        <p className="mt-4 text-slate-400">Verified professional certifications from global industry leaders.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumeData.certifications.map((cert: any, idx) => (
          <motion.a
            key={idx}
            href={cert.verificationUrl || getProviderLink(cert.name)}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-blue-500/50 transition-all overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               {getCertIcon(cert.name)}
            </div>
            
            <div className="relative z-10">
              <div className="mb-4 inline-flex p-3 rounded-xl bg-blue-600/10 text-blue-400">
                {getCertIcon(cert.name)}
              </div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors line-clamp-2 min-h-[3.5rem]">
                {cert.name}
              </h3>
              <div className="flex items-center justify-between mt-4">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase tracking-wider">{cert.issuer}</span>
                  <span className="text-xs text-slate-600">{cert.date}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <ShieldCheck size={14} className="text-blue-500" />
                  <span className="text-xs">Verified</span>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 flex items-center gap-1 text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Verify Candidate</span>
              <Globe size={11} />
            </div>
          </motion.a>
        ))}
      </div>
      
      {/* Visual links for Coursera and Credly badges */}
      <div className="mt-16 flex flex-wrap justify-center gap-8">
        <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-1 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 overflow-hidden"
        >
            <a 
                href="https://www.coursera.org/user/684cf226b5a5db25f46498ca60cf7265" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-8 py-4 bg-slate-950 rounded-2xl text-white font-bold text-center"
            >
                View all Coursera Certificates
            </a>
        </motion.div>
        
        <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-1 rounded-2xl bg-gradient-to-r from-orange-400 to-red-500 overflow-hidden"
        >
            <a 
                href="https://www.credly.com/users/muhammad-saud.587e4f00" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-8 py-4 bg-slate-950 rounded-2xl text-white font-bold text-center"
            >
                View Credly Badges
            </a>
        </motion.div>
      </div>
    </section>
  );
};
