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
    >
      <motion.h2
        animate={{
          
        }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          animate={{
            
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}