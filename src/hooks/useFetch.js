import { useState } from "react"
import axios from 'axios'

const useFetch = (baseUrl, close) => {

    const [infoApi, setinfoApi] = useState()
    // Read
    const getApi = (path) => {
        const url = `${baseUrl}${path}/`
        axios.get(url)
            .then(res => setinfoApi(res.data))
            .catch(err => console.log(err))
    }
    // Create
    const postApi = (path, data) => {
        const url = `${baseUrl}${path}/`
        axios.post(url, data)
            .then(res => {
                console.log(res.data);
                setinfoApi([...infoApi, res.data])
                close(true)
            })
            .catch(err => console.log(err))
    }
    // Delete
    const deleteApi = (path, id) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.delete(url)
            .then(res => {
                console.log(res.data);
                setinfoApi(infoApi.filter(e => e.id != id))
            })
            .catch(err => console.log(err))
    }
    // Update
    const updateApi = (path, data, id) => {
        const url = `${baseUrl}${path}/${id}/`
        console.log(id);
        axios.put(url, data)
            .then(res => {
                console.log(res.data)
                setinfoApi(infoApi.map(e => e.id === id ? res.data : e))
                close(true)
            })
            .catch(err => console.log(err))
    }
    return  [infoApi, getApi, postApi, deleteApi, updateApi] 
}


export default useFetch