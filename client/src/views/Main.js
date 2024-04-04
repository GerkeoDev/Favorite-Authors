import { Link } from "react-router-dom"
import AuthorList from "../components/AuthorList"
import { useEffect, useState } from "react"
import axios from 'axios'

export default () => {
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    useEffect(()=> {
        axios.get("http://localhost:8000/api/authors")
            .then(authors => {
                setData(authors.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])
    const removeFromDom = id => {
        setData(data.filter(author => author._id !== id))
    } 
    return <div>
        <h1>Favorite Authors</h1>
        <Link to="/new">Add an author</Link>
        <p className="title">We have quotes by:</p>
        {loaded && <AuthorList authors={data} removeFromDom={removeFromDom} />}
    </div>
}