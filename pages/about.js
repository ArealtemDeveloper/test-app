import Header from "../components/Header"

const about = ({data}) => {

  return (
    <div className='pokemon-wrapper'>
        <Header/>
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
    console.log(pokemons)
  
    return {
      props: {
        data,
      },
    };
  };

export default about