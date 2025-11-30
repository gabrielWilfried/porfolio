import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Gabriel Wilfried Yagaka Tagne. All rights reserved.
          </p>
          <p className="flex items-center text-gray-400">
            Built with <Heart className="w-4 h-4 mx-2 text-red-500 fill-current" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
