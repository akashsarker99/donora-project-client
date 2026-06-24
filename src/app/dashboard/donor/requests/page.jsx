import React from 'react';
import MyRequestsPage from './MyRequest';
import { getMyDonationRequestsByEmail } from '@/lib/api/donationRequest';
import { getUserSession } from '@/lib/core/session';

const RequestShow = async () => {
    const user = await getUserSession();
    const request = await getMyDonationRequestsByEmail(user?.email);
    return (
        <div>
            <MyRequestsPage requests={request}></MyRequestsPage>
        </div>
    );
};

export default RequestShow;