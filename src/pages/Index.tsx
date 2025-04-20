
import WeeklyOverview from "./WeeklyOverview";
import KeyMetrics from "./KeyMetrics";
import WeeklyPlanning from "./WeeklyPlanning";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CheckSquare, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleGoogleCalendarConnect = () => {
    const googleCalendarURL = "https://calendar.google.com";
    window.open(googleCalendarURL, '_blank');
    toast.success("Opening Google Calendar");
  };

  const handleTaskManager = () => {
    navigate("/tasks");
    toast.success("Opening Task Manager");
  };

  const handleQuickLinks = (destination: string) => {
    switch (destination) {
      case "analytics":
        navigate("/analytics");
        break;
      case "social":
        navigate("/social");
        break;
      case "workshop":
        navigate("/workshop");
        break;
      default:
        break;
    }
  };

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold text-wood-700">{t("dashboard.title")}</h1>
        <p className="text-sage-600">{t("dashboard.subtitle")}</p>
      </header>

      <WeeklyOverview />
      <KeyMetrics />
      <WeeklyPlanning />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Calendar className="h-5 w-5 text-wood-500" />
            <h3 className="text-lg font-medium text-wood-700">{t("dashboard.calendar.title")}</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            {t("dashboard.calendar.description")}
          </p>
          <Button 
            onClick={handleGoogleCalendarConnect}
            className="mt-4 px-4 py-2 bg-wood-500 text-white rounded-md hover:bg-wood-600 transition-colors"
          >
            {t("dashboard.calendar.button")}
          </Button>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <CheckSquare className="h-5 w-5 text-sage-500" />
            <h3 className="text-lg font-medium text-wood-700">{t("dashboard.taskManager.title")}</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            {t("dashboard.taskManager.description")}
          </p>
          <Button 
            onClick={handleTaskManager}
            className="mt-4 px-4 py-2 bg-sage-500 text-white rounded-md hover:bg-sage-600 transition-colors"
          >
            {t("dashboard.taskManager.button")}
          </Button>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Globe className="h-5 w-5 text-wood-500" />
            <h3 className="text-lg font-medium text-wood-700">{t("dashboard.quickLinks.title")}</h3>
          </div>
          <ul className="space-y-2">
            <li>
              <Button 
                variant="ghost" 
                className="w-full text-left" 
                onClick={() => handleQuickLinks('analytics')}
              >
                {t("dashboard.quickLinks.analytics")}
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className="w-full text-left" 
                onClick={() => handleQuickLinks('social')}
              >
                {t("dashboard.quickLinks.social")}
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className="w-full text-left" 
                onClick={() => handleQuickLinks('workshop')}
              >
                {t("dashboard.quickLinks.workshop")}
              </Button>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Index;
