import React from 'react'

const Biodatas = ({data : { name, occupation, nickname, portrayed}}) => {
    return (
        <div style={{
            position: "absolute",
            top: '30%',
            left: '20%',
            color: 'lightgrey'
        }}>
            <h2>{name}</h2>
            <h3>{nickname}</h3>
            <p>{occupation[0]}</p>
            <hr/>
            <p>Actor : {portrayed}</p>
        </div>
    )
}

export default Biodatas