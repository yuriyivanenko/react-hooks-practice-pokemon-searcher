import React, { useEffect, useState } from "react"
import PokemonCard from "./PokemonCard"
import { Card } from "semantic-ui-react"
import { db } from "./firebaseConfig"
import { collection, getDocs } from "firebase/firestore"

function PokemonCollection({ searchText, fetchTrigger, userId }) {
  const [pokemonList, setPokemonList] = useState(null)

  const searchPokemon = () => {
    const length = searchText.length
    return [...pokemonList].filter((pokemon) => {
      if (pokemon.name.slice(0, length) === searchText) {
        return true
      }
    })
  }

  // FIREBASE CODE BELOW
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, `users/${userId}/pokemon`))
      const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setPokemonList(items)
    }
    fetchData()
  }, [fetchTrigger])

  const searchList = searchText.length > 0 ? searchPokemon() : pokemonList
  const sortedList = pokemonList ? [...searchList].sort((a, b) => a.id - b.id) : null

  if (!pokemonList) return <h1>Loading...</h1>
  return (
    <Card.Group itemsPerRow={6}>
      {sortedList.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />
      })}
    </Card.Group>
  )
}

export default PokemonCollection
