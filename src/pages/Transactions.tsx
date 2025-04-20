
import { Card } from "@/components/ui/card";
import { PieChart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Transactions = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold text-primary">{t("transactions.title")}</h1>
        <p className="text-secondary-foreground">{t("transactions.subtitle")}</p>
      </header>

      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold mb-4">{t("transactions.recentTransactions")}</h3>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-muted rounded-full">
                  <PieChart className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">{t("transactions.shopping")}</p>
                  <p className="text-sm text-muted-foreground">{t("transactions.timeAgo")}</p>
                </div>
              </div>
              <p className="font-medium text-red-500">-$150.00</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Transactions;
