import axios from "axios"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom"

const ReviewCategories = () => {

    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        axios.get("https://be-nc-games-api.herokuapp.com/api/categories").then((res) => {
            setCategoryList(res.data.categories)
            console.log(categoryList, "<<")
        }) 
    },[])

    return (
        <section>
             {categoryList.map((category) => { 
                    return <Link to={`/reviews/categories/${category.slug}`}><p className="category" >{category.slug}</p></Link> 
                })}
        </section>
    )
}

export default ReviewCategories