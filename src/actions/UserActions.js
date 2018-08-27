export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export function handleLogin() {
  return function(dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    })

    //eslint-disable-next-line no-undef
    FB.login(
      function(response) {
        if (response.status === 'connected') {
          //eslint-disable-next-line no-undef
          FB.api('/me', function(response) {
            dispatch({
              type: LOGIN_SUCCESS,
              payload: response,
            })
          })
        } else {
          dispatch({
            type: LOGIN_FAIL,
            error: true,
            payload: new Error('Authorization error'),
          })
        }
      },
      { scope: 'public_profile,user_photos' }
    )
  }
}
