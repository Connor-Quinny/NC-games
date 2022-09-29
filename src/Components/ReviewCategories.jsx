import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import { getCategories } from "../utils/api"

const ReviewCategories = () => {

    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        getCategories()
        .then(({categories}) => {
            setCategoryList(categories)
        }).catch((err) => {
            if (err)
            return alert("Something went wrong")
        })
    },[])

    return (
        <section className="revCat">
             {categoryList.map((category) => { 
                    return (<ul key={category.slug}><Link to={`/reviews/categories/${category.slug}`}><p className="category" >{category.slug}</p></Link></ul>) 
                })}
        </section>
    )
}

export default ReviewCategories