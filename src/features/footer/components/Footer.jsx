import React from 'react';
import pixtopay from '../../../assets/images/pixtopayimage.png';
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer
            style={{ backgroundColor: '#161815', borderTop: '1px solid #313330'}}
            className='
            flex
            flex-wrap
            justify-evenly
            text-white 
            pt-24
            '
            
        >

            <div className='w-1/2 flex flex-col items-center '>
                <img style={{ width: '150px' }} src={pixtopay} />
                <div className='flex space-x-5 space-y-24'>
                    <div></div>
                    <FaFacebook />
                    <FaLinkedin />
                    <FaYoutube />
                    <FaInstagram />
                </div>

            </div>

            <div className='w-1/2 flex flex-col'>
                <p className='w-3/4'>{t("Mudando a maneira que organizamos pagamentos online.")}</p>
                <p>
                    {t("Tecnologia que entrega facilidade sem burocracia.")}
                </p>
                <nav className='mt-12 mb-10'>
                    <ul className='flex flex-col space-y-5'>
                        <Link to="/" className='transition-all duration-300 text-gray-500 hover:text-white'>{t("Pagina inicial")}</Link>
                        <Link to="/blog" className='transition-all duration-300 text-gray-500 hover:text-white'>{t("Blog")}</Link>
                        <Link to="/api" className='transition-all duration-300 text-gray-500 hover:text-white'>API</Link>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}