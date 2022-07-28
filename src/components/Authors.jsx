import React from 'react'

const Authors = ({randomphrasesauthor,randomcolors,getRamdonAll}) => {
    
    let sign='>'
    const backgroundcolors={
        backgroundColor:randomcolors
      }
      const objectcolors={
        color:randomcolors
      }
    return (
    <div className='container'>
        <div className='card__author' style={objectcolors}> {randomphrasesauthor}</div>
        <div><button className='card__btn' onClick={getRamdonAll} style={backgroundcolors}>{sign}</button></div>
    </div>
  )
}

export default Authors