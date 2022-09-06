import axios from "axios";

const instance=axios.create({
    baseURL : 'http://localhost:8080/api',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})

// instance.interceptors.response.use(function (response) {
//     return response;
// }, function (error) {
//     console.log(error.response.data)
//     // if(error.response.data.message === "molecular activity with that name")
//     // {
//     //     console.log("works")
//     // }
//
//
//
//     return Promise.reject(error);
// });


export default instance;