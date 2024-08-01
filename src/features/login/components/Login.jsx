import React, { useState } from 'react';
import pixtopayimage from '../../../assets/images/pixtopayimage.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import axiosInstance from '../../../services/axiosConfig';
import { useAuth } from '../../../routes/AuthContext';

export default function Login() {

    const navigate = useNavigate();
    const { login } = useAuth();
    const { t, i18n } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const sendContato = (e) => {
        e.preventDefault();
        axiosInstance.post('http://localhost:5036/User/login', {
            email: email,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log('Dados enviados com sucesso:', response.data);
                login();
                navigate('/manager');
            })
            .catch(error => {
                console.error('Houve um erro ao enviar os dados:', error.response ? error.response.data : error.message);
                setErrorMessage('Email ou senha incorretos');
                setTimeout(() => {
                    setErrorMessage('');
                }, 2000);

            });
    };

    return (
        <div className="flex justify-center items-center h-dvh bg-gradient-to-t from-to-gray-main from-10% to-gray-main to-60% w-full text-white">

            <div className='flex flex-col items-center space-y-20 w-96 h-96'>

                <div style={{ width: '150px' }} className='w-full flex justify-center items-center'>
                    <img src={pixtopayimage} alt="pixtopay" />
                </div>

                <div className='w-full'>
                    <form className='flex flex-col' onSubmit={sendContato}>
                        <div className='space-y-6'>

                            <div className='space-y-2'>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className='space-y-2'>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    >
                                        {showPassword ? <FiEye className="text-gray-400" /> : <FiEyeOff className="text-gray-400" />}
                                    </button>
                                </div>
                            </div>
                        </div>


                        <button
                            className="text-black focus:outline-none bg-lime-400 hover:bg-lime-500 focus:ring-4 font-semibold rounded-lg text-sm p-2 mt-14"
                        >
                            {t("Entrar")}
                        </button>
                    </form>

                    {errorMessage && (
                        <div className="bg-red-300 border-2 rounded-xl mt-5 border-red-400 p-3 text-red-800 font-semibold">
                            {errorMessage}
                        </div>
                    )}

                </div>

            </div>

        </div>
    );
}