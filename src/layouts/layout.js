import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Footer from '../components/Footer';
import Logo from '../assets/Logo.svg';
import PL from '../assets/pl.svg';
import UA from '../assets/ua.svg';

const Layout = ({ children, additionalClass = [], language, setLanguage }) => (
    <main
        className={[
            'flex', 'flex-col', 'min-h-screen', 'text-light-blue', ...additionalClass,
        ].join(' ')}
    >
        <Helmet>
            <html className="bg-dark-blue" lang="en" />
        </Helmet>
        <div className="m-5">
            <div className="absolute flex right-[20px]">
                <div className="text-center cursor-pointer" onClick={() => setLanguage('pl')}>
                    <img
                        src={PL}
                        alt="PL"
                        className={[language === 'pl' ? '' : 'grayscale', 'w-8', 'h-8'].join(' ')}
                    />
                    {' '}
                    PL
                </div>
                <div className="text-center cursor-pointer" onClick={() => setLanguage('ua')}>
                    <img
                        src={UA}
                        alt="UA"
                        className={[language === 'pl' ? 'grayscale' : '', 'w-8', 'h-8'].join(' ')}
                    />
                    {' '}
                    UA
                </div>
            </div>
            <Link to="/"><img src={Logo} alt="Flotiq" width="300px" className="max-w-[50%]" /></Link>
        </div>
        {children}
        <Footer />
    </main>
);

export default Layout;
