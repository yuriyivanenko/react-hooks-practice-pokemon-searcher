import React, { useState } from "react"
import { Form } from "semantic-ui-react"
import { db } from "./firebaseConfig"
import { collection, addDoc } from "firebase/firestore"

function PokemonForm({ handleTrigger, userId }) {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: "",
    },
  })

  const handleChange = ({ target }) => {
    setFormData((prevData) => {
      if (target.name === "front" || target.name === "back") {
        return {
          ...prevData,
          sprites: {
            ...prevData.sprites,
            [target.name]: target.value,
          },
        }
      } else {
        return {
          ...prevData,
          [target.name]: target.value,
        }
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, `users/${userId}/pokemon`), formData)
      setFormData({
        name: "",
        hp: "",
        sprites: {
          front: "",
          back: "",
        },
      })
      handleTrigger()
    } catch (e) {
      console.error("Error adding document: ", e)
    }
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" onChange={handleChange} value={formData.name} placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formData.hp} onChange={handleChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={formData.sprites.front}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={formData.sprites.back}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
}

export default PokemonForm
