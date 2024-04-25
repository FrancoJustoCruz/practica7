import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { CardPokemon } from './CardPokemon';
import { Loader } from './Loader';

export const PokemonList = () => {
    const { allPokemons, loading, filteredPokemons } =
        useContext(PokemonContext);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                    {filteredPokemons.length ? (
                        filteredPokemons.map(pokemon => (
                            <CardPokemon pokemon={pokemon} key={pokemon.id} />
                        ))
                    ) : (
                        allPokemons.map(pokemon => (
                            <CardPokemon pokemon={pokemon} key={pokemon.id} />
                        ))
                    )}
                </div>
            )}
        </>
    );
};