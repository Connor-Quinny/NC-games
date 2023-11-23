import axios from "axios";

const gameApi = axios.create({
    baseURL: "https://chatmat.onrender.com/api/"
})

export const getReviews = () => {
    return gameApi.get("/reviews").then((res) => {
        return res.data
    })
}

export const getReviewsByCategory = (category) => {
    return gameApi.get("/reviews", {params: {category}})
    .then((res) => {
        console.log(res.data)
        return res.data
    })
}

export const getCategories = () => {
    return gameApi.get("/categories").then((res) => {
        console.log(res.data)
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

export const getComments = (review_id) => {
    return gameApi.get(`/reviews/${review_id}/comments`).then((res) => {
        return res.data
    })
}

export const postComment = (review_id, newComment) => {
    return gameApi.post(`/reviews/${review_id}/comments`, {username: "Me", body: newComment}).then(({data}) => {
        return data
    })
}
