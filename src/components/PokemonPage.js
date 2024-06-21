import React, { useState } from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

function PokemonPage() {
  const [searchText, setSearchText] = useState('')
  const handleSearchText = (text) => setSearchText(text)

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search handleSearchText={handleSearchText} />
      <br />
      <PokemonCollection searchText={searchText} />
    </Container>
  )
}

export default PokemonPage
