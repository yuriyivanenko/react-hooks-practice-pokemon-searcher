import React, { useState } from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

function PokemonPage() {
  const [searchText, setSearchText] = useState('')
  const [fetchTrigger, setFetchTrigger] = useState(false)

  const handleSearchText = (text) => setSearchText(text)
  const handleTrigger = () => setFetchTrigger(!fetchTrigger)

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleTrigger={handleTrigger} />
      <br />
      <Search handleSearchText={handleSearchText} />
      <br />
      <PokemonCollection searchText={searchText} fetchTrigger={fetchTrigger} />
    </Container>
  )
}

export default PokemonPage
