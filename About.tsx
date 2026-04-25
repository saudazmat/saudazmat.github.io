import { motion } from 'motion/react';
import { resumeData } from '../resumeData';

export const About = () => {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-widest">
          Executive Summary
        </div>
        
        <div className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-blue-600 rounded-full" />
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light italic pl-6">
            "{resumeData.basics.summary.split('\n\n')[0]}"
          </p>
        </div>

        <p className="text-slate-400 leading-relaxed text-lg">
          {resumeData.basics.summary.split('\n\n')[1]}
        </p>
      </motion.div>
    </section>
  );
};
