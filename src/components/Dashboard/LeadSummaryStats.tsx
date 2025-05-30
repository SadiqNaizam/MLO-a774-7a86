import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SummaryStat {
  id: string;
  value: string;
  label: string;
  hasInfo?: boolean;
  infoText?: string;
}

const summaryStatsData: SummaryStat[] = [
  { id: 'total_leads', value: '900', label: 'total leads count' },
  { id: 'avg_conversion_time', value: '12', label: 'days in average to convert lead' },
  { id: 'inactive_leads', value: '30', label: 'inactive leads', hasInfo: true, infoText: 'Leads that have not shown activity in the last 30 days.' },
];

const LeadSummaryStats: React.FC = () => {
  return (
    <TooltipProvider>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-primaryText">Other data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4">
            {summaryStatsData.map((stat) => (
              <div key={stat.id} className="flex flex-col items-start">
                <p className="text-3xl font-bold text-primaryText">{stat.value}</p>
                <div className="flex items-center mt-1">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  {stat.hasInfo && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info size={14} className="ml-1.5 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent side="top" className="bg-gray-800 text-white text-xs p-2 rounded-sm max-w-xs">
                        <p>{stat.infoText}</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default LeadSummaryStats;
