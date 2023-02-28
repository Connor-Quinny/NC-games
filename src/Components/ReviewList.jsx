import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ReviewCategories from "./ReviewCategories"
import { getReviewsByCategory } from "../utils/api"
import Error from "./Error"
import Loading from "./Loading"

const ReviewList = () => {
    
    const [reviewList, setReviewList] = useState([])
    const {category} = useParams()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        getReviewsByCategory(category)
        .then(({reviews}) => {
            setReviewList(reviews)
            setLoading(false)
        }).catch((err) => {
            if (err) {
                setError(true)
            }
        })
    },[category])

    if (error === true) {
        return Error()
    }
    if (loading === true) {
        return Loading()
    }
  
    return (
        <section className="reviewsList">
                {reviewList.map((review) => {
                    return (
                        <ul key={review.review_id} className="reviewsListUl">
                          <li id="listTitle"> <p className="catTitle"><Link to={`/reviews/${review.review_id}`}>{review.title}</Link></p> </li>
                          <li id="listImage" key={review.review_img_url}>  <img className="reviewImg" src={review.review_img_url} alt={`${review.title}`}></img> </li>
                        </ul>
                    )
                })}
        </section>
    )
}

export default ReviewList