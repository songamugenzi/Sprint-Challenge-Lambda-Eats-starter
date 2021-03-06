import React from 'react'

export default function Order ({details}) {
    if (!details) {
        return <h3>Retrieving your order details...</h3>
    }

    return (
        <div className='order container'>
            <h2>{details.name}</h2>
            <p>Size: {details.size}</p>
            <p>Sauce: {details.sauce}</p>
            {
                !!details.toppings && !!details.toppings.length &&
                <div>
                    Toppings:
                    <ul>
                        {details.toppings.map((like,idx) => <li key={idx}>{like}</li>)}
                    </ul>
                </div>
            }
            <p>Special Instructions: {details.instructions}</p>
        </div>
    )
}