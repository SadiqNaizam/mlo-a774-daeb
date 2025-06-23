import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const trackingData = [
  { month: 'March', closedWon: 65, closedLost: 68 },
  { month: 'April', closedWon: 52, closedLost: 45 },
  { month: 'May', closedWon: 82, closedLost: 95 },
  { month: 'June', closedWon: 70, closedLost: 15 },
  { month: 'July', closedWon: 88, closedLost: 48 },
  { month: 'August', closedWon: 75, closedLost: 98 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-card p-2 shadow-sm">
        <p className="text-sm font-bold text-foreground">{label}</p>
        <p className="text-sm text-[#0d9488]">{`Closed Won: ${payload[0].value}`}</p>
        <p className="text-sm text-[#e11d48]">{`Closed Lost: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const LeadsTrackingChart: React.FC = () => {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <div className="flex items-start justify-between">
            <div>
                <CardTitle>Leads tracking</CardTitle>
                <div className="mt-2 flex items-baseline gap-4">
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold">680</span>
                        <span className="text-muted-foreground">total closed</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold">70</span>
                        <span className="text-muted-foreground">total lost</span>
                    </div>
                </div>
            </div>
            <span className="text-sm text-muted-foreground">last 6 months</span>
        </div>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trackingData} margin={{ top: 5, right: 30, left: 0, bottom: 20 }}>
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} dy={10} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="bottom"
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ paddingTop: '20px' }}
                formatter={(value, entry) => <span className="text-foreground/80 pl-1">{value}</span>}
              />
              <Area type="monotone" dataKey="closedWon" name="Closed won" stroke="#0d9488" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" />
              <Area type="monotone" dataKey="closedLost" name="Closed lost" stroke="#e11d48" strokeWidth={2} fillOpacity={1} fill="url(#colorLost)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingChart;
