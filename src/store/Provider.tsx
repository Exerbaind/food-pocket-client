'use client'

import { store } from '@/store';
import React from 'react';
import { Provider } from 'react-redux';

interface Props {
    children: React.ReactNode;
}

const Providers = ({children}: Props) => <Provider store={store}>{children}</Provider>;

export default Providers;
