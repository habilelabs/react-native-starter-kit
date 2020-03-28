const setAppLoader = (showLoader) => dispatch => {
    return dispatch(
        {
            type : showLoader?'SHOW_LOADER' : 'HIDE_LOADER',
        }
    );
};

export {
    setAppLoader
}