
import { Book, Home, PieChart, Settings, User, CreditCard, Bell, CheckSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Sidebar = () => {
  const location = useLocation();
  const { t } = useLanguage();
  
  const menuItems = [
    { icon: Home, label: t("sidebar.dashboard"), path: "/" },
    { icon: PieChart, label: t("sidebar.analytics"), path: "/analytics" },
    { icon: CreditCard, label: t("sidebar.transactions"), path: "/transactions" },
    { icon: Bell, label: t("sidebar.notifications"), path: "/notifications" },
    { icon: User, label: t("sidebar.profile"), path: "/profile" },
    { icon: Book, label: t("sidebar.guide"), path: "/guide" },
    { icon: Settings, label: t("sidebar.settings"), path: "/settings" },
    { icon: CheckSquare, label: t("sidebar.tasks"), path: "/tasks" },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 glass-card border-r border-white/10">
      <div className="flex flex-col h-full">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-primary">{t("app.title")}</h2>
        </div>
        
        <nav className="flex-1 px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                      "hover:bg-white/10",
                      isActive ? "bg-white/10" : "text-secondary"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 mt-auto">
          <div className="flex items-center gap-3 px-4 py-3">
            <User className="h-8 w-8 rounded-full bg-accent p-1" />
            <div className="flex flex-col">
              <span className="text-sm font-medium">{t("user.name")}</span>
              <span className="text-xs text-secondary">{t("user.role")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
