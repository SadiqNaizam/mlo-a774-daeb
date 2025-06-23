import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ReasonStatProps {
  percentage: string;
  reason: string;
}

const ReasonStat: React.FC<ReasonStatProps> = ({ percentage, reason }) => (
  <div>
    <p className="text-4xl font-bold text-foreground">{percentage}</p>
    <p className="text-muted-foreground">{reason}</p>
  </div>
);

interface OtherDataStatProps {
    value: string;
    label: string;
    hasTooltip?: boolean;
    tooltipText?: string;
}

const OtherDataStat: React.FC<OtherDataStatProps> = ({ value, label, hasTooltip, tooltipText }) => (
    <div>
        <p className="text-4xl font-bold text-foreground">{value}</p>
        <div className="flex items-center gap-1.5 text-muted-foreground">
            <span>{label}</span>
            {hasTooltip && (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                           <HelpCircle className="h-4 w-4 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                           <p>{tooltipText}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}
        </div>
    </div>
);

const ReasonsAndOtherStats: React.FC = () => {
  return (
    <div className="col-span-1 grid grid-cols-1 gap-6 lg:col-span-2 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            <ReasonStat percentage="40%" reason="The proposal is unclear" />
            <ReasonStat percentage="20%" reason="However venture pursuit" />
            <ReasonStat percentage="10%" reason="Other" />
            <ReasonStat percentage="30%" reason="The proposal is unclear" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Other data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <OtherDataStat value="900" label="total leads count" />
            <OtherDataStat value="12" label="days in average to convert lead" />
            <OtherDataStat 
                value="30" 
                label="inactive leads"
                hasTooltip
                tooltipText="Leads that have not been updated in the last 30 days."
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReasonsAndOtherStats;
