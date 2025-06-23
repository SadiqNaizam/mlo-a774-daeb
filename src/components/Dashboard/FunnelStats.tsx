import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FunnelStage {
  name: 'Discovery' | 'Qualified' | 'In conversation' | 'Negotiations' | 'Closed won';
  count: number;
  value: number;
  duration: string;
  color: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { name: 'In conversation', count: 50, value: 100, duration: 'average time on this stage', color: 'bg-slate-700' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-500' },
];

const FunnelStats: React.FC = () => {
  const totalCount = funnelData.reduce((sum, item) => sum + item.count, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-baseline gap-2">
          <span className="text-5xl font-bold">600</span>
          <span className="text-muted-foreground">active leads</span>
        </div>
        
        <div className="mb-6 flex w-full h-2 rounded-full overflow-hidden">
          {funnelData.map(stage => (
            <div 
              key={stage.name}
              className={stage.color}
              style={{ width: `${(stage.count / totalCount) * 100}%` }}
            />
          ))}
        </div>

        <ul className="space-y-3 text-sm">
          {funnelData.map(stage => (
            <li key={stage.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 sm:grid-cols-[auto_1fr_auto_auto_auto] sm:gap-6">
              <div className="flex items-center">
                <span className={`h-2.5 w-2.5 rounded-full ${stage.color} mr-3`}></span>
                <span className='text-foreground/90'>{stage.name}</span>
              </div>
              <span className="hidden sm:inline-block text-muted-foreground justify-self-end">{stage.count}</span>
              <span className="hidden sm:inline-block text-muted-foreground justify-self-end">$ {stage.value}</span>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                     <span className="text-muted-foreground justify-self-end text-right">
                        {stage.duration}
                     </span>
                  </TooltipTrigger>
                  {stage.name === 'In conversation' && (
                    <TooltipContent>
                      <p>average time on this stage</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FunnelStats;
