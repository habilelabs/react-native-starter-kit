import React from 'react';
import {useSelector} from 'react-redux';
import {Loader} from "../components/molecules";

/**
 *  App loader component. it is generic component to show loader in whole application
 *  it depends on value of showLoader in redux store. So show loader set value of this variable to true
 *  to find set value to false.
 */
function AppLoader() {
    const showLoader = useSelector(state => state.loader);
    return (
        <React.Fragment>
            {
                showLoader ? <Loader/> : null
            }
        </React.Fragment>
    );
}

export default AppLoader;
