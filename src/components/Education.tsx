import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/education';

export default function Education() {
  const { t, i18n } = useTranslation();

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('education.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('education.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-blue-600 dark:bg-blue-500 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree[i18n.language as 'en' | 'fr']}
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-1">
                    {edu.field[i18n.language as 'en' | 'fr']}
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{edu.location}</p>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mt-2">
                    {edu.period}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {edu.description[i18n.language as 'en' | 'fr']}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Key Coursework
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'Object-Oriented Programming',
              'Data Structures & Algorithms',
              'Database Management',
              'Web Development',
              'Mobile Development',
              'Cryptography',
              'Computer Security',
              'Software Engineering',
              'Networking',
              'Operating Systems',
              'Machine Learning',
              'Theory of Computation'
            ].map((course, index) => (
              <motion.div
                key={course}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-3 bg-white dark:bg-gray-700 rounded-lg text-center text-gray-700 dark:text-gray-300 font-medium"
              >
                {course}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
