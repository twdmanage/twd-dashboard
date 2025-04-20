
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CheckSquare, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import WeeklyOverview from "./WeeklyOverview";
import KeyMetrics from "./KeyMetrics";
import WeeklyPlanning from "./WeeklyPlanning";
import { useLanguage, renderTranslation } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { icon: "📊", label: t("dashboard.quickLinks.analytics"), to: "/analytics" },
    { icon: "📷", label: t("dashboard.quickLinks.social"), to: "#" },
    { icon: "📅", label: t("dashboard.quickLinks.workshop"), to: "#" },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold text-wood-700">{t("dashboard.title")}</h1>
        <p className="text-xl text-sage-600">{t("dashboard.subtitle")}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex flex-col h-full">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-wood-500" />
              <h3 className="font-semibold text-lg">{t("dashboard.calendar.title")}</h3>
            </div>
            <p className="mt-2 text-muted-foreground flex-1">
              {t("dashboard.calendar.description")}
            </p>
            <Button className="mt-4 bg-wood-600 hover:bg-wood-700">
              {t("dashboard.calendar.button")}
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex flex-col h-full">
            <div className="flex items-center space-x-2">
              <CheckSquare className="h-5 w-5 text-sage-500" />
              <h3 className="font-semibold text-lg">{t("dashboard.taskManager.title")}</h3>
            </div>
            <p className="mt-2 text-muted-foreground flex-1">
              {t("dashboard.taskManager.description")}
            </p>
            <Button asChild className="mt-4 bg-sage-600 hover:bg-sage-700">
              <Link to="/tasks">{t("dashboard.taskManager.button")}</Link>
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex flex-col h-full">
            <div className="flex items-center space-x-2">
              <LinkIcon className="h-5 w-5 text-wood-500" />
              <h3 className="font-semibold text-lg">{t("dashboard.quickLinks.title")}</h3>
            </div>
            <div className="mt-4 flex-1">
              <ul className="space-y-3">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.to}
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-accent"
                    >
                      <span>{link.icon}</span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-12">
        <WeeklyOverview />
        <KeyMetrics />
        <WeeklyPlanning />
      </div>
    </div>
  );
};

export default Index;
