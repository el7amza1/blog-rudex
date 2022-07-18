const User = (state = false, action) => { 
    switch (action.type) {
      case "CHECK_LOGIN":
        return action.payload.isLogin;
      case "LOGIN":
        return action.payload.isLogin;
      case "LOGOUT":
        return action.payload.isLogin;

      default:
        return state;
    }
  };
  
  export default User;