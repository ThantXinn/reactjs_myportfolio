export const fadeInLeftVariants = {
    hidden: {
        x: -50,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,

        transition: {
            type: 'spring',
            duration: 1.5,
            delay: 1.2,
        }
    }
}
export const fadeInRightVariants = {
    hidden: {
        x: 50,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,

        transition: {
            type: 'spring',
            duration: 1.5,
            delay: 1.2,
        }
    }
}

export const easeInVariants = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,

        transition: {
            type: 'easeIn',
            duration: 1,
            delay:0.5,
        }
    }
}