const getPosts = (posts) =>{
    return {
        type: 'GET_POSTS',
        payload: posts
    }
}
export default getPosts