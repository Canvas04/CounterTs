import axios from 'axios'

export function getArticles () {
    return axios.request({
        method: 'get',
        url: 'https://conduit.productionready.io/api/articles'
    })
}