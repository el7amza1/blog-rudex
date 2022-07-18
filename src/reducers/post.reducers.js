const posts = (state = [], action) => { 
    switch (action.type) {
      case "GET_POSTS":
        return action.payload;
      // case "SET-POSTS":
      //   return state;
      default:
        return state;
    } 
  };
  
  export default posts;