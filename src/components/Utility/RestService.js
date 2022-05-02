import axios from "axios";
import { API_KEY, BASE_URL } from "./Constants";

export const getRandomWord = () => {
    let url = `${BASE_URL}randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=5&api_key=${API_KEY}`;
    return axios.get(url)
        .then(res => res.data);
}