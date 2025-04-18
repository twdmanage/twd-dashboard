
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
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
  return (
    <ScrollArea className="h-[calc(100vh-120px)]">
      <div className="space-y-8 pb-8">
        <header>
          <h1 className="text-3xl font-bold text-wood-700">Thys Wood Design Dashboard - User Guide</h1>
          <p className="text-sage-600 mt-2">A comprehensive guide to using your dashboard effectively</p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wood-600 flex items-center gap-2">
            <ClipboardList className="h-6 w-6" />
            1. Weekly Overview Section
          </h2>
          <Card className="p-6 space-y-4">
            <p className="text-muted-foreground">
              The Weekly Overview provides a quick snapshot of all key areas of your business and personal life:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
              <li>Sales/Orders: Track your online order goals and progress</li>
              <li>Production: Monitor production tasks like jewelry creation</li>
              <li>Marketing: Keep track of social media and marketing tasks</li>
              <li>Retail/Partnerships: Follow up on business relationships</li>
              <li>Workshops: Track workshop planning and execution</li>
              <li>Finances: Monitor financial tasks and updates</li>
              <li>Family/Personal: Track family time commitments</li>
              <li>Self-care: Monitor personal wellness activities</li>
            </ul>
            <div className="mt-4">
              <p className="font-medium text-wood-600">Each card shows:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground">
                <li>Area name</li>
                <li>Current focus/goal</li>
                <li>Progress status</li>
                <li>Visual icon for quick recognition</li>
              </ul>
            </div>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wood-600 flex items-center gap-2">
            <BarChart4 className="h-6 w-6" />
            2. Key Metrics Dashboard
          </h2>
          <Card className="p-6 space-y-4">
            <div>
              <h3 className="text-lg font-medium text-wood-600 flex items-center gap-2">
                <LineChart className="h-5 w-5" />
                Performance Graphs
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2 text-muted-foreground">
                <li>Revenue trend over weeks</li>
                <li>Website visitor statistics</li>
                <li>Easy-to-read charts with weekly comparisons</li>
              </ul>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-medium text-wood-600 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Key Performance Indicators
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2 text-muted-foreground">
                <li>Revenue</li>
                <li>Orders Fulfilled</li>
                <li>Website Visitors</li>
                <li>Social Media Following</li>
                <li>Workshop Registrations</li>
                <li>Business Hours</li>
                <li>Family Time</li>
              </ul>
            </div>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wood-600 flex items-center gap-2">
            <BarChart className="h-6 w-6" />
            3. Weekly Planning Section
          </h2>
          <Card className="p-6 space-y-6">
            <div>
              <h3 className="text-lg font-medium text-wood-600">Business & Personal Priorities</h3>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2 text-muted-foreground">
                <li>List top business goals for the week</li>
                <li>Track with circle indicators</li>
                <li>Set family and personal goals</li>
                <li>Mark with heart icons</li>
                <li>Maintain work-life balance</li>
              </ul>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-medium text-wood-600 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Reflection Tools
              </h3>
              <div className="space-y-4 mt-2">
                <div>
                  <h4 className="font-medium text-wood-600">What Went Well</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground">
                    <li>Review and celebrate successes</li>
                    <li>Track completed milestones</li>
                    <li>Monitor positive patterns</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-wood-600">Needs Attention</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground">
                    <li>Identify areas for improvement</li>
                    <li>Track ongoing challenges</li>
                    <li>Plan necessary adjustments</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wood-600 flex items-center gap-2">
            <RefreshCw className="h-6 w-6" />
            Tips for Best Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-6">
              <h3 className="text-lg font-medium text-wood-600 mb-3">Regular Updates</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Review the Weekly Overview daily</li>
                <li>Update Key Metrics weekly</li>
                <li>Conduct planning and reflection sessions at week's start/end</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-medium text-wood-600 mb-3">Balance Tracking</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Use the color coding (wood and sage tones) to distinguish between business and personal items</li>
                <li>Monitor the balance between work hours and family time</li>
                <li>Pay attention to self-care metrics</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-medium text-wood-600 mb-3">Progress Monitoring</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Use status indicators to track progress</li>
                <li>Review trends in the metrics charts</li>
                <li>Adjust goals based on performance data</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-medium text-wood-600 mb-3">Reflection Practice</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Regularly update the "What Went Well" section</li>
                <li>Address items in "Needs Attention" promptly</li>
                <li>Use insights to adjust next week's priorities</li>
              </ul>
            </Card>
          </div>
        </section>

        <footer className="mt-8 text-center text-muted-foreground">
          <p>This dashboard is designed to help you maintain a healthy balance between business success and personal well-being while running your wood design business.</p>
        </footer>
      </div>
    </ScrollArea>
  );
};

export default UserGuide;
