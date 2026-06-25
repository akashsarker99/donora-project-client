
import Banner from '@/components/Banner';
import ContactSection from '@/components/ContactSection';
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
           <ContactSection></ContactSection>
        </div>
    );
};

export default HomePage;