import { API } from "./axios";



export async function getAllCharacters() {
    const response = await API.get(`character`);
    return response
}

export async function getCharactersFilter(name) {
    const response = await API.get(`character/?name=${name}`)
    return response
}

export async function getCharacterDetails(id) {
    const response = await API.get(`character/${id}`)
    return response
}