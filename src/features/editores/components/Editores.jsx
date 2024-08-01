import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { LuPencil, LuTrash2 } from "react-icons/lu";
import axiosInstance from "../../../services/axiosConfig";
import Modal from './Modal'; // Importe o componente Modal

export default function Editores() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userIdToDelete, setUserIdToDelete] = useState(null);

    const handleVoltar = () => {
        navigate('/manager');
    };

    const handleCriarUser = () => {
        navigate('/criarusuario');
    };

    useEffect(() => {
        axiosInstance.get('http://localhost:5036/User/GetAllUsers')
            .then(response => {
                console.log(response.data);
                setUsers(response.data);
                console.log('Dados recebidos com sucesso:', response.data);
            })
            .catch(error => {
                console.error('Houve um erro ao receber os dados:', error.response ? error.response.data : error.message);
            });
    }, []);

    const handleDeleteClick = (id) => {
        setUserIdToDelete(id);
        setIsModalOpen(true);
    };

    const handleSaveClick = () => {
        axiosInstance.put(`http://localhost:5036/User/update/${id}`, { ...user, name })
            .then(response => {
                console.log('Usuário atualizado com sucesso:', response.data);
                navigate('/editors');
            })
            .catch(error => {
                console.error('Houve um erro ao atualizar o usuário:', error.response ? error.response.data : error.message);
            });
    };

    const handleConfirmDelete = () => {
        axiosInstance.delete(`http://localhost:5036/User/${userIdToDelete}`)
            .then(response => {
                console.log('Usuário deletado com sucesso:', response.data);
                setUsers(users.filter(user => user.id !== userIdToDelete));
                setIsModalOpen(false);
            })
            .catch(error => {
                console.error('Houve um erro ao deletar o usuário:', error.response ? error.response.data : error.message);
                setIsModalOpen(false);
            });
    };

    const handleCancelDelete = () => {
        setIsModalOpen(false);
    };
    
    const handleEditClick = (id) => {
        navigate(`/edituser/${id}`);
    };

    return (
        <div className="flex flex-col items-center h-dvh bg-gradient-to-t from-to-gray-main from-10% to-gray-main to-60% w-full text-white pt-20">

            <button onClick={handleVoltar} className="bg-lime-400 self-start m-10 w-20 rounded-xl p-3 text-black font-semibold">Voltar</button>

            <div className="flex flex-col items-center border w-3/6 bg-gray-500/20 rounded-xl p-10 space-y-20">
                <h1 className="text-6xl font-bold">Lista de editores</h1>

                <div className="space-y-10">
                    {users.map(user => (
                        <User
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            onDeleteClick={handleDeleteClick}
                            onEditClick={handleEditClick}
                        />
                    ))}
                </div>

                <button onClick={handleCriarUser} className="border-4 rounded-xl w-1/2 border-lime-400 p-3">Criar usuário</button>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={handleCancelDelete}
                onConfirm={handleConfirmDelete}
            />
        </div>
    );
}

const User = ({ id, name, onDeleteClick, onEditClick }) => {
    return (
        <div className="flex items-center space-x-40">
            <span className="w-40 ms-3 text-sm font-medium text-white dark:text-gray-300">{name}</span>
            <div className="flex space-x-5">
                <div className="flex space-x-2">
                    <LuTrash2 onClick={() => onDeleteClick(id)} className="cursor-pointer" size={20} />
                    <LuPencil onClick={() => onEditClick(id)} className="cursor-pointer" size={20} />
                </div>
                <label className="flex items-center cursor-pointer bg-transparent">
                    <input type="checkbox" id="toggle" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-lime-400"></div>
                </label>
            </div>
        </div>
    );
};
