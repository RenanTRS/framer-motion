import style from './Order.module.scss'

interface OrderProps {
    pizza: {
        base: string
        toppings: string[]
    }
}

export const Order = ({ pizza }: OrderProps) => {
    return (
      <div className={`${style.order} container`}>
        <h2>Thank you for your order :)</h2>
        <p>You ordered a {pizza.base} pizza with:</p>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </div>
    )
  }