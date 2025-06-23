import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { CalendarDays, ChevronDown } from 'lucide-react';

const PageHeader: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="font-normal">
            <CalendarDays className="mr-2 h-4 w-4" />
            last 6 months
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className='bg-primary hover:bg-primary/90'>
                Create
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>New Lead</DropdownMenuItem>
              <DropdownMenuItem>New Proposal</DropdownMenuItem>
              <DropdownMenuItem>New Invoice</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div>
        <Tabs defaultValue="leads" className="w-full">
          <TabsList className="w-fit bg-transparent p-0">
            <TabsTrigger value="sales" className="text-base font-normal data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:text-primary rounded-none px-4 py-2">
              Sales
            </TabsTrigger>
            <TabsTrigger value="leads" className="text-base font-normal data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:text-primary rounded-none px-4 py-2">
              Leads
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default PageHeader;
