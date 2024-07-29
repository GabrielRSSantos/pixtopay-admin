import React from 'react';
import Gravura from '../../../assets/images/Gravura.png';
import { LuUser2, LuTextCursorInput } from "react-icons/lu";
import { Link, useNavigate  } from 'react-router-dom';


export default function Manager() {
    const navigate = useNavigate();

    const handleEditores = () => {
        navigate('/editores'); 
    };

    return (
        <div className="flex flex-col space-y-20 justify-center items-center h-dvh bg-gradient-to-t from-to-gray-main from-10% to-gray-main to-60% w-full text-white">

            <div  className='absolute -left-40 top-72'>
                <img src={Gravura} alt="Gravura" style={{height:'600px'}}  />
            </div>

            <div className='space-y-2'>
                <span className='text-lime-400 font-bold text-5xl'>Bem-Vindo(a)!</span>
                <h1 className='font-bold text-5xl'> essa é a área de criação.</h1>
                <p className='text-gray-500'>Selecione uma das opções abaixo</p>
            </div>

            <div className='flex space-x-10'>
                <button className='flex flex-col border rounded-xl p-5 w-60 h-72 space-y-5 bg-gray-500/20 transition-colors duration-500 hover:bg-gray-500'>
                    <div className='flex items-center space-x-5'>
                        <LuUser2 size={40} />
                        <p className='w-28 text-lg text-start'>Gerenciar editores</p>
                    </div>
                    <p className='text-start'>Crie, delete e inative um usuário com permissão para editar o blog.</p>
                </button>

                <button onClick={handleEditores} className='flex flex-col border rounded-xl p-5 w-60 h-72 space-y-5 bg-gray-500/20 transition-colors duration-500 hover:bg-gray-500'>
                    <div className='flex items-center space-x-5'>
                        <LuTextCursorInput size={40} />
                        <p className='w-28 text-lg text-start'>Editar o blog</p>
                    </div>
                    <p className='text-start'>Crie, delete e dite uma postagem no blog.</p>
                </button>
            </div>
        </div>
    );
}