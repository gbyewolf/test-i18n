import axios from "../lib/axios.esm.js";

export const b = (lang) => axios.get(`../data/1/${lang}.json`);