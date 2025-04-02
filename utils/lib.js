import axios from 'axios'
const url = '/api/all'
export async function getAllProducts() {
    let res = await axios.get(url)
    return res.data;
}
export async function getSpecificProduct(slug){
    let URL = `${url}/${slug}`;
    let res = await axios.get(URL);
    return res.data;
}
export async function getRelatedProducts(brand){
    let URL = `${url}/brands/${brand}`;
    let res = await axios.get(URL);
    return res.data;
}
export async function getAllbrands(){
    let URL = `${url}/brands`;
    let res = await axios.get(URL);
    return res.data;
}
