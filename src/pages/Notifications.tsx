
import { Card } from "@/components/ui/card";
import { Bell, Check, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Notifications = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold text-primary">{t("notifications.title")}</h1>
        <p className="text-secondary-foreground">{t("notifications.subtitle")}</p>
      </header>

      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold mb-4">{t("notifications.recentNotifications")}</h3>
        <div className="space-y-4">
          {[
            {
              title: t("notifications.paymentSuccessful"),
              description: t("notifications.paymentSuccessDesc"),
              time: t("notifications.twoHoursAgo"),
              icon: Check,
              color: "text-green-500",
            },
            {
              title: t("notifications.failedTransaction"),
              description: t("notifications.transactionFailedDesc"),
              time: t("notifications.fiveHoursAgo"),
              icon: X,
              color: "text-red-500",
            },
            {
              title: t("notifications.accountUpdate"),
              description: t("notifications.accountUpdateDesc"),
              time: t("notifications.oneDay"),
              icon: Bell,
              color: "text-blue-500",
            },
          ].map((notification, i) => {
            const Icon = notification.icon;
            return (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 bg-muted rounded-full ${notification.color}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">{notification.title}</p>
                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Notifications;
