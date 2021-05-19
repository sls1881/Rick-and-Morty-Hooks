//fetchCharacter function
export const getCharacters = async (page) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const { results } = await res.json();

    return results;
};

//getCharacter function 
export const getCharacter = async (id) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const json = res.json();
    return json;
}