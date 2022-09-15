import {Link} from 'react-router-dom'
import {motion, AnimatePresence} from 'framer-motion'
import style from './Modal.module.scss'

interface ModalProps {
    showModal: boolean
}

const backdrop = {
    hidden: {opacity: 0},
    visible: {opacity: 1}
}

const modal = {
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    visible: {
        y: '200px',
        opacity: 1,
        transition: {delay: 0.5}
    }
}

export const Modal = ({showModal}: ModalProps) => {
    return (
        <AnimatePresence>
            {showModal && (
                <motion.div className='backdrop'
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div className={style.modal}
                        variants={modal}
                    >
                        <p>Want to make another pizza?</p>
                        <Link to="/">
                            <button>Start Again</button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}