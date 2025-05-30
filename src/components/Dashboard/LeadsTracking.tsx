import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area
} from 'recharts';

const chartData = [
  { name: 'March', 'Closed won': 65, 'Closed lost': 50, amt: 2400 },
  { name: 'April', 'Closed won': 50, 'Closed lost': 30, amt: 2210 },
  { name: 'May', 'Closed won': 75, 'Closed lost': 40, amt: 2290 },
  { name: 'June', 'Closed won': 60, 'Closed lost': 10, amt: 2000 },
  { name: 'July', 'Closed won': 70, 'Closed lost': 45, amt: 2181 },
  { name: 'August', 'Closed won': 95, 'Closed lost': 35, amt: 2500 },
];

const LeadsTracking: React.FC = () => {
  const totalClosed = 680;
  const totalLost = 70;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card p-3 border rounded-md shadow-lg">
          <p className="text-sm font-semibold text-primaryText mb-1">{label}</p>
          {payload.map((pld: any) => (
            <div key={pld.dataKey} style={{ color: pld.color }} className="text-sm">
              {pld.dataKey}: {pld.value}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
                <CardTitle className="text-lg font-semibold text-primaryText">Leads tracking</CardTitle>
                <div className="mt-1 flex items-baseline space-x-4">
                    <div>
                        <span className="text-3xl font-bold text-primaryText">{totalClosed}</span>
                        <span className="ml-1.5 text-sm text-muted-foreground">total closed</span>
                    </div>
                    <div>
                        <span className="text-3xl font-bold text-primaryText">{totalLost}</span>
                        <span className="ml-1.5 text-sm text-muted-foreground">total lost</span>
                    </div>
                </div>
            </div>
            {/* Filter dropdown is on PageHeader now, so removing it here based on image. */}
            {/* If needed, it could be like:
            <Button variant="outline" size="sm" className="text-muted-foreground mt-2 sm:mt-0">
                Last 6 months <ChevronDown size={16} className="ml-1" />
            </Button> */}
        </div>
      </CardHeader>
      <CardContent>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <AreaChart data={chartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0AB39C" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#0AB39C" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F06548" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#F06548" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} dy={10} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 1, strokeDasharray: '3 3' }}/>
              <Legend 
                verticalAlign="bottom" 
                height={36} 
                iconType="circle" 
                iconSize={8}
                formatter={(value, entry) => (
                  <span style={{ color: 'hsl(var(--muted-foreground))', marginLeft: '4px' }}>{value}</span>
                )}
              />
              <Area type="monotone" dataKey="Closed won" stroke="#0AB39C" fillOpacity={1} fill="url(#colorWon)" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: '#0AB39C' }} activeDot={{ r: 6, fill: '#0AB39C', stroke: 'hsl(var(--card))' }} />
              <Area type="monotone" dataKey="Closed lost" stroke="#F06548" fillOpacity={1} fill="url(#colorLost)" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: '#F06548' }} activeDot={{ r: 6, fill: '#F06548', stroke: 'hsl(var(--card))' }}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTracking;
