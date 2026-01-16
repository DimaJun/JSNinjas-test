import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/app/providers/store';

export const useAppDispatch = () => useDispatch.withTypes<AppDispatch>();
