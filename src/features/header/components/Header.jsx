import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/pixtopayimage.png';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    const { t, i18n } = useTranslation();
    const isFixed = currentPath !== '/editarblogs' && currentPath !== '/blogpage';


    return (
        <header style={{ backgroundColor: '#161815' }}>

            {currentPath === '/'
                ? <div className='flex justify-between bg-transparent' />
                : <div className={`lg:flex justify-between bg-transparent ${isFixed ? 'lg:fixed top-0 left-0 right-0' : ''}`}>

                    <div style={{ width: '150px' }} className='flex items-center p-5'>
                        <img src={logo} />
                    </div>

                    <nav className='p-2 text-white self-end flex gap-7 lg:gap-10 items-center'>
                        <Link to="/manager" className='transition-all duration-300 p-2 text-gray-500 hover:text-white'>{t("Inicio")}</Link>
                        <Link to="/editarblogs" className='transition-all duration-300 p-2 text-gray-500 hover:text-white'>{t("Postagens")}</Link>
                        <Link to="/rascunhos" className='transition-all duration-300 p-2 text-gray-500 hover:text-white'>Rascunhos</Link>
                        <button
                            className='p-3 pl-5 pr-5 mr-20 bg-lime-400 text-black rounded-xl'
                            onClick={() => navigate("/")}>
                            Sair
                        </button>
                    </nav>

                </div>
            }

        </header>
    );
}