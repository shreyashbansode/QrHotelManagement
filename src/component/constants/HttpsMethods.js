

export const POST = async (url, body, token) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(body)
        })
        await response.json();
    }
    catch (err) {
        console.log(err)
    }
}


export const GET = async (url, token) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token
            },
        })
        await response.json();
    }
    catch (err) {
        console.log(err)
    }
}


export const DELETE = async (url, token) => {
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token
            },
        })
        await response.json();
    }
    catch (err) {
        console.log(err)
    }
}

export const UPDATE = async (url, body, token) => {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(body)
        })
        await response.json();
    }
    catch (err) {
        console.log(err)
    }
}

