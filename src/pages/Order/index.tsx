import {useState} from 'react'
import style from './Order.module.scss'
import {motion, AnimatePresence} from 'framer-motion'

interface OrderProps {
    pizza: {
        base: string
        toppings: string[]
    }
}

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4, //letargia, quanto maior mais letargico
      damping: 8, //quantidade de saltos da elasticidade, quanto maior menos salto
      when: "beforeChildren", //executa antes dos filhos
      staggerChildren: 0.4 //mostra um de cada vez em um intervalo
    }
  }
}

const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

export const Order = ({ pizza }: OrderProps) => {
    const [showTitle, setShowTitle] = useState<boolean>(true)

    setTimeout(()=>{
      setShowTitle(false)
    },4000)

    return (
      <motion.div className={`${style.order} container`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {
            showTitle && (
              <motion.h2
                exit={{ //saída para caso o elemento seja retirado da tela, precisa estar dentro do componente AnimatePresence
                  y: -100,
                  opacity: 0,
                  transition: {
                    duration: 0.8
                  }
                }}
              >
                Thank you for your order :)
              </motion.h2>
          )}
        </AnimatePresence>

        <motion.p
          variants={childVariants}
        >
          You ordered a {pizza.base} pizza with:
        </motion.p>
        <motion.div
          variants={childVariants}
        >
          {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
        </motion.div>
      </motion.div>
    )
  }