import React, { useContext, useEffect, useState } from "react"
import { Container } from "semantic-ui-react"
import PokemonCollection from "./PokemonCollection"
import PokemonForm from "./PokemonForm"
import Search from "./Search"
import Signup from "./SignUp"
import Login from "./Login"
import { UserContext } from "../contexts/UserContext"

function PokemonPage() {
  const { user, setUser } = useContext(UserContext)
  const [searchText, setSearchText] = useState("")
  const [fetchTrigger, setFetchTrigger] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  const handleSearchText = (text) => setSearchText(text)
  const handleTrigger = () => setFetchTrigger(!fetchTrigger)

  return (
    <Container>
      <button style={{ marginBottom: "20px" }} onClick={() => setShowSignUp(!showSignUp)}>
        Sign Up Form
      </button>
      {showSignUp && <Signup setUser={setUser} />}
      <Login setUser={setUser} />
      <h1>Pokemon Searcher</h1>
      {user && <h3>Welcome {user.email}</h3>}
      <br />
      {user && <PokemonForm handleTrigger={handleTrigger} userId={user.uid} />}
      <br />
      <Search handleSearchText={handleSearchText} />
      <br />
      {!user ? (
        <h3>Sign in or sign up to get started with your Pokemon collection</h3>
      ) : (
        <PokemonCollection searchText={searchText} fetchTrigger={fetchTrigger} userId={user.uid} />
      )}
    </Container>
  )
}

export default PokemonPage
