import { useState } from "react";
import {Routes, Route, useLocation} from 'react-router-dom'
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { Base } from "./pages/Base";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";
import { Toppings } from "./pages/Toppings";
import {AnimatePresence} from 'framer-motion'

type PizzaType = {
  base: string
  toppings: string[]
}

function App() {
    const location = useLocation()
    const [showModal, setShowModal] = useState<boolean>(false)
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
        <Modal showModal={showModal} />
        <AnimatePresence onExitComplete={() => setShowModal(false)}>
          <Routes location={location} key={location.key}>
            <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />}/>
            <Route path="/toppings" element={<Toppings addTopping={addTopping} pizza={pizza} />} />
            <Route path="/order" element={<Order pizza={pizza} setShowModal={setShowModal} />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </>
    )
}

export default App
