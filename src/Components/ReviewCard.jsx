import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ReviewCard = () => {
    const [review, setReview] = useState({})
    const {review_id} = useParams()
    const [vote, setVotes] = useState(0)

    useEffect(() => {
        axios.get(`https://be-nc-games-api.herokuapp.com/api/reviews/${review_id}`).then((res) => {
            setReview(res.data.review)
            setVotes(res.data.review.votes)
        })
    }, [review_id])
    
    const addVote = () => {
        const reqBody = {inc_votes: 1}
        axios.patch(`https://be-nc-games-api.herokuapp.com/api/reviews/${review_id}`, reqBody).then(({data}) => {
            setVotes(data.review.votes)
        }).catch((err) => {
            if (err) {
               return alert("Error: Bad request")
            }
        })
    }

    return (
    <header>
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