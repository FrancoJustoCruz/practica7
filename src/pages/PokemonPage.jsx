import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components';
import { PokemonContext } from '../context/PokemonContext';
import { primerMayuscula } from '../helper/helper';

export const PokemonPage = () => {
    const { getPokemonByID } = useContext(PokemonContext);
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [pokemon, setPokemon] = useState({});

    const fetchPokemon = async id => {
        const data = await getPokemonByID(id);
        setPokemon(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchPokemon(id);
    }, []);

    return (
        <main className='container relative flex flex-col mt-20 mb-10'>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <span className='number-pokemon relative top-10 left-0 text-9xl font-bold text-primary'>{`#${pokemon.id}`}</span>
                    <div className='header-main-pokemon flex'>
                        <div className=' w p-2 mt-8 mb-1 w-1/2'>
                            <h1 className='text-6xl bold font-bold text-right'>{primerMayuscula(pokemon.name)}</h1>
                            <div className='card-types info-pokemon-type flex'>
                                {pokemon.types.map(type => (
                                    <span key={type.type.name} className={`text-xs py-1 px-3 rounded-md  text-white ${getTypeColor(type.type.name)}`}>
                                        {type.type.name}
                                    </span>
                                ))}
                            </div>
                            <div className='info-pokemon mt-5 flex justify-between'>
                                <div className='group-info '>
                                    <p>Altura</p>
                                    <span>{pokemon.height}</span>
                                </div>
                                <div className='group-info'>
                                    <p>Peso</p>
                                    <span>{pokemon.weight}KG</span>
                                </div>
                            </div>
                        </div>
                        <div className='container-img-pokemon w-1/4 h-1/2 p-2 ml-auto'>
                        <img
    src={pokemon.sprites.other.dream_world.front_default}
    alt={`Pokemon ${pokemon?.name}`}
    className='w-70 h-70 object-cover'
/>
</div>
                    </div>
                    <div className='container-stats flex mt-4'>
                        <h1 className='text-2xl font-bold  content-center'>Estadísticas</h1>
                        <div className='stats flex-1 ml-5'>
                            {pokemon.stats.map(stat => (
                                <div key={stat.stat.name} className='stat-group flex items-center mt-3'>
                                    <span className='w-1/4'>{primerMayuscula(stat.stat.name)}</span>
                                    <div className='progress-bar w-3/4 h-6 bg-primary rounded-full mx-2'></div>
                                    <span className='counter-stat'>{stat.base_stat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </main>
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