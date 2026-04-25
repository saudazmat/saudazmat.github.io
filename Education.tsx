import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { resumeData } from '../resumeData';

export const Education = () => {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
      </motion.div>

      <div className="space-y-8">
        {resumeData.education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden group"
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-colors" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-blue-600/20 text-blue-500">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{edu.institution}</h3>
                  <p className="text-blue-400 font-medium mb-2">{edu.studyType}</p>
                  <p className="text-slate-400 text-lg">{edu.area}</p>
                </div>
              </div>
              
              <div className="flex flex-col md:items-end gap-2">
                <div className="flex items-center gap-2 text-slate-400 font-mono">
                  <Calendar size={16} />
                  {edu.startDate} - {edu.endDate}
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <MapPin size={14} />
                  {resumeData.basics.location.city}, {resumeData.basics.location.region}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
