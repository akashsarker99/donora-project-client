
import Banner from '@/components/Banner';
import FeaturedSection from '@/components/FeaturedSection';
import StatsSection from '@/components/StatsSection';
import WhyChooseUs from '@/components/WhyChooseUs';

import React from 'react';

const HomePage = () => {
    return (
        <div>
           <Banner></Banner>
           <StatsSection></StatsSection>
           <FeaturedSection></FeaturedSection>
           <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default HomePage;