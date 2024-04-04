import { useNavigate } from "react-router-dom"
import DeleteButton from "./DeleteButton"

export default props => {
    const {removeFromDom} = props
    const navigate = useNavigate()
    const sorted = props.authors.slice().sort((a, b) => a.name.localeCompare(b.name));
    return <div>
        <table>
            <thead>
                <tr>
                    <td className="title">Author</td>
                    <td className="title">Actions available</td>
                </tr>
            </thead>
            <tbody>
                {sorted.map((author, index) => {
                    return <tr key={index}>
                        <td className="purple">{author.name}</td>
                        <td>
                            <button onClick={()=> navigate(`/edit/${author._id}`)}>Edit</button>
                            <DeleteButton authorId={author._id} successCallBack={()=> removeFromDom(author._id)} />
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}