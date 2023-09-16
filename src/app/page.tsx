import { link } from 'fs';
import Image from 'next/image'
import Link from 'next/link';

export default async function Home() {
  const response = await fetch ('http://pokeapi.co/api/v2/pokemon');
  const { results: pokemon } = await response.json();

  return (
    <div>
      <div>
        <h2 className='text-2xl mb-4 font-bold'>Pokemons</h2>
      </div>
      <div className='flex flex-wrap gap-3'>
        {pokemon.map((pokemon: any)=> 
        
        <Link 
        href={`/info/${pokemon.name}`}
        key={pokemon.name}
        className=' group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
        >
           {pokemon.name}
        </Link>
        
        
        )
        }
      
      </div>
    </div>
  )
}
