import axios from "axios";


const base_url = 'https://rickandmortyapi.com/api/';

export const API = axios.create({
    baseURL: base_url
})