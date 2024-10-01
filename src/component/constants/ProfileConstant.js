

const profile = {
    local: '',
    dev: '',
    uat: '',
    prod: ''
}


export const getActiveProfile = (env) => {
    return profile[env]
}



