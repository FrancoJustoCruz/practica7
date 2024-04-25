import React from 'react';
import { Link } from 'react-router-dom';

export const CardPokemon = ({ pokemon }) => {
    return (
        <Link to={`/pokemon/${pokemon.id}`} className='card-pokemon'>
            <div className='card-img bg-gray-200 flex items-center justify-center rounded-md h-64'>
                <img
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt={`Pokemon ${pokemon.name}`}
                    className='w-full h-full'
                />
            </div>
            <div className='card-info'>
                <span className='pokemon-id'>N° {pokemon.id}</span>
                <h3 className='text-lg font-semibold'>{pokemon.name}</h3>
                <div className='card-types flex gap-2 mt-2'>
                    {pokemon.types.map(type => (
                        <span
                            key={type.type.name}
                            className={`text-xs py-1 px-4 rounded-md text-white ${getTypeColor(
                                type.type.name
                            )}`}
                        >
                            {type.type.name}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

function getTypeColor(typeName) {
    switch (typeName) {
        case 'fire':
            return 'bg-fire';
        case 'grass':
            return 'bg-grass';
        case 'steel':
            return 'bg-steel';
        case 'water':
            return 'bg-water';
        case 'psychic':
            return 'bg-psychic';
        case 'ground':
            return 'bg-ground';
        case 'ice':
            return 'bg-ice';
        case 'flying':
            return 'bg-flying';
        case 'ghost':
            return 'bg-ghost';
        case 'normal':
            return 'bg-normal';
        case 'poison':
            return 'bg-poison';
        case 'rock':
            return 'bg-rock';
        case 'fighting':
            return 'bg-fighting';
        case 'dark':
            return 'bg-dark';
        case 'bug':
            return 'bg-bug';
        case 'dragon':
            return 'bg-gradient-to-r from-dragon to-yellow-500';
        case 'electric':
            return 'bg-electric';
        case 'fairy':
            return 'bg-fairy';
        case 'shadow':
            return 'bg-shadow';
        default:
            return 'bg-unknown';
    }
}