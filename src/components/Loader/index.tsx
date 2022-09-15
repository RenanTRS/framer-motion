import {motion, useCycle} from 'framer-motion'
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
    },
    animationTwo: {
        x: 0,
        y: [0, -40],
        transition: {
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    }
}

export const Loader = () => {

    const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo') //Espécie de state toggle
    return (
        <>
            <motion.div className={style.loader}
                variants={loaderVariants}
                animate={animation}
            >
            </motion.div>
            <div
                onClick={()=>cycleAnimation()}
            >
                Cycle Loader
            </div>
        </>
    )
}