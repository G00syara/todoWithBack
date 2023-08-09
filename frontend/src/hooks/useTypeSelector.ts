import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store/index';

import { ThunkDispatch } from '@reduxjs/toolkit';

export const useAppDispatch = () => useDispatch<ThunkDispatch<any, any, any>>();
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
