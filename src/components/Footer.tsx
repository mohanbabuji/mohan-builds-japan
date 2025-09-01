import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t, language } = useLanguage();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mohan-babujii",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/mohanbabuji",
      icon: Github,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/zymuz.gallery/",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "https://x.com/Mohan_Babujii",
      icon: Twitter,
    },
    {
      name: "Email",
      href: "mailto:mohanbabujii.official@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-black tracking-tight text-black">
              MOHAN
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-xs">
              {language === "en"
                ? "Cloud Engineer & Full-Stack Developer crafting innovativesolutions from Japan."
                : "革新的なソリューションを生み出す日本のクラウドエンジニア及フルスタック開発者"}
            </p>
            <div className="flex items-center space-x-2 text-gray-500">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">
                {t("footer.location")}
              </span>
            </div>
          </div>

          {/* Status */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold tracking-wide uppercase text-black">
              Status
            </h4>
            <div className="space-y-3">
              <p className="text-gray-600">{t("footer.status")}</p>
              <div className="inline-block">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-600">
                    {language === "en"
                      ? "Available for projects"
                      : "プロジェクトに参加可能"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold tracking-wide uppercase text-black">
              Connect
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-200 text-sm font-medium"
                >
                  <link.icon className="h-4 w-4" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 Mohan. All rights reserved.
            </p>
            <div className="flex items-center space-x-8 text-gray-500 text-sm">
              <span className="font-medium">BUILT WITH REACT</span>
              <span className="font-medium">DEPLOYED ON AWS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
