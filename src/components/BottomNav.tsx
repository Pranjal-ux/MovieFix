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
      className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/80 dark:bg-white/80 backdrop-blur-xl shadow-2xl rounded-full border border-gray-200/50 z-50"
    >
      <div className="relative flex items-center justify-around h-16 px-4">
        <div 
          ref={indicatorRef}
          className="absolute bottom-2 w-12 h-1 bg-primary rounded-full shadow-glow"
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
              className={`flex flex-col items-center justify-center gap-0.5 min-w-[60px] transition-all duration-300 ${
                isActive
                  ? "text-primary scale-105"
                  : "text-gray-500 hover:text-primary opacity-60 hover:opacity-100"
              }`}
            >
              <Icon className={`h-5 w-5 transition-all duration-300 ${isActive ? "scale-110" : ""}`} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-semibold">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
