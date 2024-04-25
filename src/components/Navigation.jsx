import { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import logo from '../assets/Pokédex_logo.png';

export const Navigation = () => {
    const { onInputChange, valueSearch, onResetForm } =
        useContext(PokemonContext);

    const navigate = useNavigate();

    const onSearchSubmit = e => {
        e.preventDefault();
        navigate('/search', {
            state: valueSearch,
        });

        onResetForm();
    };

    return (
        <>
            <header className=' flex container py-10 pr-3 justify-between'>
                <Link to='/' className='logo w-110'>
                    <img src={logo} alt='Logo Pokedex' className="w-32" />
                </Link>

                <form onSubmit={onSearchSubmit} className="flex items-center pt-5">
                    <div className='form-group flex items-center border border-gray-500  rounded-full p-2'>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='h-6 w-6 text-gray-500'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' />
                        </svg>
                        <input
                            className="w-64 outline-none h-50"
                            type='search'
                            name='valueSearch'
                            id=''
                            value={valueSearch}
                            onChange={onInputChange}
                            placeholder='Buscar nombre de pokemon'
                            
                        />
                    </div>

                    <button className='btn-search ml-4 bg-primary text-white rounded-full px-4 py-2 font-semibold hover:bg-primary-hover'>Buscar</button>
                </form>
            </header>

            <Outlet />
        </>
    );
};