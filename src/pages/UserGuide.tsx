
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  BarChart4, 
  ClipboardList, 
  Target,
  BarChart,
  CheckCircle2,
  RefreshCw,
  Scale,
  LineChart
} from "lucide-react";

const UserGuide = () => {
  const { t } = useLanguage();

  // Helper function to render items from translation value
  const renderItems = (value: string | string[]) => {
    if (Array.isArray(value)) {
      return value.map((item, index) => (
        <li key={index}>{item}</li>
      ));
    }
    return <li>{value}</li>;
  };

  return (
    <ScrollArea className="h-[calc(100vh-120px)]">
      <div className="space-y-8 pb-8">
        <header>
          <h1 className="text-3xl font-bold text-wood-700">{t("guide.title")}</h1>
          <p className="text-sage-600 mt-2">{t("guide.subtitle")}</p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wood-600 flex items-center gap-2">
            <ClipboardList className="h-6 w-6" />
            {t("guide.overview.title")}
          </h2>
          <Card className="p-6 space-y-4">
            <p className="text-muted-foreground">
              {t("guide.overview.description")}
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
              {renderItems(t("guide.overview.items"))}
            </ul>
            <div className="mt-4">
              <p className="font-medium text-wood-600">{t("guide.overview.card.shows")}</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground">
                {renderItems(t("guide.overview.card.items"))}
              </ul>
            </div>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wood-600 flex items-center gap-2">
            <BarChart4 className="h-6 w-6" />
            {t("guide.metrics.title")}
          </h2>
          <Card className="p-6 space-y-4">
            <div>
              <h3 className="text-lg font-medium text-wood-600 flex items-center gap-2">
                <LineChart className="h-5 w-5" />
                {t("guide.metrics.graphs")}
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2 text-muted-foreground">
                {renderItems(t("guide.metrics.graphs.items"))}
              </ul>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-medium text-wood-600 flex items-center gap-2">
                <Target className="h-5 w-5" />
                {t("guide.metrics.kpi")}
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2 text-muted-foreground">
                {renderItems(t("guide.metrics.kpi.items"))}
              </ul>
            </div>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wood-600 flex items-center gap-2">
            <RefreshCw className="h-6 w-6" />
            {t("guide.usage.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-6">
              <h3 className="text-lg font-medium text-wood-600 mb-3">{t("guide.usage.updates")}</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {renderItems(t("guide.usage.updates.items"))}
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium text-wood-600 mb-3">{t("guide.usage.balance")}</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {renderItems(t("guide.usage.balance.items"))}
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium text-wood-600 mb-3">{t("guide.usage.progress")}</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {renderItems(t("guide.usage.progress.items"))}
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium text-wood-600 mb-3">{t("guide.usage.reflection")}</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {renderItems(t("guide.usage.reflection.items"))}
              </ul>
            </Card>
          </div>
        </section>

        <footer className="mt-8 text-center text-muted-foreground">
          <p>{t("guide.footer")}</p>
        </footer>
      </div>
    </ScrollArea>
  );
};

export default UserGuide;
