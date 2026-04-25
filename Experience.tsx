import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, Trophy } from 'lucide-react';
import { resumeData } from '../resumeData';

export const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Professional Journey</h2>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
      </motion.div>

      {/* Top Impact Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {resumeData.achievements.slice(0, 3).map((achievement, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-blue-500/50 transition-all group"
          >
            <Trophy className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{achievement.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="space-y-6">
        {resumeData.work.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div
              onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                expandedIndex === idx
                  ? 'bg-blue-600/10 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.1)]'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl transition-colors ${
                    expandedIndex === idx ? 'bg-blue-600 text-white' : 'bg-white/5 text-slate-400'
                  }`}>
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{job.position}</h3>
                    <p className="text-blue-400 font-medium">{job.company}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Calendar size={14} />
                    {job.startDate} - {job.endDate}
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <MapPin size={12} />
                    {job.location}
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {expandedIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 mt-6 border-t border-white/10">
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {job.summary}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {job.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-3">
                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span className="text-sm text-slate-400">{highlight}</span>
                          </div>
                        ))}
                      </div>
                      {job.duration && (
                        <div className="mt-6 inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-mono">
                          Duration: {job.duration}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className="mt-4 flex justify-center md:hidden">
                <ChevronRight className={`transition-transform ${expandedIndex === idx ? 'rotate-90' : ''}`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
