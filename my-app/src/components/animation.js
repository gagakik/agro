import React from 'react';
import {motion} from 'framer-motion'

const animations = {
    initial: {optcaly: 0, x: 100},
    animate: {optcaly: 1, x: 0},
    exit: {optcaly: 0, x: -100},
}

const Animation = ({children}) => {
    return (
        <motion.div variants={animations} 
        initial="initial" 
        animate="animate" 
        exit="exit"
        > 
            {children}
        </motion.div>

    );
}

export default Animation;