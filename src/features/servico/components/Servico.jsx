import React, { useState } from "react";
import Menu from "../../menu/components/Menu";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { MdDashboardCustomize, MdOutlineSupportAgent } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { BiShieldQuarter } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import DropDown from "./dropdown";
import { useMediaQuery } from 'react-responsive';
import Mulher from "../../../assets/images/JovemMulher.png";
import Celular from "../../../assets/images/Celular.png";
import Homem from "../../../assets/images/Homem.png";
import CidadeFoto from "../../../assets/images/CidadeFoto.png";
import Tablet from "../../../assets/images/Tablet.png";

export default function Servico() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1024px)' })
    const [page, setPage] = useState('vantagens');
    const { t } = useTranslation();

    function fotoHandler() {
        if (page === 'vantagens') {
            return Mulher;
        } else if (page === 'suport') {
            return Homem;
        } else if (page === 'relatorio') {
            return Tablet;
        } else if (page === 'recursos') {
            return CidadeFoto;
        }else if (page === 'eventos') {
            return Celular;
        }
    }

    return (
        <div className="w-full flex flex-col items-center">

            <div className="bg-gradient-to-t from-to-gray-main to-gray-main w-full">

                <div className="text-white text-4xl place-items-end font-semibold pb-40 grid grid-cols-4">
                    <h1>Serviços</h1>
                </div>

                <div className="lg:gap-40 pb-40 place-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">

                    <div className="bg-white rounded-lg w-64 h-72 p-5 col-start-2">
                        <div className="flex items-center space-x-3 pb-3">
                            <BiShieldQuarter color="gray" size={50} />
                            <h1 className="text-2xl font-semibold">{t("Segurança Rigorosa")}</h1>
                        </div>
                        <p className="mb-3">{t("Operamos de acordo com a regulamentação do Banco central brasileiro, seguindo um padrão altamente rigoroso de segurança.")}</p>
                    </div>

                    <div className="bg-transparent border border-white text-white rounded-lg w-64 h-72 p-5 ">
                        <div className="flex items-center space-x-3 pb-3">
                            <FaCartShopping color="white" size={50} />
                            <h1 className="text-2xl font-semibold">{t("Checkout transparente")}</h1>
                        </div>
                        <p className="mb-3">{t("Inicie e finalize a compra dentro do site sem páginas intermediárias ou redirecionamentos, aumentando ainda mais a sua conversão.")}</p>
                    </div>

                    <div className="bg-transparent border border-white text-white rounded-lg w-64 h-72 p-5 ">
                        <div className="flex items-center space-x-3 pb-3">
                            <FaStar color="white" size={50} />
                            <h1 className="text-2xl font-semibold">{t("Compliance")}</h1>
                        </div>
                        <p className="mb-3">{t("Com nosso compliance você evita dores de cabeça, como fraudes, contestações e chargebacks.")}</p>
                    </div>

                    <div className="bg-white rounded-lg w-64 h-72 p-5 ">
                        <div className="flex items-center space-x-3 pb-3">
                            <RiMoneyDollarCircleFill color="gray" size={50} />
                            <h1 className="text-2xl font-semibold">{t("Câmbio")}</h1>
                        </div>
                        <p className="mb-3">{t("Receba pagamentos em poucos segundos de qualquer lugar do mundo.")}</p>
                    </div>

                </div>

                <div>
                    <div className="mb-20 font grid grid-cols-1 lg:grid-cols-5 text-white">
                        <div className="space-y-3 text-lg col-start-2">
                            <p>{t("mais de")}</p>
                            <h1 className="text-6xl font-semibold">{t("40 milhões")}</h1>
                            <p className="">{t("de operações de pix todos os meses.")}</p>
                        </div>

                        <div className="space-y-3 text-lg">
                            <p>{t("Aproximadamente")}</p>
                            <h1 className="text-6xl font-semibold">{t("400 transações")}</h1>
                            <p>{t("de dados individuais a cada segundo")}</p>
                        </div>

                        <div className="space-y-3 text-lg">
                            <p>{t("Suporte de")}</p>
                            <h1 className="text-6xl font-semibold">{t("24h/7dias")}</h1>
                            <p>{t("com tempo médio de atendimento de 3 minutos")}</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full p-20 lg:p-10 lg:pl-48 grid gap-20 grid-cols-1 lg:grid-cols-4">
                
                <div>
                    <img src={fotoHandler()} />
                </div>
                {
                    isDesktopOrLaptop ?
                        <div className="bg-white p-5 flex flex-col items-center w-60 col-span-1 rounded-lg">

                            <nav className="flex flex-col space-y-5">

                                <div className="">
                                    <p>{t("Opções")}</p>
                                </div>

                                <div className="flex items-center hover:bg-gray-200 rounded-lg w-full">
                                    <BsGlobeEuropeAfrica className="ml-2" />
                                    <button
                                        className="text-start w-full p-2"
                                        onClick={() => setPage('eventos')}
                                    >{t("Eventos de Gatway")}
                                    </button>
                                </div>

                                <div className="flex items-center hover:bg-gray-200 rounded-lg w-full">
                                    <MdOutlineSupportAgent className="ml-2" />
                                    <button
                                        className="text-start w-full p-2"
                                        onClick={() => setPage('suport')}
                                    >{t("Suport")}
                                    </button>
                                </div>

                                <div className="flex items-center hover:bg-gray-200 rounded-lg w-full">
                                    <MdDashboardCustomize className="ml-2" />
                                    <button
                                        className="text-start w-full p-2"
                                        onClick={() => setPage('relatorio')}
                                    >{t("Relatórios")}
                                    </button>
                                </div>

                                <div className="flex items-center hover:bg-gray-200 rounded-lg w-full">
                                    <IoMdSettings className="ml-2" />
                                    <button
                                        className="text-start w-full p-2"
                                        onClick={() => setPage('recursos')}
                                    >{t("Recursos adicionais")}
                                    </button>
                                </div>

                                <div className="flex items-center hover:bg-gray-200 rounded-lg w-full">
                                    <FaStar className="ml-2" />
                                    <button
                                        className="text-start w-full p-2"
                                        onClick={() => setPage('vantagens')}
                                    >{t("Vantagens")}
                                    </button>
                                </div>

                            </nav>
                        </div>
                        : <DropDown pagina={page} setPagina={setPage} />
                }

                <div className="col-span-2">
                    <Menu page={page} />
                </div>

            </div>

        </div>
    )

}

