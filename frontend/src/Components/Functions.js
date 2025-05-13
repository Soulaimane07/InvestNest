import react, {useEffect, useState} from "react"
import axios from "axios"

export const BackendURL = "http://localhost:8080/api";





export const GetProperty = (id) => {
    const [data, setData] = useState(null)


    useEffect(()=> {
        axios.get(`${BackendURL}/properties/${id}`)
            .then(res=> {
                setData(res.data)
            })
            .catch(err => {
                console.error(err);
            })
    }, [])

    return data
}





export const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
};