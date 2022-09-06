import axios from "../custom-axios/axios"

const GeneService={
    getGeneAbstract:()=>{
        return axios.get('/gene')
    },
    getDetailsAboutGene:(name)=>{
        return axios.get(`/gene/${name}`)
    }
}
export default GeneService;