import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const[resultMessage, setResultMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setResultMessage(null);

    const payload = new FormData();
    payload.append("access_key", "87e5d77a-c2b7-4b81-a070-1411317f640e");
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("message", formData.message);

    try{
      const response = await fetch("https://api.web3forms.com/submit",{
        method: "POST",
        body: payload
      });
      const data = await response.json();
      if (data.success){
        setStatus('success');
        setResultMessage('Message sent successfully!');
        setFormData({name: '', email:'', message: ''});
      }else{
        throw new Error("Submission failed");
      }
    }catch(error){
      console.error("web3Form error:", error);
      setStatus('error');
      setResultMessage("Something went wrong. Please try again later.")
    }

    setTimeout(() => setStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            {t('contact.subtitle')}
          </p>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('contact.info')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <a
                  href="mailto:gabrielwilfried0808@gmail.com"
                  className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm">gabrielwilfried0808@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+237652249235"
                  className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-sm">+237 652-249-235</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/gabriel-wilfried-yagaka-tagne-masters%C2%A0student-24927522b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-sm">Gabriel Wilfried Yagaka Tagne</p>
                  </div>
                </a>

                <a
                  href="https://github.com/gabrielWilfried"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    <Github className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm">@gabrielWilfried</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-semibold transition-colors"
              >
                <Send className="w-5 h-5" />
                <span>
                  {status === 'sending' ? t('contact.sending') : t('contact.send')}
                </span>
              </button>

              {resultMessage && status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-green-600 dark:text-green-400 text-center font-medium"
                >
                  {t('contact.success')}
                </motion.p>
              )}

              {resultMessage && status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-red-600 dark:text-red-400 text-center font-medium"
                >
                  {t('contact.error')}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
