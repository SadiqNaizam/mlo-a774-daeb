import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SourceData {
  name: string;
  value: number;
  deals: number;
  percentage: number;
  color: string;
}

const sourcesData: SourceData[] = [
  { name: 'Clutch', value: 3000, deals: 150, percentage: 50, color: '#f87171' }, // red-400
  { name: 'Behance', value: 1500, deals: 120, percentage: 25, color: '#fbbf24' }, // amber-400
  { name: 'Instagram', value: 900, deals: 30, percentage: 15, color: '#34d399' }, // emerald-400
  { name: 'Dribbble', value: 600, deals: 30, percentage: 10, color: '#60a5fa' }, // blue-400
];

const SourcesPieChart: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'converted' | 'came' | 'size'>('converted');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <RechartsTooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)' }}
                />
                <Pie
                  data={sourcesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  dataKey="value"
                  stroke="none"
                >
                  {sourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col justify-center space-y-3 text-sm">
            {sourcesData.map((source) => (
              <div key={source.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-4">
                <div className="flex items-center">
                  <span className="h-2.5 w-2.5 rounded-full mr-3" style={{ backgroundColor: source.color }}></span>
                  <span>{source.name}</span>
                </div>
                <span className="text-muted-foreground">${source.value.toLocaleString()}</span>
                <span className="w-10 text-right text-muted-foreground">{source.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between border-t pt-4">
            <div className="flex items-center gap-1">
                <Button variant={activeTab === 'came' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('came')}>Leads came</Button>
                <Button variant={activeTab === 'converted' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('converted')}>Leads Converted</Button>
                <Button variant={activeTab === 'size' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('size')}>Total deals size</Button>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">from leads total</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This data is calculated from the total number of leads.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  );
};

export default SourcesPieChart;
