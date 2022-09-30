import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getComments } from "../utils/api"

const Comments = () => {

    const [comment, setComment] = useState([])
    const {review_id} = useParams()
    const [error, setError] = useState(false)

    useEffect(() => {
        getComments(review_id).then(({comments}) => {
            setComment(comments)
        }).catch((err) => {
            if (err) {
                setError(true)
            }
        })
    },[review_id])

    

    return (
        <section className="comments">
          <h2>Comments</h2>
          {comment.map((comment) => {
            return (
              <div key={comment.comment_id} className="commentsCard">
                <h3>{comment.author}</h3>
                <p>{comment.body}</p>
              </div>
            );
          })}
        </section>)

}

export default Comments