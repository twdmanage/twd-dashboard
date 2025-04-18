
import { Card } from "@/components/ui/card";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Week 1", revenue: 2400, visitors: 400 },
  { name: "Week 2", revenue: 1398, visitors: 300 },
  { name: "Week 3", revenue: 9800, visitors: 600 },
  { name: "Week 4", revenue: 3908, visitors: 450 },
];

const metrics = [
  { name: "Revenue", target: "€5,000", actual: "€4,380", trend: "up" },
  { name: "Orders Fulfilled", target: "25", actual: "22", trend: "up" },
  { name: "Website Visitors", target: "500", actual: "437", trend: "down" },
  { name: "Social Followers", target: "1,000", actual: "876", trend: "up" },
  { name: "Workshop Signups", target: "10", actual: "8", trend: "neutral" },
  { name: "Hours Worked (Biz)", target: "30", actual: "28", trend: "neutral" },
  { name: "Family Time", target: "15", actual: "12", trend: "down" },
];

const KeyMetrics = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-wood-700">Key Metrics</h2>
      
      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Revenue & Visitors Trend</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#8B613F" />
              <YAxis stroke="#8B613F" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#8B613F"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="visitors"
                stroke="#93B3A1"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="p-4">
            <h3 className="text-sm font-medium text-muted-foreground">{metric.name}</h3>
            <div className="mt-2 space-y-1">
              <p className="text-2xl font-semibold text-wood-600">{metric.actual}</p>
              <p className="text-sm text-sage-600">Target: {metric.target}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default KeyMetrics;
