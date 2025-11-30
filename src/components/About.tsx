import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code, Shield, Rocket, Users } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  const highlights = [
    { icon: Code, key: 'frontend' },
    { icon: Shield, key: 'security' },
    { icon: Rocket, key: 'performance' },
    { icon: Users, key: 'teamwork' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.bio1')}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.bio2')}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.bio3')}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.bio4')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <item.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white capitalize">
                  {item.key}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">2+</h3>
            <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">8+</h3>
            <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</h3>
            <p className="text-gray-600 dark:text-gray-400">Technologies</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</h3>
            <p className="text-gray-600 dark:text-gray-400">Client Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
