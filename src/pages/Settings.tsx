
import { Card } from "@/components/ui/card";
import { Bell, Moon, Globe, Lock, Shield } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Settings = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold text-primary">{t("settings.title")}</h1>
        <p className="text-secondary-foreground">{t("settings.subtitle")}</p>
      </header>

      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold mb-6">{t("settings.preferences")}</h3>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">{t("settings.notifications")}</p>
                <p className="text-sm text-muted-foreground">{t("settings.notifications.desc")}</p>
              </div>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Moon className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">{t("settings.darkMode")}</p>
                <p className="text-sm text-muted-foreground">{t("settings.darkMode.desc")}</p>
              </div>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Globe className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">{t("settings.language")}</p>
                <p className="text-sm text-muted-foreground">{t("settings.language.desc")}</p>
              </div>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </Card>

      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold mb-6">{t("settings.security")}</h3>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Lock className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">{t("settings.twoFactor")}</p>
                <p className="text-sm text-muted-foreground">{t("settings.twoFactor.desc")}</p>
              </div>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">{t("settings.passwordProtection")}</p>
                <p className="text-sm text-muted-foreground">{t("settings.passwordProtection.desc")}</p>
              </div>
            </div>
            <Switch />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Settings;
