import React from "react";

export default function Card({nome, descricao, foto}) {
    return (
        <div className="">
            <img style={{ width: '320px', height:'300px' }} className="relative top-10 rounded-lg" src={`data:image/jpeg;base64,${foto}`} />
            <div className='h-52 flex flex-col items-start space-y-10 relative bg-gradient-to-t from-black from-80% to-transparent pl-5 rounded-lg'>
                <h1 className='text-3xl font-semibold'>{nome}</h1>
                <h3>{descricao}</h3>
                <button type="button" className="text-black focus:outline-none bg-lime-400 hover:bg-lime-500 focus:ring-4 font-semibold rounded-lg text-sm p-2">Ler Mais</button>
            </div>
        </div>
    )
}