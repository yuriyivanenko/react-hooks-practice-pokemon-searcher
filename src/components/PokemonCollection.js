import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

function PokemonCollection() {
  const [pokemonList, setPokemonList] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then((res) => res.json())
      .then((data) => setPokemonList(data))
  }, [])

  if (!pokemonList) return <h1>Loading...</h1>
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonList.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />
      })}
    </Card.Group>
  )
}

export default PokemonCollection
