import React from 'react';
import CreateRequestPage from './CreateRequestPage';
import { getUserSession } from '@/lib/core/session';
import { getUserByEmail } from '@/lib/api/user';

const CreateRequestPageShow = async () => {
  const user = await getUserSession();
  const userByEmail = await getUserByEmail(user?.email) 
  return (
    <div>
      <CreateRequestPage user={userByEmail}></CreateRequestPage>
    </div>
  );
};

export default CreateRequestPageShow;