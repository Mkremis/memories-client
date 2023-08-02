import axios from "axios";
const url = 'https://mkremis-ubiquitous-winner-gvgwrqvr667hw4gg-5000.preview.app.github.dev/posts'
export const fetchPosts =()=>axios.get(url)