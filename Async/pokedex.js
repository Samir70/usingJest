const fetchPokemon = async (pokemon) => {
    let path = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;
    return await fetch(path)
     .then((response) => response.json())
     .then((data) => {
         const types= []
         for(let i = 0; i<data.types.length; i++){
             types.push((data.types[i].type.name));
         }
         return ({name: data.name,
                      id: data.id,
                      height: data.height,
                      weight: data.weight,
                      types: types})
         });
 }
     console.log('End of file');
fetchPokemon('charizard').then((res) => console.log(res))
// const result = await fetchPokemon('charizard')
//  console.log(result);
 module.exports = fetchPokemon;