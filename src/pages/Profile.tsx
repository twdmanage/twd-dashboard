
import { Card } from "@/components/ui/card";
import { User, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Profile = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold text-primary">{t("profile.title")}</h1>
        <p className="text-secondary-foreground">{t("profile.subtitle")}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-card p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 bg-primary rounded-full">
              <User className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{t("profile.personalInfo")}</h3>
              <p className="text-sm text-muted-foreground">{t("profile.personalInfoDesc")}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <User className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">{t("profile.fullName")}</p>
                <p className="font-medium">{t("user.name")}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">{t("profile.email")}</p>
                <p className="font-medium">{t("user.email")}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">{t("profile.phone")}</p>
                <p className="font-medium">{t("user.phone")}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">{t("profile.location")}</p>
                <p className="font-medium">{t("user.location")}</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">{t("profile.accountStats")}</h3>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-lg">
              <p className="text-sm text-muted-foreground">{t("profile.memberSince")}</p>
              <p className="font-medium">{t("user.memberSince")}</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <p className="text-sm text-muted-foreground">{t("profile.lastLogin")}</p>
              <p className="font-medium">{t("user.lastLogin")}</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <p className="text-sm text-muted-foreground">{t("profile.accountStatus")}</p>
              <p className="font-medium text-green-500">{t("user.accountStatus")}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Notifications;
