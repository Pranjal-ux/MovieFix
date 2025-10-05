import { Home, Search, Library, User } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  const navRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (navRef.current) {
      gsap.from(navRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    }
  }, []);

  useEffect(() => {
    const activeIndex = navItems.findIndex(item => item.id === activeTab);
    const activeButton = buttonsRef.current[activeIndex];
    
    if (activeButton && indicatorRef.current) {
      const buttonRect = activeButton.getBoundingClientRect();
      const navRect = navRef.current?.getBoundingClientRect();
      
      if (navRect) {
        const left = buttonRect.left - navRect.left + buttonRect.width / 2 - 24;
        
        gsap.to(indicatorRef.current, {
          x: left,
          duration: 0.4,
          ease: "power2.out"
        });
      }
    }
  }, [activeTab]);

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "search", icon: Search, label: "Search" },
    { id: "library", icon: Library, label: "Library" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  const handleTabClick = (id: string) => {
    const button = buttonsRef.current[navItems.findIndex(item => item.id === id)];
    if (button) {
      gsap.to(button, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
    }
    onTabChange(id);
  };

  return (
    <nav 
      ref={navRef}
      className="fixed bottom-0 left-0 right-0 bg-white dark:bg-white shadow-lg border-t border-gray-200 z-50 pb-safe"
    >
      <div className="relative flex items-center justify-around h-16 max-w-screen-xl mx-auto px-4">
        <div 
          ref={indicatorRef}
          className="absolute bottom-0 w-12 h-1 bg-primary rounded-t-full"
          style={{ left: 0 }}
        />
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              ref={el => buttonsRef.current[index] = el}
              onClick={() => handleTabClick(item.id)}
              className={`flex flex-col items-center justify-center gap-1 min-w-[60px] transition-all duration-200 ${
                isActive
                  ? "text-primary scale-105"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              <Icon className={`h-6 w-6 transition-transform ${isActive ? "scale-110" : ""}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
