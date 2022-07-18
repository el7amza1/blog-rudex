export const checkLogin = isLogin => {
    return {
        type : "CHECK_LOGIN",
        payload : {
            isLogin,
        }
    }
};

export const login = () => {
    return {
        type : "LOGIN",
        payload : {
            isLogin : true,
        }
    }
};

export const logout = () => {
    return {
        type : "LOGOUT",
        payload : {
            isLogin : false,
        }
    }
}