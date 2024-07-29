import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import './Dashboard.css';
import Servico from '../../servico/components/Servico';
import { MdOutlineSupportAgent, MdOutlineBlock, MdDashboardCustomize, MdTimerOff, MdOutlineQrCode, MdPix } from "react-icons/md";
import { RiMoneyDollarCircleLine, RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { BiSolidFileExport } from "react-icons/bi";
import Gravura from '../../../assets/images/Gravura.png';
import GraficoMain from '../../../assets/images/graficomain.png';
import arenavip from '../../../assets/images/Arenavip.png';
import betzor from '../../../assets/images/Betzor.png';
import apostafeita from '../../../assets/images/Apostafeita.png';
import brizabet from '../../../assets/images/Brisa.png';
import fourplay from '../../../assets/images/4play.png';
import milanobet from '../../../assets/images/Milanobet.png';
import betvip from '../../../assets/images/Betvip.png';
import apostatudo from '../../../assets/images/Apostatudo.png';
import melhorpagamento from '../../../assets/images/melhorpagamento.png';
import reclameaqui from '../../../assets/images/reclameaqui.png';
import ComputerImage from '../../../assets/images/ComputerImage.png';
import CelularImage from '../../../assets/images/CelularImage.png';
import SecurityImage from '../../../assets/images/SecurityImage.png';
import { useTranslation } from 'react-i18next';
import axiosInstance from '../../../services/axiosConfig';
import '../../../utils/i18n';

const Dashboard = () => {

  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    first_name: '',
    email: '',
    tel: '',
    company: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const sendContato = (e) => {
    e.preventDefault();
    const contato = {
      first_name: formData.first_name,
      email: formData.email,
      tel: formData.tel,
      company: formData.company,
      mensagem: formData.mensagem
    };
    console.log(contato);
    axiosInstance.post('http://localhost:5036/Blog/contato', {
      nome: formData.first_name,
      email: formData.email,
      tel: formData.tel,
      company: formData.company,
      message: formData.mensagem
    })
      .then(response => {
        console.log('Dados enviados com sucesso:', response.data);
      })
      .catch(error => {
        console.error('Houve um erro ao enviar os dados:', error);
      });
  };

  const itemsOptions = [
    {
      Icon: <MdOutlineSupportAgent />,
      title: t("Suporte 24/7 com TMA de 3 minutos"),
    },
    {
      Icon: <RiMoneyDollarCircleLine />,
      title: t("Aproximadamente 400 TPS"),
    },
    {
      Icon: <BsGlobeEuropeAfrica />,
      title: t("Geolocalização de clientes"),
    },
    {
      Icon: <MdDashboardCustomize />,
      title: t("Geração de envio de invoice pelo dashboard"),
    },
    {
      Icon: <MdPix />,
      title: t("+40 milhões de operações PIX todos os meses"),
    },
    {
      Icon: <BiSolidFileExport />,
      title: t("Exportação de extrato financeiro via OLX"),
    },
    {
      Icon: <MdTimerOff />,
      title: t("Pix expirado"),
    },
    {
      Icon: <FaMoneyBill />,
      title: t("Saque efetuado"),
    },
    {
      Icon: <RiMoneyDollarCircleFill />,
      title: t("Primeiro depósito"),
    },
    {
      Icon: <MdOutlineQrCode />,
      title: t("Pix gerado"),
    },
    {
      Icon: <GiConfirmed />,
      title: t("Pix pago"),
    },
    {
      Icon: <MdOutlineBlock />,
      title: t("Saque rejeitado"),
    },
  ];

  return (
    <div className='flex justify-center flex-col items-center'>

      {/* Titulo */}
      <div style={{ backgroundColor: '#161815' }}
        className='grid lg:grid-cols-2 pb-52 pt-24'>

        <div className='flex justify-center'>
          <img className='rounded-lg ' src={Gravura} />
        </div>

        <div className='flex flex-col justify-center'>
          <div className="">
            <h1 className='text-white text-start font-semibold text-5xl pb-5'>{t("Simplifique seus pagamentos com")} <span style={{ color: "#9ff282" }}>{t("tecnologia")}</span> e <span style={{ color: "#9ff282" }}>{t("segurança")}</span></h1>
          </div>

          <h1 className='text-gray-400 text-wrap text-2xl pb-5'>{t("Estamos no TOP operadores de PIX do Brasil em termos de volumes de transações.")}</h1>

          <button type="button" className="lg:w-96 focus:outline-none bg-lime-400 hover:bg-lime-500 focus:ring-4 rounded-lg text-lg font-semibold pt-4 pb-4">{t("Entre em contato conosco")}</button>
        </div>

      </div>

      <Servico />

      {/* Conteudo */}
      <div className='mt-60 w-3/4 flex flex-col items-center'>
        <h1 className='font-bold lg:self-start self-center'>{t("Quem somos?")}</h1>
        <h1 className='font-bold text-5xl mb-10 mt-5'>{t("Uma fintech brasileira dedicada ao setor de pagamentos digitais.")}</h1>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-28 mb-10 text-justify'>
          <h1>{t("Em um mundo impulsionado pela tecnologia, nos destacamos como")} <span style={{ color: "#b9f601" }} className='font-bold'>{t("inovadores e transformadores na experiência de transações")}</span>. {t("Com uma equipe que")} <span style={{ color: "#b9f601" }} className='font-bold'>{t("possui mais de 10 anos de experiência")}</span> {t("no mercado de pagamento, oferecemos soluções consolidadas e ferramentas de ponta.")}</h1>
          <h1>{t("Nossas ofertas incluem")} <span style={{ color: "#b9f601" }} className='font-bold'>{t("serviços de pagamento via QR code, links de pagamento e integração com e-commerce")}</span>, {t("sempre com o objetivo de simplificar e agilizar o processo de pagamento para consumidores e comerciantes, proporcionando uma experiência mais prática e segura.")}</h1>
        </div>
        <div className='flex space-x-5 mb-5'>
          <img src={reclameaqui} />
          <img src={melhorpagamento} />
        </div>

        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{t("Conheça mais dos nossos serviços")}</button>

      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 w-3/4 gap-48 mt-32 '>

        <div className='flex flex-col justify-center'>
          <h1 className='text-lg font-bold'>{t("Nossos beneficios para sua empresa")}</h1>
          <h1 className='text-4xl font-bold mt-3 mb-7 lg:w-2/3'>{t("Recursos que facilitam seus pagamentos")}</h1>
          <h1 className='text-lg font-bold mb-10 text-justify w-3/4'>{t("Dentre diversas facilidades que nosso sistema oferece, a integração de Host to Host é a primeira experiência por quem usufrui de nossos serviços")}</h1>
          <button type="button" className="lg:w-2/3 focus:outline-none bg-lime-400 hover:bg-lime-500 focus:ring-4 rounded-lg text-lg font-semibold pt-4 pb-4">{t("Conheça mais dos nossos serviços")}</button>
        </div>

        <div className='grid lg:grid-cols-3 grid-cols-2 gap-x-3'>
          {itemsOptions.map((item, index) => {

            return (
              <div id="test" key={index} className='flex flex-col justify-evenly items-center w-40 h-40 rounded-lg bg-gray-50 hover:bg-gray-100'>
                <div>
                  {React.cloneElement(item.Icon, { size: '20', className: 'mt-5 icon' })}
                </div>
                <div className='w-3/4 m-5'>
                  <h1 className='text-center'>{item.title}</h1>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      <div className='mb-60 mt-32 grid place-items-center grid-cols-1 lg:grid-cols-2 '>

        <div className=''>
          <img src={GraficoMain} />
        </div>

        <div className='w-3/4'>
          <h1 className='font-semibold text-lg'>{t("Nossas soluções")}</h1>
          <h1 className='font-bold text-4xl'>{t("Dashboard Intuitivo")}</h1>
          <h1 className='pt-5'>{t("Prezamos pela autonomia, conforto e segurança dos clientes. Com nosso dashboard, é possível gerenciar e movimentar a carteira em tempo real, podendo realizar pagamentos e movimentações direto de nosso painel, sem necessidade de transferências para contas externas.")}</h1>
          <h3 className='font-bold'>{t("Relatórios gerados:")}</h3>
          <ul className='list-disc pl-6'>
            <li>{t("Aniversariante")}</li>
            <li>{t("Pix gerados")}</li>
            <li>{t("Rank dos melhores clientes")}</li>
            <li>{t("Segmentação por idade, sexo e região")}</li>
            <li>{t("Maiores sacadores")}</li>
            <li>{t("Maiores depositantes")}</li>
          </ul>
          <button type="button" className="w-40 focus:outline-none bg-lime-400 hover:bg-lime-500 focus:ring-4 font-semibold rounded-lg text-sm pt-3 pb-3 mt-5">{t("Comece a usar agora")}</button>
        </div>

      </div>

      <div className='w-full'>

        <h1 className='pb-20 p-16 text-4xl font-bold'>{t("Tecnologia e informação! Acompanhe o nosso blog")}</h1>

        <div className='grid place-items-center lg:grid-cols-3 text-white'>

          <div className=''>
            <img style={{ width: '500px' }} src={ComputerImage} />
            <div className='h-56 flex flex-col items-start space-y-10 bg-gradient-to-t from-black from-70% to-transparent relative bottom-20 pl-5 rounded-lg'>
              <h1 className='text-3xl font-semibold'>{ }</h1>
              <h3>feito por fulano</h3>
              <button type="button" className="text-black focus:outline-none bg-lime-400 hover:bg-lime-500 focus:ring-4 font-semibold rounded-lg text-sm p-2">Ler Mais</button>
            </div>
          </div>

          <div className=''>
            <img style={{ width: '500px' }} src={CelularImage} />
            <div className='h-56 flex flex-col items-start space-y-10 bg-gradient-to-t from-black from-70% to-transparent relative bottom-20 pl-5 rounded-lg'>
              <h1 className='text-3xl font-semibold'>Titulo</h1>
              <h3>feito por fulano</h3>
              <button type="button" className="text-black focus:outline-none bg-lime-400 hover:bg-lime-500 focus:ring-4 font-semibold rounded-lg text-sm p-2">{t("Ler Mais")}</button>
            </div>
          </div>

          <div className=''>
            <img style={{ width: '500px' }} src={SecurityImage} />
            <div className='h-56 flex flex-col items-start space-y-10 bg-gradient-to-t from-black from-70% to-transparent relative bottom-20 pl-5 rounded-lg'>
              <h1 className='text-3xl font-semibold'>Titulo</h1>
              <h3>feito por fulano</h3>
              <button type="button" className="text-black focus:outline-none bg-lime-400 hover:bg-lime-500 focus:ring-4 font-semibold rounded-lg text-sm p-2">{t("Ler Mais")}</button>
            </div>
          </div>

        </div>

        <div className='pl-16 pr-16 mb-20'>
          <button style={{ backgroundColor: '#313330' }} className="text-white w-full focus:outline-none focus:ring-4 font-semibold rounded-lg text-sm p-5">{t("Veja mais do nosso conteudo")}</button>
        </div>

      </div>

      <div style={{ backgroundColor: '#161815' }} className='flex w-full justify-center'>

        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-white m-5 mt-40'>{t("Marcas que confiam na PixToPay")}</h1>

          <div style={{ width: '1000px' }} className='flex space-x-16 overflow-hidden'>
            <div className='flex space-x-16 animate-loop-scroll opacity-7'>
              <img className='max-w-none' src={arenavip} />
              <img className='max-w-none' src={betzor} />
              <img className='max-w-none' src={apostafeita} />
              <img className='max-w-none' src={brizabet} />
              <img className='max-w-none' src={fourplay} />
              <img className='max-w-none' src={milanobet} />
              <img className='max-w-none' src={betvip} />
              <img className='max-w-none' src={apostatudo} />
            </div>
            <div className='flex space-x-16 animate-loop-scroll opacity-7' aria-hidden="true">
              <img className='max-w-none' src={arenavip} />
              <img className='max-w-none' src={betzor} />
              <img className='max-w-none' src={apostafeita} />
              <img className='max-w-none' src={brizabet} />
              <img className='max-w-none' src={fourplay} />
              <img className='max-w-none' src={milanobet} />
              <img className='max-w-none' src={betvip} />
              <img className='max-w-none' src={apostatudo} />
            </div>
          </div>

        </div>

      </div>

      <div style={{ backgroundColor: '#161815' }} className='grid grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-20  place-items-center pt-20 pb-20'>

        <div className='w-96 flex flex-col space-y-20'>
          <h1 style={{ color: "#9ff282" }} className='text-3xl font-bold'>{t("Entre em contato")}</h1>

          <form className='flex flex-col space-y-5' onSubmit={sendContato}>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={t("Nome")}
              required
              value={formData.first_name}
              onChange={handleChange}
            />

            <input
              type="text"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <InputMask
              mask="(99) 99999-9999"
              value={formData.tel}
              onChange={handleChange}
            >
              {(inputProps) => (
                <input
                  {...inputProps}
                  type="text"
                  id="tel"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Whatsapp para contato com DDD"
                  required
                />
              )}
            </InputMask>

            <input
              type="text"
              id="company"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={t("Empresa")}
              required
              value={formData.company}
              onChange={handleChange}
            />

            <textarea
              rows="4"
              id="mensagem"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder='Mensagem'
              value={formData.mensagem}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="text-black focus:outline-none bg-lime-400 hover:bg-lime-500 focus:ring-4 font-semibold rounded-lg text-sm p-2"
            >
              {t("Enviar contato")}
            </button>
          </form>

        </div>

        <div className='flex flex-col text-white space-y-28'>

          <div className=''>
            <h1 style={{ color: "#9ff282" }} className='text-justify font-bold text-4xl'>{t("Porque você deve escolher a Pixtopay")}</h1>
          </div>

          <div className='flex flex-col justify-around'>

            <h2 className='font-bold text-2xl'>{t("Suporte")}</h2>
            <p>{t("Trabalhamos apenas com suporte B2B, o que nos dá capacidade de respostas rápidas e assertivas, para as necessidades de cada atendimento. Nosso compromisso é fornecer uma solução em até três minutos após o primeiro contato, sendo esses um dos nossos objetivos acordados em nossas mensuráveis (SLA).")}</p>

            <h2 className='font-bold text-2xl mt-10'>{t("Inovação")}</h2>
            <p className='mb-10'>{t("A PIXTOPAY é uma empresa de Facilitação de Pagamentos (eFX) para depósitos e saques de valores, que preza sempre pela inovação e avanço tecnológico. Contamos com mais de 2 anos de atuação neste mercado, trazendo assim experiência consolidada, acompanhada das melhores soluções e ferramentas.")}</p>

            <h2 className='font-bold text-2xl'>{t("Conformidade")}</h2>
            <p>{t("A PIXTOPAY segue as regulamentações do Banco Central do Brasil, bem como as melhores práticas internacionais em pagamentos.")}</p>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
