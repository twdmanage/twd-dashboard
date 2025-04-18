
import { Card } from "@/components/ui/card";
import { CheckSquare } from "lucide-react";

const Tasks = () => {
  return (
    <div className="space-y-8">
      <header className="flex items-center space-x-2">
        <CheckSquare className="h-6 w-6 text-sage-500" />
        <h1 className="text-3xl font-bold text-wood-700">Task Manager</h1>
      </header>
      <Card className="p-6">
        <p className="text-muted-foreground">Task management functionality coming soon...</p>
      </Card>
    </div>
  );
};

export default Tasks;
