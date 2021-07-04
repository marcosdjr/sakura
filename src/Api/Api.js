export const Api ={

    baseUrl: 'https://blue-backend-modulo4front.herokuapp.com',

    authorization: 'marcosdominguesss@gmail.com',

    readAllUrl: () => Api.baseUrl + '/',
    readSingleUrl: id => Api.baseUrl + '/' + id,
    createUrl: () => Api.baseUrl + '/',
    deleteAllUrl: () => Api.baseUrl + '/',
    updateUrl: id => Api.baseUrl + '/' + id,
    deleteUrl: id => Api.baseUrl + '/' + id,

    buildApiGetRequest: url => {
        return fetch(url, {
            method: 'GET',
            headers: new Headers({
                Authorization: Api.authorization,
            })
        })
    },

    buildApiPostRequest: (url, body) => {
        return fetch(url, {
            method: 'POST',
            headers: new Headers({
                Authorization: Api.authorization,
                'Content-type': 'application/json'
            }),
            body: JSON.stringify(body)
        })

    },

    buildApiDeleteRequest: url => {
        return fetch(url, {
            method: 'DELETE',
            headers: new Headers({
                Authorization: Api.authorization,
            })
        })
    },

    buildApiPutRequest: (url, body) => {
        return fetch(url, {
            method: 'PUT',
            //a cada requisição, o Header pode mudar, por isto precisa instanciar novamente o objeto (new Header)
            headers: new Headers({
                Authorization: Api.authorization,
                //por padrão, usamos esse atributo do Headers content-type pra falar que vamos mandar um json 
                'Content-type': 'application/json'
            }),
            //stringify transforma um JSON numa linha só
            body: JSON.stringify(body)
        })
    },


}