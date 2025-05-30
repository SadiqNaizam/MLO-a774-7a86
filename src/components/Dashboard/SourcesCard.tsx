import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip as RechartsTooltip } from 'recharts';

interface SourceData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

const sourcesData: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#F06548' }, // accentRed
  { name: 'Behance', value: 1000, percentage: 40, color: '#F0AD4E' }, // accentYellow
  { name: 'Instagram', value: 1000, percentage: 10, color: '#0AB39C' }, // accentGreen (using for teal)
  { name: 'Dribbble', value: 1000, percentage: 10, color: '#405189' }, // sidebar (using for light green replacement)
];

type FilterType = 'Leads came' | 'Leads Converted' | 'Total deals size';

const SourcesCard: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState<FilterType>('Leads Converted');

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    // Here you would typically fetch new data or recompute based on the filter
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card p-2 border rounded-md shadow-lg">
          <p className="text-sm text-primaryText">{`${payload[0].name} : ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <TooltipProvider>
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-primaryText">Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ width: '100%', height: 200 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={sourcesData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                innerRadius={50} // For Doughnut shape
                fill="#8884d8"
                dataKey="value"
                stroke="hsl(var(--card))" // Makes segments distinct
                strokeWidth={3}
              >
                {sourcesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <RechartsTooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 space-y-2">
          {sourcesData.map((source) => (
            <div key={source.name} className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-x-3 text-sm">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: source.color }}></div>
              <div className="text-primaryText whitespace-nowrap truncate">{source.name}</div>
              <div className="text-muted-foreground justify-self-end">$ {source.value}</div>
              {source.name === 'Dribbble' ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="text-muted-foreground justify-self-end cursor-default">{source.percentage}%</div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-gray-800 text-white text-xs p-2 rounded-sm">
                    <p>from leads total</p>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <div className="text-muted-foreground justify-self-end">{source.percentage}%</div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 flex space-x-2">
          {(['Leads came', 'Leads Converted', 'Total deals size'] as FilterType[]).map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleFilterChange(filter)}
              className={cn(
                activeFilter === filter ? 'bg-accentBlue text-primary-foreground' : 'text-muted-foreground border-border',
                'text-xs px-2.5 py-1 h-auto'
              )}
            >
              {filter}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
    </TooltipProvider>
  );
};

export default SourcesCard;
