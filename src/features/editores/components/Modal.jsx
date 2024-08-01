import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white w-96 flex flex-col justify-center items-center p-10 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-4">Deseja Excluir</h2>
                <p>Essa ação será irreversivel</p>
                <div className="mt-8 flex justify-center space-x-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 rounded-md font-semibold"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-lime-500 text-black font-semibold rounded-md"
                    >
                        Excluir
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
