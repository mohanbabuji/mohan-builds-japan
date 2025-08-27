import { Github, Linkedin, Instagram, Mail, MapPin, Coffee } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/mohan',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/mohan',
      icon: Github,
      color: 'hover:text-gray-900'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/mohan',
      icon: Instagram,
      color: 'hover:text-pink-600'
    },
    {
      name: 'Email',
      href: 'mailto:mohan@example.com',
      icon: Mail,
      color: 'hover:text-red-600'
    }
  ];

  return (
    <footer className="bg-text-hero text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">MOHAN</h3>
            <p className="text-gray-300 leading-relaxed">
              Cloud Engineer & Full-Stack Developer crafting innovative solutions from Japan. 
              Passionate about building scalable applications and cloud infrastructure.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{t('footer.location')}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">{t('footer.connect')}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Coffee className="h-4 w-4" />
                <span className="text-sm">{t('footer.status')}</span>
              </div>
              <p className="text-gray-300 text-sm">
                Let's discuss your next project over coffee (virtually or in person if you're in Japan!)
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/10 rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110 ${link.color}`}
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="text-gray-300 text-sm">
              <p>Available for:</p>
              <ul className="mt-2 space-y-1">
                <li>• Full-time opportunities</li>
                <li>• Freelance projects</li>
                <li>• Technical consulting</li>
                <li>• Code reviews & mentoring</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Mohan. Built with React, TypeScript & Tailwind CSS.
            </p>
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <span>🚀 Deployed on AWS</span>
              <span>💡 Designed & Developed by Mohan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};