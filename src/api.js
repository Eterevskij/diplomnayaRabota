const baseUrl = 'https://olejjja.herokuapp.com/api';

export const getBook = async (id) => {
    debugger
    return fetch(`${baseUrl}/book/${id ? id : ''}`)
        .then(response => response.json())
}

export const getSortBook = async (sortField) => {
    debugger
    return fetch(`${baseUrl}/book/?ordering=-${sortField}`)
        .then(response => response.json())
}

export const getAuthor = async (id) => {
    debugger
    return fetch(`${baseUrl}/author/${id ? id : ''}`)
        .then(response => response.json())
}

export const sendComment = async (data) => {
    debugger
    return fetch(`${baseUrl}/comment/`, {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)
    })
}