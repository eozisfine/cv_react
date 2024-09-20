import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Image, Layout, Menu, Radio } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LayoutContext } from "../layouts/LayoutContext";
import { useWindowWidth } from "@react-hook/window-size";
import { MenuOutlined } from "@ant-design/icons";

const btnStyle={  filter: 'grayscale(1)', opacity: 0.6}

const Navbar = ( { items } ) => {

    const onlyWidth = useWindowWidth()
    const { color } = useContext( LayoutContext );
    const box = useRef()
    const navigate = useNavigate();
    const location = useLocation()
    const [ topPosition, setTopPosition ] = useState( 0 )
    const [ showMenu, setShowMenu ] = useState( false )
    const { t, i18n: { changeLanguage, language } } = useTranslation();
    const handleChangeLanguage = ( lang ) => {
        changeLanguage( lang );
    }

    const onScroll = () => {
        const scrollTop = window.scrollY;
        console.log( scrollTop );
        setTopPosition( scrollTop )
    }

    useEffect( () => {
        window.addEventListener( "scroll", onScroll );
        return () => {
            window.removeEventListener( "scroll", onScroll );
        }
    }, [] )

    useEffect( () => {
        setShowMenu( false );
    }, [ location ] );


    return <Layout.Header
        ref={box}
        style={{
            backgroundColor: topPosition > 100 ? color : 'transparent', height: 100,
            textTransform: 'uppercase',
            left: 0, right: 0,
            alignItems: 'center',
            justifyContent: 'space-between',
            display: 'flex',
            padding: onlyWidth <= 1200 ? '1em' : 50,
            position: 'fixed', zIndex: 99,
        }}>
            {onlyWidth <= 1200 ? <Button
                onClick={() => setShowMenu( !showMenu )}
            >
                <MenuOutlined />
            </Button> : <div style={{width: 130}}/>
            }
            {( onlyWidth > 1200 || ( onlyWidth <= 1200 && showMenu ) ) ? <Menu
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    position: onlyWidth <= 1200 ? 'fixed' : 'relative',
                    top: onlyWidth <= 1200 ? 100 : 0,
                    left: onlyWidth <= 1200 ? 5 : 0,
                    right: onlyWidth <= 1200 ? 5 : 0,
                    maxWidth: '97%',
                    background: onlyWidth < 1200 ? 'white' : 'transparent',
                    border: 'none',
                    fontSize: '1.6rem',
                    alignItems: 'center',
                    backgroundImage: `url(${location.pathname})`
                }}
                onSelect={( i, key, keyPath ) => {
                    navigate( i.item.props.href )
                }}
                mode={onlyWidth <= 1200 ? "inline" : 'horizontal'}
                inlineCollapsed={false}
                defaultSelectedKeys={[ location.pathname ]}
                items={items}/> : null}
            <Radio.Group
                type={'link'}
                onChange={(e) =>  handleChangeLanguage( e.target.value )}>
                <Radio.Button
                    style={{border: 0, background: 'transparent'}}
                    value={'en'}
                >
                    <img src={'./images/gb.svg'} width={35} alt={'en'}
                         {...(language === 'en' ? null : {style: btnStyle})}
                    />
                </Radio.Button>
                <Radio.Button
                    style={{border: 0, background: 'transparent'}}
                    value={'ita'}
                >
                    <img src={'./images/it.svg'}
                         {...(language === 'ita' ? null : {style: btnStyle})}
                         width={35} alt={'ita'}/>
                </Radio.Button>
            </Radio.Group>

    </Layout.Header>

}

export default Navbar;