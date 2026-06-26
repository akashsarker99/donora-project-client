import { requireRole } from '@/lib/core/session';

const DonorLayout = async ({children}) => {
    await requireRole('donor')
    return children
};

export default DonorLayout;