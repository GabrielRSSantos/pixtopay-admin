import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import axiosInstance from "../../../services/axiosConfig";

export default function CriarUser() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPassword(!showConfirmPassword);
    };

    const sendContato = (e) => {
        e.preventDefault();

        if (password !== passwordConfirm) {
            setErrorMessage('Senhas incompatíveis');
                setTimeout(() => {
                    setErrorMessage('');
                }, 2000);
            return;
        }

        const userData = {
            name,
            email,
            password
        };

        axiosInstance.post('http://localhost:5036/User/create', userData)
            .then(response => {
                console.log('Usuário criado com sucesso:', response.data);
                navigate('/editores');
            })
            .catch(error => {
                console.error('Houve um erro ao criar o usuário:', error.response ? error.response.data : error.message);
                
            });
    };

    const handleVoltar = () => {
        navigate('/editores');
    };

    return (
        <div className="flex flex-col items-center h-dvh bg-gradient-to-t from-to-gray-main from-10% to-gray-main to-60% w-full text-white pt-20">

            <button onClick={handleVoltar} className="bg-lime-400 self-start m-10 w-20 rounded-xl p-3 text-black font-semibold">Voltar</button>

            <div className=''>

                <div className='w-96 flex flex-col space-y-20'>
                    <form className='flex flex-col space-y-5' onSubmit={sendContato}>

                        <div className="space-y-2">
                            <label className="font-semibold">Nome</label>
                            <input
                                type="text"
                                id="first_name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder={t("Nome")}
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="font-semibold">Email</label>
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

                        <div className='space-y-2'>
                            <label
                                htmlFor="confirm_password"
                                className="block text-sm font-medium text-gray-300"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    id="confirm_password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Confirme a senha"
                                    required
                                    value={passwordConfirm}
                                    onChange={(e) => setPasswordConfirm(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={toggleConfirmPasswordVisibility}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    {showConfirmPassword ? <FiEye className="text-gray-400" /> : <FiEyeOff className="text-gray-400" />}
                                </button>
                            </div>
                        </div>

                    </form>
                    <button
                        onClick={sendContato}
                        type="submit"
                        className="text-black focus:outline-none bg-lime-400 hover:bg-lime-500 focus:ring-4 font-semibold rounded-lg text-sm p-2"
                    >
                        {t("Salvar")}
                    </button>

                </div>
                {errorMessage && (
                    <div className="bg-red-300 border-2 rounded-xl mt-5 border-red-400 p-3 text-red-800 font-semibold">
                        {errorMessage}
                    </div>
                )}
            </div>
        </div>
    );
}