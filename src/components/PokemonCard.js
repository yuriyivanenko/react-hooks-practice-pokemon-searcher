import React, { useState } from 'react'
import { Card } from 'semantic-ui-react'

function PokemonCard({ pokemon: { name, hp, sprites } }) {
  const [isFront, setIsFront] = useState(true)
  const handleToggleSprite = () => setIsFront(!isFront)
  return (
    <Card>
      <div>
        <div className='image' style={{ cursor: 'pointer' }} onClick={handleToggleSprite}>
          <img alt='oh no!' src={isFront ? sprites.front : sprites.back} />
        </div>
        <div className='content'>
          <div className='header'>{name}</div>
        </div>
        <div className='extra content'>
          <span>
            <i className='icon heartbeat red' />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  )
}

export default PokemonCard
