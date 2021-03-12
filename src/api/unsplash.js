import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
     headers: {
        Authorization: 'Client-ID F10iZjBy5js5EuZGx9n0dTbBzU8eBsOP7o7lJ-cq91U'
    }
})

// const unsplash = async () => {
//     return await axios.get('https://api.unsplash.com/', {
//         headers: {
//             Authorization: 'Client-ID F10iZjBy5js5EuZGx9n0dTbBzU8eBsOP7o7lJ-cq91U'
//         }
//     });
// }
