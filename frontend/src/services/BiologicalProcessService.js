import axios from "../custom-axios/axios"

const BiologicalProcessService={
    getBiologicalProcessAbstract:()=>{
        return axios.get('/biologicalProcess')
    },
    getDetailsAboutBiologicalProcess:(name)=>{
        return axios.get(`/biologicalProcess/${name}`)
    }
}
export default BiologicalProcessService;