
import { Card } from "@/components/ui/card";
import { CheckCircle, Circle } from "lucide-react";

const WeeklyPlanning = () => {
  const businessPriorities = [
    "Launch new earring collection",
    "Finish custom order for client",
    "Update workshop schedule",
  ];

  const personalPriorities = [
    "Family picnic on Saturday",
    "Morning walks (3x this week)",
    "Read bedtime stories",
  ];

  const reflections = {
    wentWell: [
      "Completed all custom orders on time",
      "Had quality family time",
      "Started morning routine",
    ],
    needsAttention: [
      "Marketing consistency",
      "Workshop preparation time",
      "Evening work boundaries",
    ],
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-wood-700">Weekly Planning</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4 text-wood-600">Business Priorities</h3>
          <ul className="space-y-3">
            {businessPriorities.map((priority, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Circle className="h-5 w-5 text-wood-500" />
                <span>{priority}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4 text-wood-600">Personal Priorities</h3>
          <ul className="space-y-3">
            {personalPriorities.map((priority, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-sage-500" />
                <span>{priority}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4 text-sage-600">What Went Well</h3>
          <ul className="space-y-3">
            {reflections.wentWell.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-sage-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4 text-wood-600">Needs Attention</h3>
          <ul className="space-y-3">
            {reflections.needsAttention.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Circle className="h-5 w-5 text-wood-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default WeeklyPlanning;
