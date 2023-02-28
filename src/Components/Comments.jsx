import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getComments } from "../utils/api"
import CommentAdder from "./CommentAdder"
import Navbar from "./Navbar"
import { postComment } from "../utils/api"


const Comments = () => {

    const [comment, setComment] = useState([])
    const {review_id} = useParams()
    const [error, setError] = useState(false)
    const [newComment, setNewComment] = useState("")

    useEffect(() => {
        getComments(review_id).then(({comments}) => {
            setComment(comments)
        }).catch((err) => {
            if (err) {
                setError(true)
            }
        })
    },[newComment])

    if (error === true) {
        alert("comments failed to load")
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(newComment)
      postComment(review_id, newComment).then(({ comment }) => {setComment((currentComments) => {
            return [comment, ...currentComments];
          });
          setNewComment("");
        });
      }

    return (
      <section className="comments">
          <h2>Comments</h2>
          <div className="postComment">
              <form onSubmit={handleSubmit}>
              <label htmlFor="newComment">Comment here:</label>
              <textarea type="text" name="body" id="newComments21" placeholder="Write your comment here..." value={newComment}onChange={(e) => setNewComment(e.target.value)}
              >Hi</textarea>
              <button>Post a comment</button>
            </form> 
          </div>
          {comment.map((comment) => {
            return (
              <div key={comment.comment_id} className="commentsCard">
                <h3>User: {comment.author}</h3>
                <p>{comment.body}</p>
              </div>
            );
          })}
        </section>)

}

export default Comments