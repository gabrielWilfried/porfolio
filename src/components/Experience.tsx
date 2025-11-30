import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Briefcase } from 'lucide-react';
import { experiences } from '../data/experience';

export default function Experience() {
  const { t, i18n } = useTranslation();

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('experience.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.position[i18n.language as 'en' | 'fr']}
                    </h3>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">{exp.location}</p>
                  </div>
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities[i18n.language as 'en' | 'fr'].map((resp, respIndex) => (
                  <motion.li
                    key={respIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: respIndex * 0.05 }}
                    className="flex items-start text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">
                      ▹
                    </span>
                    <span>{resp}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
