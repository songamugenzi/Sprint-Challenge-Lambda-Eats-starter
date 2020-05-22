import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './Home'
import OrderForm from './OrderForm'
import Order from './Order'
import axios from 'axios'
import formSchema from '../validation/formSchema'
import * as yup from 'yup'

const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  toppings: {
    pepperoni: false,
    sausage: false,
    pineapple: false,
    onions: false,
  },
  instructions: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
  instructions: '',
}

const initialOrders = []
const initialDisabled = true

function App() {
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        // console.log(res.data)
        setOrders([res.data], ...orders)
      })
      .catch(err => {
        debugger
      })
      .setFormValues(initialFormValues)
  }

  const onInputchange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckboxChange = evt => {
    const { name } = evt.target
    const { checked } = evt.target

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      }
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: Object.keys(formValues.toppings)
        .filter(topping => formValues.toppings[topping] === true),
      instructions: formValues.instructions,
    }
    postNewOrder(newOrder)
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <h1>Lambda Eats</h1>
          <div className='nav-links'>
            <Link to='/'>Home</Link>
            <Link to='/order-form'>Order</Link>
          </div>
        </nav>
      </header>
      <Switch>
        <Route path='/order-form'>
          <OrderForm 
            values={formValues}
            onInputchange={onInputchange}
            onSubmit={onSubmit}
            disabled={disabled}
            errors={formErrors}
            onCheckboxChange={onCheckboxChange}
          />
        </Route>

        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>

      {
        orders.map(order => {
          return (
            <Order key={order.id} details={order} />
          )
        })
      }
    </div>
  );
}

export default App;
