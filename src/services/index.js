import axios from 'axios';

const baseUrl = 'https://ecomerce-master.herokuapp.com/api/v1';


const getData = async (_id='') => {
    const setName = _id ? '/item/'+ _id : '/item'
   
    const req = await axios.get(baseUrl + setName)
    return req

}
// const getProducts = async () => {
//     // el await espera
//     const req = await axios.get(baseUrl + '/item')
//     const res = req
//     return res
// }

// const getProduct = async (_id) => {
//     // el await espera
//     const req = await axios.get(baseUrl + '/item/'+ _id)
//     const res = req
//     return res
// }

export { getData}