import axios from "../custom-axios/axios"

const ChemicalSubstanceService={
    getChemicalSubstanceAbstract:()=>{
        return axios.get('/chemicalSubstances')
    },
    getDetailsAboutChemicalSubstance: (name)=>{
        return axios.get(`/chemicalSubstances/${name}`)
    }
}
export default ChemicalSubstanceService