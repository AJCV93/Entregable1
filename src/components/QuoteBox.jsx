import React from 'react'

const QuoteBox = ({randomphrases,randomcolors}) => {

const backgroundcolors={
  backgroundColor:randomcolors
}

const objectcolors={
  color:randomcolors
}

  return (
    <div className='card__phrases' style={objectcolors}><i className='fa-solid fa-quote-left' style={objectcolors}></i>    {randomphrases}</div>
    
      
    )
}

export default QuoteBox