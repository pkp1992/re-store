const compose = (...funs) => (component) => {
    return funs.reduceRight((com, f) => f(com), component)
}

export default compose;