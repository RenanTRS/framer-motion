import { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import { Header } from "./components/Header";
import { Base } from "./pages/Base";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";
import { Toppings } from "./pages/Toppings";

type PizzaType = {
  base: string
  toppings: string[]
}

function App() {

    const [pizza, setPizza] = useState<PizzaType>({ base: "", toppings: [] });

    const addBase = (base: string) => {
      setPizza({ ...pizza, base })
    }
    
    const addTopping = (topping: string) => {
      console.log(topping)
      let newToppings;
      if(!pizza.toppings.includes(topping)){
        newToppings = [...pizza.toppings, topping];
      } else {
        newToppings = pizza.toppings.filter(item => item !== topping);
      }
      setPizza({ ...pizza, toppings: newToppings });
    }
  
    return (
      <>
        <Header />
        <Routes>
          <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />}/>
          <Route path="/toppings" element={<Toppings addTopping={addTopping} pizza={pizza} />} />
          <Route path="/order" element={<Order pizza={pizza} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    )
}

export default App
