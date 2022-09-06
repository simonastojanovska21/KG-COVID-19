import axios from "../custom-axios/axios"

const MolecularActivityService={
    getMolecularActivityAbstract:()=>{
        return axios.get('/molecularActivity')
    },
    getDetailsAboutMolecularActivity: (name)=>{
        return axios.get(`/molecularActivity/${name}`)
    }
}

export default MolecularActivityService