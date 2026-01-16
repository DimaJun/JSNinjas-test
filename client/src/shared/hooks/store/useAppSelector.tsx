import { useSelector } from 'react-redux';

import { RootState } from '@/app/providers/store';

export const useAppSelector = () => useSelector.withTypes<RootState>();
