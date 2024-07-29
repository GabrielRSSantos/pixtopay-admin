import React, { useState } from 'react';
import pixtopayimage from '../../../assets/images/pixtopayimage.png';
import { useNavigate  } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function Login() {

    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const [formData, setFormData] = useState({
        password: '',
        email: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const sendContato = (e) => {
        e.preventDefault();
        const contato = {
            password: formData.password,
            email: formData.email,
        };
        console.log(contato);
        // axiosInstance.post('http://localhost:5036/Blog/contato', {
        //   nome: formData.first_name,
        //   email: formData.email,
        //   tel: formData.tel,
        //   company: formData.company,
        //   message: formData.mensagem
        // })
        //   .then(response => {
        //     console.log('Dados enviados com sucesso:', response.data);
        //   })
        //   .catch(error => {
        //     console.error('Houve um erro ao enviar os dados:', error);
        //   });
    };

    const handleLogin = () => {
        navigate('/manager'); 
    };

    return (
        <div className="flex justify-center items-center h-dvh bg-gradient-to-t from-to-gray-main from-10% to-gray-main to-60% w-full text-white">

            <div className='flex flex-col items-center space-y-20 w-96 h-96'>

                <div style={{ width: '150px' }} className='w-full flex justify-center items-center'>
                    <img src={pixtopayimage} alt="pixtopay" />
                </div>

                <div className='w-full'>
                    <form className='flex flex-col' onSubmit={sendContato}>

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
                                value={formData.email}
                                onChange={handleChange}
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
                                    value={formData.password}
                                    onChange={handleChange}
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


                        <button
                            onClick={handleLogin}
                            className="text-black focus:outline-none bg-lime-400 hover:bg-lime-500 focus:ring-4 font-semibold rounded-lg text-sm p-2 mt-20"
                        >
                            {t("Entrar")}
                        </button>
                    </form>

                </div>

            </div>

        </div>
    );
}