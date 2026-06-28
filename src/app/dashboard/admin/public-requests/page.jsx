import AllPublicRequest from '@/components/admin-volunteer/AllPublicRequest';
import {getAllDonationRequestsByPage, } from '@/lib/api/donationRequest';
import React from 'react';

const PublicRequestsPageAdmin = async ({searchParams}) => {
      const {page=1} = await searchParams;
    const requests = await getAllDonationRequestsByPage(page);
    const pageNumber = requests.pageNumber;
    const totalPages = requests.totalPages;
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return (
        <div>
            <AllPublicRequest requests={requests.data} 
            pages={pages} pageNumber={pageNumber} totalPages={totalPages} ></AllPublicRequest>
        </div>
    );
};

export default PublicRequestsPageAdmin;