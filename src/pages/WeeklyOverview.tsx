
import { Card } from "@/components/ui/card";
import { 
  ShoppingCart, 
  Tool, 
  MessageSquare, 
  Store, 
  Users, 
  DollarSign, 
  Heart, 
  Sunset 
} from "lucide-react";

const overviewItems = [
  {
    area: "Sales/Orders",
    focus: "5 online orders",
    status: "3/5",
    icon: ShoppingCart,
    color: "text-wood-500",
  },
  {
    area: "Production",
    focus: "Finish 10 pairs earrings",
    status: "7/10 completed",
    icon: Tool,
    color: "text-wood-600",
  },
  {
    area: "Marketing",
    focus: "3 Instagram posts",
    status: "2/3 done",
    icon: MessageSquare,
    color: "text-sage-500",
  },
  {
    area: "Retail/Partnerships",
    focus: "Email 2 retailers",
    status: "1/2 done",
    icon: Store,
    color: "text-sage-600",
  },
  {
    area: "Workshops",
    focus: "Plan next workshop",
    status: "In progress",
    icon: Users,
    color: "text-wood-500",
  },
  {
    area: "Finances",
    focus: "Update expenses",
    status: "Pending",
    icon: DollarSign,
    color: "text-sage-500",
  },
  {
    area: "Family/Personal",
    focus: "2 afternoons with kids",
    status: "Planned",
    icon: Heart,
    color: "text-wood-400",
  },
  {
    area: "Self-care",
    focus: "1 walk, 1 creative hour",
    status: "1/2 done",
    icon: Sunset,
    color: "text-sage-400",
  },
];

const WeeklyOverview = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-wood-700">Weekly Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewItems.map((item, index) => (
          <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg bg-muted ${item.color}`}>
                <item.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-wood-700">{item.area}</h3>
                <p className="text-sm text-muted-foreground">{item.focus}</p>
                <p className="text-sm font-medium mt-2 text-sage-600">{item.status}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WeeklyOverview;
