import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getReviewById, patchVote } from "../utils/api"
import CommentAdder from "./CommentAdder"
import Comments from "./Comments"
import Error from "./Error"
import Loading from "./Loading"

const ReviewCard = () => {
    const [review, setReview] = useState({})
    const {review_id} = useParams()
    const [vote, setVotes] = useState(review.votes)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getReviewById(review_id).then(({review}) => {
            setReview(review)
            setVotes(review.votes)
            setLoading(false)
        }).catch((err) => {
            if (err) {
                setError(true)
            }
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
    if (error === true) {
        return Error()
    }

    if (loading === true) {
        return Loading()
    }

    return (
    <header className="revCard">
        <h2>{review.title}</h2>
        <img className="reviewImg" src={review.review_img_url} alt={`${review.title}`}></img>
        <div className="Info">
        <p>Owner: {review.owner}</p>
        <p>Category: {review.category}</p>
        <p>Designer: {review.designer}</p>
        </div>
        <p className="paragraph">{review.review_body}</p>
        <button onClick={() => addVote()}>{vote} 👍</button>
        <Comments className="comments"/>
    </header>)
}

export default ReviewCard