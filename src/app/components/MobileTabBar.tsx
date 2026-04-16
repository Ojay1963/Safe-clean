import { Link, useLocation } from 'react-router';
import { Home, Info, BriefcaseBusiness, Shirt, Phone } from 'lucide-react';

const tabs = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/services', label: 'Services', icon: BriefcaseBusiness },
  { to: '/laundry', label: 'Laundry', icon: Shirt },
  { to: '/contact', label: 'Contact', icon: Phone },
  { to: '/about', label: 'About', icon: Info },
];

export function MobileTabBar() {
  const location = useLocation();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/60 bg-white/90 px-3 pb-[calc(0.9rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between rounded-[28px] bg-[#0f2f86] px-2 py-2 shadow-[0_18px_45px_rgba(15,47,134,0.35)]">
        {tabs.map(({ to, label, icon: Icon }) => {
          const isActive =
            to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

          return (
            <Link
              key={to}
              to={to}
              className={`flex min-w-0 flex-1 flex-col items-center gap-1 rounded-[20px] px-2 py-2 text-[11px] font-semibold transition-all ${
                isActive
                  ? 'bg-white text-[#0f2f86] shadow-[0_10px_25px_rgba(255,255,255,0.22)]'
                  : 'text-blue-100'
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="truncate">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
