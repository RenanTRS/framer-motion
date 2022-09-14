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

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {delay: 1.5, duration: 1.5}
  },
  exit: {
    x: '-100vw',
    transition: {ease: 'easeInOut'}
  }
}

export const Home = () => {
  return (
    <motion.div className={`${style.home} container`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
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