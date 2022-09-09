import { Link } from 'react-router-dom';
import style from './Home.module.scss'
import {motion} from 'framer-motion'

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
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255, 255, 255)",
            boxShadow: "0px 0px 8px rgb(255, 255, 255)"
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}