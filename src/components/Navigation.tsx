import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/works", label: t("nav.works") },
    { path: "/contact", label: t("nav.contact") },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white border-b border-gray-200" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Awwwards Style */}
          <Link
            to="/"
            className="text-2xl font-black tracking-tight text-black hover:text-gray-600 transition-colors"
          >
            Mohan.
          </Link>

          {/* Desktop Navigation - Minimal */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-minimal ${
                  isActive(item.path)
                    ? "text-black border-b-2 border-black pb-1"
                    : "text-gray-600"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Toggle - Minimal */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="nav-minimal border border-gray-300 px-4 py-2 hover:bg-gray-100"
            >
              {language === "en" ? "日本語" : "EN"}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-black text-xs font-medium tracking-wide uppercase"
            >
              {language === "en" ? "日本語" : "EN"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-black"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-20 bg-white z-40">
            <div className="px-6 pt-8 pb-6 space-y-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-3xl font-bold tracking-tight transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-black"
                      : "text-gray-400 hover:text-black"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
