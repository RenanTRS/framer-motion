import {motion} from 'framer-motion'
import style from './Loader.module.scss'

const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    }
}

export const Loader = () => {
    return (
        <>
            <motion.div className={style.loader}
                variants={loaderVariants}
                animate="animationOne"
            >

            </motion.div>
        </>
    )
}