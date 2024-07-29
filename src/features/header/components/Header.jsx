import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/pixtopayimage.png';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {
    
    const location = useLocation();
    const currentPath = location.pathname;
    const { t, i18n } = useTranslation();


    return (
        <header style={{ backgroundColor: '#161815' }}>
            {currentPath === '/'
                ? <div className='flex justify-between bg-transparent' />
                : <div className='flex justify-between bg-transparent'>

                    <div style={{ width: '150px' }} className='flex items-center p-5'>
                        <img src={logo} />
                    </div>

                    <nav className='p-2 text-white self-end flex gap-10 items-center'>
                        <Link to="/" className='transition-all duration-300 p-2 text-gray-500 hover:text-white'>{t("Inicio")}</Link>
                        <Link to="/postagens" className='transition-all duration-300 p-2 text-gray-500 hover:text-white'>{t("Postagens")}</Link>
                        <Link to="/rascunhos" className='transition-all duration-300 p-2 text-gray-500 hover:text-white'>Rascunhos</Link>
                        <button
                            className='p-3 pl-5 pr-5 mr-20 bg-lime-400 text-black rounded-xl'
                            onClick={() => console.log("aa")}>
                            Sair
                        </button>
                    </nav>

                </div>
            }

        </header>
    );
}