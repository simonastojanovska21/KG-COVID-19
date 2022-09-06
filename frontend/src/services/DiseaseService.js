import axios from "../custom-axios/axios"

const DiseaseService={
    getDiseaseAbstract:()=>{
        return axios.get('/disease')
    },
    getDetailsAboutDisease:(name)=>{
        return axios.get(`/disease/${name}`)
    }
}
export default DiseaseService;