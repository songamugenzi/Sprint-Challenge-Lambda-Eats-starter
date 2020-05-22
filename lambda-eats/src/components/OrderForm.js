import React from 'react'

export default function OrderForm(props) {
    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
        onCheckboxChange,
    } = props

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Place your order</h2>
                <button disabled={disabled}>submit</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.sauce}</div>
                    <div>{errors.instructions}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h4>Order information</h4>

                <label>Name&nbsp;
                    <input
                        value={values.name}
                        onChange={onInputChange}
                        name='name'
                        type='text'
                    />
                </label>

                <label>Size
              <select
                        onChange={onInputChange}
                        value={values.size}
                        name='size'
                    >
                        <option value=''>- Select your pizza size -</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                        <option value='Xtra Large'>Xtra Large</option>
                    </select>
                </label>

                <label>Original Red
              <input
                        type='radio'
                        name='sauce'
                        value='Original Red'
                        onChange={onInputChange}
                    />
                </label>

                <label>Garlic Ranch
              <input
                        type='radio'
                        name='sauce'
                        value='Garlic Ranch'
                        onChange={onInputChange}
                    />
                </label>

                <label>BBQ Sauce
              <input
                        type='radio'
                        name='sauce'
                        value='BBQ Sauce'
                        onChange={onInputChange}
                    />
                </label>

                <label>Spinach Alfredo
              <input
                        type='radio'
                        name='sauce'
                        value='Spinach Alfredo'
                        onChange={onInputChange}
                    />
                </label>
            </div>

            <div className='form-group checkboxes'>
                <h4>Toppings</h4>

                <label>Pepperoni
              <input
                        type='checkbox'
                        name='pepperoni'
                        checked={values.toppings.pepperoni}
                        onChange={onCheckboxChange}
                    />
                </label>

                <label>Sausage
              <input
                        type='checkbox'
                        name='sausage'
                        checked={values.toppings.sausage}
                        onChange={onCheckboxChange}
                    />
                </label>

                <label>Pineapple
              <input
                        type='checkbox'
                        name='pineapple'
                        checked={values.toppings.pineapple}
                        onChange={onCheckboxChange}
                    />
                </label>

                <label>Onions
              <input
                        type='checkbox'
                        name='onions'
                        checked={values.toppings.onions}
                        onChange={onCheckboxChange}
                    />
                </label>
            </div>

            <div className='order-instructions container'>
                <h4>Order information</h4>

                <label>Special instructions&nbsp;
                    <input
                        value={values.instructions}
                        onChange={onInputChange}
                        name='instructions'
                        type='textarea'
                    />
                </label>
            </div>
        </form>
    )
}