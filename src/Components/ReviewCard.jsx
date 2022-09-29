import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getReviewById, patchVote } from "../utils/api"

const ReviewCard = () => {
    const [review, setReview] = useState({})
    const {review_id} = useParams()
    const [vote, setVotes] = useState(review.votes)

    useEffect(() => {
        getReviewById(review_id).then(({review}) => {
            setReview(review)
            setVotes(review.votes)
        })
    }, [review_id])
    
    const addVote = () => {
        setVotes(vote + 1)
        patchVote(review_id).catch((err) => {
            if (err) {
                setVotes(vote -1)
               return alert("Error: Bad Request")
            }
        })
    }

    return (
    <header class="revCard">
        <h2>{review.title}</h2>
        <img className="reviewImg" src={review.review_img_url} alt={`${review.title}`}></img>
        <p>Owner: {review.owner}</p>
        <p>Category: {review.category}</p>
        <p>Designer: {review.designer}</p>
        <p>{review.review_body}</p>
        <button onClick={() => addVote()}>{vote} 👍</button>
    </header>)
}

export default ReviewCard