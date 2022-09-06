import axios from "../custom-axios/axios";

const CategoriesService={
    getAllCategories : ()=>{
        return axios.get('/categories')
    }
}

export default CategoriesService;