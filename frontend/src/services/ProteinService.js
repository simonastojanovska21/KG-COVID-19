import axios from "../custom-axios/axios"

const ProteinService={
    getProteinAbstract:()=>{
        return axios.get('/proteins')
    },
    getDetailsAboutProtein:(name)=>{
        return axios.get(`/proteins/${name}`)
    }
}
export default ProteinService;