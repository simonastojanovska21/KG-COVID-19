import axios from "../custom-axios/axios"

const PublicationService={
    getAllPublicationsByCategory: ()=>{
        return axios.get('/publications')
    },

    addPublicationSuggestion: (name, authorsNames, url, description)=>{
        return axios.post('/publications/addSuggestion',{
            "name":name,
            "authorsNames":authorsNames,
            "url":url,
            "description":description
        })
    }
}

export default PublicationService;