import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

export const FilterBar = () => {
    const { active, handleCheckbox } = useContext(PokemonContext);

    return (
        <div className={`container-filters ${active ? 'left-0' : '-left-300'} w-250 text-gray-500 bg-gray-200 h-full pt-40 transition-all duration-300`}>
            <div className='filter-by-type pl-12 flex flex-col gap-7 '>
                <span className='font-bold text-2xl'>Tipo</span>

                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='grass'
                        id='grass'
                        className='mr-2'
                    />
                    <label htmlFor='grass'>Planta</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='fire'
                        id='fire'
                        className='mr-2'
                    />
                    <label htmlFor='fire'>Fuego</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='bug'
                        id='bug'
                        className='mr-2'
                    />
                    <label htmlFor='bug'>Bicho</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='fairy'
                        id='fairy'
                        className='mr-2'
                    />
                    <label htmlFor='fairy'>Hada</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='dragon'
                        id='dragon'
                        className='mr-2'
                    />
                    <label htmlFor='dragon'>Dragón</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='shadow'
                        id='shadow'
                        className='mr-2'
                    />
                    <label htmlFor='shadow'>Fantasma</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='ground'
                        id='ground'
                        className='mr-2'
                    />
                    <label htmlFor='ground'>Tierra</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='normal'
                        id='normal'
                        className='mr-2'
                    />
                    <label htmlFor='normal'>Normal</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='psychic'
                        id='psychic'
                        className='mr-2'
                    />
                    <label htmlFor='psychic'>Psíquico</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='steel'
                        id='steel'
                        className='mr-2'
                    />
                    <label htmlFor='steel'>Acero</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='dark'
                        id='dark'
                        className='mr-2'
                    />
                    <label htmlFor='dark'>Siniestro</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='electric'
                        id='electric'
                        className='mr-2'
                    />
                    <label htmlFor='electric'>Eléctrico</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='fighting'
                        id='fighting'
                        className='mr-2'
                    />
                    <label htmlFor='fighting'>Lucha</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='flying'
                        id='flying'
                        className='mr-2'
                    />
                    <label htmlFor='flying'>Volador</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='ice'
                        id='ice'
                        className='mr-2'
                    />
                    <label htmlFor='ice'>Hielo</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='poison'
                        id='poison'
                        className='mr-2'
                    />
                    <label htmlFor='poison'>Veneno</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='rock'
                        id='rock'
                        className='mr-2'
                    />
                    <label htmlFor='rock'>Roca</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='water'
                        id='water'
                        className='mr-2'
                    />
                    <label htmlFor='water'>Agua</label>
                </div>
            </div>
        </div>
    );
};