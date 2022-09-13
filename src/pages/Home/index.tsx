import { Link } from 'react-router-dom';
import style from './Home.module.scss'
import {motion} from 'framer-motion'

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      //yoyo: 10 //vai e volta na transição
      yoyo: Infinity,
      duration: 0.3
    }
  }
}

export const Home = () => {
  return (
    <motion.div className={`${style.home} container`}
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1,
      }}
      transition={{delay: 1.5, duration: 1.5}}
    >
      <motion.h2
        animate={{
          
        }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}