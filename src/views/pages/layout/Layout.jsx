import { ThemeProvider } from '@emotion/react';
import {CssBaseline } from '@mui/material';
import React from 'react';
import theme from '../../../Theme/dots.theme';
import Footer from './Footer';
import Header from './Header';

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>
            {children}
            <Footer/>
        </ThemeProvider>
    );
};

export default Layout;