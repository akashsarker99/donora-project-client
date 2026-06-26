import { requireRole } from '@/lib/core/session';

const VolunteerLayout = async ({children}) => {
   await requireRole('volunteer')
   return children
};

export default VolunteerLayout;