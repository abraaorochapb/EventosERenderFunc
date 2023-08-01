import React from 'react'

const Events = () => {

  const eventoClick = () => {
    console.log('click')
  }

  const renderAlgo = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>
    } else {
        return <h1>Renderizando outra coisa</h1>
    }
  }

  return(
    <div>
      <div>
        <button onClick={eventoClick}>
          Click
        </button>
      </div>

      <div>
        <button onClick={() =>{
          console.log('click2')
        }}>
          click2
        </button>
      </div>

      {renderAlgo(true)}
      {renderAlgo(false)}
    </div>
  )
}

export default Events