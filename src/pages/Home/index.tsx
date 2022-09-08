import { Link } from 'react-router-dom';
import style from './Home.module.scss'
import {motion} from 'framer-motion'

export const Home = () => {
  return (
    <motion.div className={`${style.home} container`}
      animate={{
        rotateZ: 180,
        opacity: 0.2,
        marginTop: 200
      }}
    >
      <motion.h2
        animate={{
          fontSize: '50px',
          color: '#ff2994',
          x: 100,
          y: -100
        }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          animate={{
            scale: 1.5
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}