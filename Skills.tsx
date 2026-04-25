import { motion } from 'motion/react';
import { resumeData } from '../resumeData';

export const Skills = () => {
  return (
    <section className="py-24 px-6 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Arsenal</h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {skillGroup.name}
                </h3>
                <span className="text-xs font-mono text-blue-500 bg-blue-500/10 px-2 py-1 rounded">
                  {skillGroup.level}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.keywords.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-sm border border-white/5 hover:border-blue-500/50 hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Languages Summary */}
        <div className="mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-blue-600/5 border border-blue-500/20 max-w-md w-full"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Languages
            </h3>
            <div className="space-y-4">
              {resumeData.languages.map((lang, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-slate-300">{lang.language}</span>
                  <span className="text-blue-400 text-sm font-mono">{lang.fluency}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
