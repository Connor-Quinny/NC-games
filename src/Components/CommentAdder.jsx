import { useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { postComment } from "../utils/api"

const CommentAdder = ({setComment}) => {
	const { review_id } = useParams()
	// console.log(review_id)
    const [newComment, setNewComment] = useState("")

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
			<form onSubmit={handleSubmit}>
				<label htmlFor="newComment">Comment here:</label>
				<textarea type="text" name="body" id="newComments21" placeholder="Write your comment here..." value={newComment}onChange={(e) => setNewComment(e.target.value)}
				>Hi</textarea>
				<button>Post a comment</button>
			</form> 
		)
}

export default CommentAdder