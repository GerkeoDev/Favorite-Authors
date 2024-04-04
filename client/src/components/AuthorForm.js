
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default props => {
    const {initialData, onSubmitProp} = props
    const [author, setAuthor] = useState(initialData)
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        onSubmitProp(author)
    }
    const handleChange = e => {
        setAuthor({name: e.target.value})
    }
    return <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
        </div>
        <div>
            <input type="text" value={author.name} onChange={handleChange}/>
        </div>
        <div>
            <button onClick={()=>navigate("/")}>Cancel</button>
            <input type="submit" />
        </div>
    </form>
}