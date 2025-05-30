import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FunnelStage {
  id: string;
  name: string;
  count: number;
  value: number;
  time: string;
  color: string; // Tailwind background color class e.g., 'bg-red-500'
  percentage: number; // For the main progress bar segment
}

const funnelData: FunnelStage[] = [
  { id: 'discovery', name: 'Discovery', count: 200, value: 200, time: '2 days', color: 'bg-accentRed', percentage: 200/390 * 100 },
  { id: 'qualified', name: 'Qualified', count: 100, value: 100, time: '2 days', color: 'bg-accentYellow', percentage: 100/390 * 100 },
  { id: 'in_conversation', name: 'In conversation', count: 50, value: 100, time: 'average time on this stage', color: 'bg-indigo-500', percentage: 50/390 * 100 },
  { id: 'negotiations', name: 'Negotiations', count: 20, value: 50, time: '8 days', color: 'bg-accentGreen', percentage: 20/390 * 100 },
  { id: 'closed_won', name: 'Closed won', count: 20, value: 50, time: '10 days', color: 'bg-purple-500', percentage: 20/390 * 100 },
];

const totalActiveLeads = 600; // From image

const FunnelCountCard: React.FC = () => {
  const totalBarValue = funnelData.reduce((sum, stage) => sum + stage.count, 0); 

  return (
    <TooltipProvider>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-primaryText">Funnel count</CardTitle>
          <div className="mt-1">
            <span className="text-3xl font-bold text-primaryText">{totalActiveLeads}</span>
            <span className="ml-2 text-sm text-muted-foreground">active leads</span>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex w-full h-3 rounded-full overflow-hidden my-4">
            {funnelData.map((stage) => (
              <div
                key={stage.id + '-bar'}
                className={cn("h-full", stage.color)}
                style={{ width: `${(stage.count / totalBarValue) * 100}%` }}
              />
            ))}
          </div>

          <div className="space-y-3">
            {funnelData.map((stage) => (
              <div key={stage.id} className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-x-3 text-sm">
                <div className={cn("w-3 h-3 rounded-sm", stage.color)}></div>
                <div className="text-primaryText whitespace-nowrap truncate">{stage.name}</div>
                <div className="text-muted-foreground justify-self-end">{stage.count}</div>
                <div className="text-muted-foreground justify-self-end">$ {stage.value}</div>
                {stage.id === 'in_conversation' ? (
                   <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="text-muted-foreground justify-self-end cursor-default">{stage.time.startsWith('average') ? '2 days' : stage.time}</div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-800 text-white text-xs p-2 rounded-sm">
                      <p>average time on this stage</p>
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  <div className="text-muted-foreground justify-self-end">{stage.time}</div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default FunnelCountCard;
