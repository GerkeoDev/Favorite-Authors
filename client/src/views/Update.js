import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import AuthorForm from "../components/AuthorForm"

export default () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [author, setAuthor] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(null)
    const [notFound, setNotFound] = useState(null)
    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                setAuthor({name: res.data.name})
                setLoaded(true)
            })
            .catch(err => {
                console.log(err.message)
                setNotFound(err.message)
            })
        
    }, [id])
    const updateAuthor = author => {
        axios.put(`http://localhost:8000/api/author/${id}`, author)
            .then(res => navigate("/"))
            .catch(err => {
                console.log(err)
                setError(err.response.data.errors.name.message)
            })
    }
    return loaded?<div>
        <h1>Favorite Authors</h1>
        <Link to="/">Home</Link>
        <p className="title">Edit this author:</p>
        {error && <>
            <p style={{color: "red"}}>{error}</p>
        </>}
        <AuthorForm onSubmitProp={updateAuthor} initialData={author}/>
    </div>
    : <div>
        {notFound && 
            <>
                <h1>We're sorry</h1>
                <p>We couldn't find the author you're looking for.</p>
                <p>Do you want to add this author to our database?"</p>
                <button onClick={()=> navigate("/")}>Cancel</button>
                <button onClick={()=> navigate("/new")}>Accept</button>
            </>
        }
    </div>
    
}