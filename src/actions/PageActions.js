export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL'

export function getPhotos(year) {
  return dispatch => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year,
    })
    //eslint-disable-next-line no-undef
    FB.api(`/me/albums?fields=photos{reactions,created_time,picture}`, function(
      response
    ) {
      if (response && !response.error) {
        dispatch({
          type: GET_PHOTOS_SUCCESS,
          payload: response.data
            .map(album => album.photos.data)
            .reduce((a, b) => [...a, ...b])
            .filter(
              photo => new Date(photo.created_time).getFullYear() === year
            ),
        })
      } else {
        dispatch({
          type: GET_PHOTOS_FAIL,
          payload: response.error,
        })
      }
    })
  }
}
