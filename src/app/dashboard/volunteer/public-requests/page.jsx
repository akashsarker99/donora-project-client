import AllPublicRequest from '@/components/admin-volunteer/AllPublicRequest';
import BlockedUserMessage from '@/components/BlockedUserMessage';
import { getAllDonationRequestsByPage } from '@/lib/api/donationRequest';
import { getUserByEmail } from '@/lib/api/user';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const AllPublicRequestVolunteer = async({searchParams}) => {
        const user = await getUserSession();
        const userRole = await getUserByEmail(user?.email);

    if(userRole?.status === 'blocked') {
    return <BlockedUserMessage></BlockedUserMessage>
  }

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
            <AllPublicRequest 
                requests={requests.data} 
                pages={pages} pageNumber={pageNumber} totalPages={totalPages}
            ></AllPublicRequest>
        </div>
    );
};

export default AllPublicRequestVolunteer;