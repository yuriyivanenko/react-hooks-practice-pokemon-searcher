import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'

function PokemonForm({ handleTrigger }) {
  const [formData, setFormData] = useState({
    name: '',
    hp: '',
    sprites: {
      front: '',
      back: '',
    },
  })

  const handleChange = ({ target }) => {
    setFormData((prevData) => {
      if (target.name === 'front' || target.name === 'back') {
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

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(handleTrigger)
      .then(
        setFormData({
          name: '',
          hp: '',
          sprites: {
            front: '',
            back: '',
          },
        })
      )
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Name' onChange={handleChange} value={formData.name} placeholder='Name' name='name' />
          <Form.Input fluid label='hp' placeholder='hp' name='hp' value={formData.hp} onChange={handleChange} />
          <Form.Input
            fluid
            label='Front Image URL'
            placeholder='url'
            name='front'
            value={formData.sprites.front}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label='Back Image URL'
            placeholder='url'
            name='back'
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
