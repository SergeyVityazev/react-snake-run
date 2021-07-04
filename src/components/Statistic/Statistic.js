import React from 'react'
import './Statistic.css'

const Statistic = (props) => {
    return (
        <div className="Statistic">
            <p className="Title">Statistic</p>
            {props.isLoss?<p className="Loss">You loss</p>:<p></p>}
            <p>Счет: {props.count}</p>
        </div>
    )
}

export default Statistic;


