import axios from 'axios'

export function fn(){
    return axios.get('./data.json')
}