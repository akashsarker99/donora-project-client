import React from 'react';

import FundingStats from '@/components/funding/FundingStats';
import FundingBanner from '@/components/funding/FundingBanner';
import RecentContributors from '@/components/funding/RecentContributors';

const FundingPage = () => {
    return (
       <div className="space-y-6 p-4 md:p-6">
  <FundingBanner />
  <FundingStats />
  <RecentContributors></RecentContributors>
</div>
    );
};

export default FundingPage;