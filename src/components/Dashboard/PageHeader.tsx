import React from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CalendarDays, ChevronDown } from 'lucide-react';

const PageHeader: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'sales' | 'leads'>('leads');
  const [selectedPeriod, setSelectedPeriod] = React.useState<string>('last 6 months');

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 pb-4 border-b">
      <div>
        <h1 className="text-2xl font-bold text-primaryText">Dashboard</h1>
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'sales' | 'leads')} className="mt-2">
          <TabsList className="bg-transparent p-0">
            <TabsTrigger 
              value="sales" 
              className={cn(
                "px-3 py-1.5 text-sm font-medium text-muted-foreground data-[state=active]:text-accentBlue data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-accentBlue rounded-none",
                activeTab === 'sales' ? "border-accentBlue text-accentBlue" : "border-transparent"
              )}
            >
              Sales
            </TabsTrigger>
            <TabsTrigger 
              value="leads" 
              className={cn(
                "px-3 py-1.5 text-sm font-medium text-muted-foreground data-[state=active]:text-accentBlue data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-accentBlue rounded-none",
                activeTab === 'leads' ? "border-accentBlue text-accentBlue" : "border-transparent"
              )}
            >
              Leads
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="mt-4 sm:mt-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="text-muted-foreground">
              <CalendarDays size={16} className="mr-2" />
              {selectedPeriod}
              <ChevronDown size={16} className="ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {['Last 7 days', 'Last 30 days', 'Last 3 months', 'Last 6 months', 'Last 12 months'].map((period) => (
              <DropdownMenuItem key={period} onSelect={() => setSelectedPeriod(period)}>
                {period}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default PageHeader;
