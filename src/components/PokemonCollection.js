import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

function PokemonCollection({ searchText }) {
  const [pokemonList, setPokemonList] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then((res) => res.json())
      .then((data) => setPokemonList(data))
  }, [])

  const searchPokemon = () => {
    const length = searchText.length
    return [...pokemonList].filter((pokemon) => {
      if (pokemon.name.slice(0, length) === searchText) {
        return true
      }
    })
  }

  const searchList = searchText.length > 0 ? searchPokemon() : pokemonList

  if (!pokemonList) return <h1>Loading...</h1>
  return (
    <Card.Group itemsPerRow={6}>
      {searchList.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />
      })}
    </Card.Group>
  )
}

export default PokemonCollection
