import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CardPokemon } from '../components';
import { PokemonContext } from '../context/PokemonContext';

export const SearchPage = () => {
    const location = useLocation();
    const { globalPokemons } = useContext(PokemonContext);

    const filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()));

    return (
        <div className='container mx-auto'>
            <p className='p-search text-lg mb-4'>
                Se encontraron <span className='font-semibold'>{filteredPokemons.length}</span> resultados:
            </p>
            <div className='card-list-pokemon grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {filteredPokemons.map(pokemon => (
                    <CardPokemon pokemon={pokemon} key={pokemon.id} />
                ))}
            </div>
        </div>
    );
};