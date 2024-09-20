import {Outlet} from "react-router-dom";
import {Layout} from 'antd';
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { LayoutContext } from './LayoutContext';
import { useState } from "react";
import { useTranslation } from "react-i18next";




const Main = () => {
    const [color, setColor] = useState('white');
    const { t, i18n } = useTranslation();

    const items = [
        {
            name: t('navbar.home'), href: '/'
        },
        {
            name: t('navbar.about'), href: '/about'
        },
        {
            name: t('navbar.projects'), href: '/projects'
        },
        {
            name: t('navbar.writing'), href: '/writing'
        },
        {
            name: 'CV', href: '/resume'
        },
        {
            name: t('navbar.contactMe'), href: '/contactme'
        },
    ].map(({name, href}, index) => {
        return {
            key: href, label: `${name}`, href: href
        };
    },);

    return <>
        <LayoutContext.Provider value={{color, setColor}}>
        <Layout style={{backgroundColor: 'transparent'}}>

            <Navbar items={items}/>

            <Layout style={{backgroundColor: 'transparent', marginTop: 100}}>
                <Layout.Content style={{ padding: 0 }}>
                    <div className="site-layout-content">
                        <Outlet/>
                    </div>
                </Layout.Content>
            </Layout>

            <Layout.Footer style={{background: '#E9DAC1'}}>
                <Footer/>
            </Layout.Footer>

        </Layout>
        </LayoutContext.Provider>
    </>
}

export default Main;