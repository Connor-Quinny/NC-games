import axios from "axios";

const gameApi = axios.create({
    baseURL: "https://be-nc-games-api.herokuapp.com/api"
})

export const getReviews = () => {
    return gameApi.get("/reviews").then((res) => {
        return res.data
    })
}

export const getReviewsByCategory = (category) => {
    return gameApi.get("/reviews", {params: {category}})
    .then((res) => {
        return res.data
    })
}

export const getCategories = () => {
    return gameApi.get("/categories").then((res) => {
        return res.data
    })
}

export const getReviewById = (review_id) => {
    return gameApi.get(`/reviews/${review_id}`).then((res) => {
        return res.data
    })
}

export const patchVote = (review_id) => {
    return gameApi.patch(`reviews/${review_id}`, {inc_votes: 1}).then((res) => {
        return res.data
    })
}
