import AllPublicRequest from '@/components/admin-volunteer/AllPublicRequest';
import BlockedUserMessage from '@/components/BlockedUserMessage';
import { getUserByEmail } from '@/lib/api/user';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const AllPublicRequestVolunteer = async() => {
        const user = await getUserSession();
        const userRole = await getUserByEmail(user?.email);

    if(userRole?.status === 'blocked') {
    return <BlockedUserMessage></BlockedUserMessage>
  }
    return (
        <div>
            <AllPublicRequest></AllPublicRequest>
        </div>
    );
};

export default AllPublicRequestVolunteer;