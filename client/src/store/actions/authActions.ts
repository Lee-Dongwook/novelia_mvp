export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginSuccess = (user:any) => ({
    type: LOGIN_SUCCESS,
    payload: user,
})