import Image from "next/image";
import { CiLight } from 'react-icons/ci'
import { MdDarkMode } from 'react-icons/md'
import useLocalStorage from 'use-local-storage'


const about = ({data}) => {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div className='pokemon-wrapper' data-theme={theme}>
        <div className="theme-switcher-about">
                {theme === 'dark' ? 
                <MdDarkMode 
                className='theme-btn' 
                onClick={switchTheme}
                style={{padding: '2rem'}}
                /> 
                : 
                <CiLight 
                className='theme-btn' 
                onClick={switchTheme}
                style={{padding: '2rem'}}
                />
                }
            </div>
        {data.map((pokemon,index) => (
            <div key={pokemon.name} className='pokemon-card'>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}/> 
                <h3>{pokemon.name}</h3>
          </div>
        ))}
    </div>
  )
}
export const getStaticProps = async () => {

    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=6");
    const pokemons = await res.json();
    const data = pokemons.results
  
    return {
      props: {
        data,
      },
    };
  };

export default about