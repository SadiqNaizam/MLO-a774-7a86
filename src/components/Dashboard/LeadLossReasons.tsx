import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LossReason {
  id: string;
  percentage: number;
  reason: string;
}

const lossReasonsData: LossReason[] = [
  { id: 'unclear_proposal_1', percentage: 40, reason: 'The proposal is unclear' },
  { id: 'venture_pursuit', percentage: 20, reason: 'However venture pursuit' },
  { id: 'other', percentage: 10, reason: 'Other' },
  { id: 'unclear_proposal_2', percentage: 30, reason: 'The proposal is unclear' }, // Note: Image has duplicate reason text.
];

const LeadLossReasons: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-primaryText">Reasons of leads lost</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          {lossReasonsData.map((item) => (
            <div key={item.id}>
              <p className="text-3xl font-bold text-primaryText">{item.percentage}%</p>
              <p className="text-sm text-muted-foreground mt-1">{item.reason}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadLossReasons;
