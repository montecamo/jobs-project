import swal from 'sweetalert';

export function changeTheme(type) {
  return (dispatch, getState) => {
    let payload;
    if (type) {
      payload = type;
    } else {
      payload = getState().theme.type === 'light' ? 'dark' : 'light';
    }
    localStorage.setItem('theme', payload);

    dispatch({
      type: 'CHANGE_THEME',
      payload
    });
  }
}

export function getTheme() {
  return (dispatch) => {
    let theme = localStorage.getItem('theme');
    if (theme) {
      return; 
    }
      swal({
        title: 'Choose theme',
        text: 'you can switch theme later by clicking logo',
        className: 'custom-sweetalert',
        closeOnClickOutside: false,
        closeOnEsc: false,
        focusConfirm: false,
        buttons: {
          light: 'light',
          dark: 'dark'
        },
      })
      .then((value) => {
        dispatch(changeTheme(value));
      })
  }
}
