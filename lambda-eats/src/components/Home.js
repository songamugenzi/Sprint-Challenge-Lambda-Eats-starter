import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {
    const history = useHistory()

    const routeToOrder = () => {
        history.push('/order-form')
    }

    return (
        <div className='home-wrapper'>
            <img
                className='home-image'
                src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                alt='Delicious Pizza!'
            />
            <button
                onClick={routeToOrder}
                className='md-button shop-button'
            >
                Order now!
          </button>
        </div>
    )
}