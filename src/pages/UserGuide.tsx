
import { Card } from "@/components/ui/card";
import { Book } from "lucide-react";
import { useLanguage, renderTranslation } from "@/contexts/LanguageContext";

const UserGuide = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      <header className="flex items-center space-x-2">
        <Book className="h-6 w-6 text-wood-500" />
        <h1 className="text-3xl font-bold text-wood-700">{t("guide.title")}</h1>
      </header>

      <Card className="p-6">
        <p className="text-lg text-muted-foreground">{t("guide.subtitle")}</p>
        
        <div className="mt-8 space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-wood-600">{t("guide.overview.title")}</h2>
            <p>{t("guide.overview.description")}</p>
            
            {renderTranslation(t("guide.overview.items"))}
            
            <div className="mt-4">
              <p className="font-medium">{t("guide.overview.card.shows")}</p>
              {renderTranslation(t("guide.overview.card.items"))}
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-wood-600">{t("guide.metrics.title")}</h2>
            
            <div>
              <h3 className="text-xl font-medium text-wood-500">{t("guide.metrics.graphs")}</h3>
              {renderTranslation(t("guide.metrics.graphs.items"))}
            </div>
            
            <div className="mt-4">
              <h3 className="text-xl font-medium text-wood-500">{t("guide.metrics.kpi")}</h3>
              {renderTranslation(t("guide.metrics.kpi.items"))}
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-wood-600">{t("guide.usage.title")}</h2>
            
            <div>
              <h3 className="text-xl font-medium text-wood-500">{t("guide.usage.updates")}</h3>
              {renderTranslation(t("guide.usage.updates.items"))}
            </div>
            
            <div className="mt-4">
              <h3 className="text-xl font-medium text-wood-500">{t("guide.usage.balance")}</h3>
              {renderTranslation(t("guide.usage.balance.items"))}
            </div>
            
            <div className="mt-4">
              <h3 className="text-xl font-medium text-wood-500">{t("guide.usage.progress")}</h3>
              {renderTranslation(t("guide.usage.progress.items"))}
            </div>
            
            <div className="mt-4">
              <h3 className="text-xl font-medium text-wood-500">{t("guide.usage.reflection")}</h3>
              {renderTranslation(t("guide.usage.reflection.items"))}
            </div>
          </section>
        </div>
        
        <p className="mt-8 text-center text-muted-foreground">{t("guide.footer")}</p>
      </Card>
    </div>
  );
};

export default UserGuide;
