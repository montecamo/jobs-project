export function changeTheme(type) {
  return (dispatch, getState) => {
    let payload;
    if (type) {
      payload = type;
    } else {
      payload = getState().theme.type === 'light' ? 'dark' : 'light';
    }

    dispatch({
      type: 'CHANGE_THEME',
      payload
    });
  }
}
