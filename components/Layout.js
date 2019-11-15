import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import NavItems from '../components/NavItems';

const Layout = ({ children, title, activeNavItem='' }) => (
    <div className="page-container">
        <Head>
            <title>{ title }</title>
            <link rel="icon" href="static/MIC-Favicon.ico" type="image/x-icon" />
            <link rel="shortcut icon" href="static/MIC-Favicon.ico" type="image/x-icon" />
        </Head>

        <Header />

        <NavItems active={activeNavItem} />
        { children }
    </div>
);

export default Layout;