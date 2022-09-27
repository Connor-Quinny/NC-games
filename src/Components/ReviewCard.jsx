import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ReviewCard = () => {
    const [review, setReview] = useState({})
    const {review_id} = useParams()

    useEffect(() => {
        axios.get(`https://be-nc-games-api.herokuapp.com/api/reviews/${review_id}`).then((res) => {
            setReview(res.data.review)
        })
    }, [review_id])

    return (
    <header>
        <h2>{review.title}</h2>
        <img className="reviewImg" src={review.review_img_url} alt={`${review.title}`}></img>
        <p>Owner: {review.owner}</p>
        <p>Category: {review.category}</p>
        <p>Designer: {review.designer}</p>
        <p>{review.review_body}</p>
        <button>{review.votes}</button>
    </header>)
}

export default ReviewCard