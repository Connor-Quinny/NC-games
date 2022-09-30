import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ReviewCategories from "./ReviewCategories"
import { getReviewsByCategory } from "../utils/api"

const ReviewList = () => {
    
    const [reviewList, setReviewList] = useState([])
    const {category} = useParams()
    
    useEffect(() => {
        getReviewsByCategory(category)
        .then(({reviews}) => {
            setReviewList(reviews)
        })
    },[category])
  
  
    return (
        <section>
            <ReviewCategories />
                {reviewList.map((review) => {
                    return (
                        <ul key={review.review_id} className="revList">
                          <li> <p><Link to={`/reviews/${review.review_id}`}>{review.title}</Link></p> </li>
                          <li key={review.review_img_url}>  <img className="reviewImg" src={review.review_img_url} alt={`${review.title}`}></img> </li>
                        </ul>
                    )
                })}
            
        </section>
    )
}

export default ReviewList