import React from 'react'
import './TitleCard.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCard = () => {
    return (
        <div className='title'>
            <h2>Popular On Netflix</h2>
            <div className="card-list">
                {cards_data.map((card, index)=>{
                    return <div className="card" key={index}>
                        <img src={card.image} alt="" />
                        <p>{card.name}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TitleCard