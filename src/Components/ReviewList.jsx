import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const ReviewList = () => {
    const [reviewList, setReviewList] = useState([])

    useEffect(() => {
        axios.get("https://be-nc-games-api.herokuapp.com/api/reviews").then((res) => {
            setReviewList(res.data.reviews)
            
        }) 
    })

    return (
        <section>
            
                {reviewList.map((review) => {
                    return (
                        <ol>
                            <p key={review.review_id}><Link to={`/reviews/${review.review_id}`}>{review.title}</Link></p>
                            <img className="reviewImg" src={review.review_img_url} alt={`${review.title}`}></img>
                        </ol>
                        
                    )
                })}
            
        </section>
    )
}

export default ReviewList