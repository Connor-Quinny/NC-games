import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import ReviewCategories from "./ReviewCategories"

const ReviewList = () => {
    
    const [reviewList, setReviewList] = useState([])
    const {category} = useParams()
    console.log(category)
  
    
    useEffect(() => {
        if(category) {
        axios.get(`https://be-nc-games-api.herokuapp.com/api/reviews?category=${category}`).then((res) => {
            setReviewList(res.data.reviews)
        })} else {
            axios.get(`https://be-nc-games-api.herokuapp.com/api/reviews`).then((res) => {
                setReviewList(res.data.reviews)
            })
        }
    },[category])
  
  
    return (
        <section>
            <ReviewCategories />
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