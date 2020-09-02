import React, { useEffect } from 'react';

const SlidingSnackbar = () => {

    //Set snackbar visible and show animation on mount
    useEffect(() => {
        const element = document.getElementById("snackbar")
        element.className = "show"
        setTimeout(function () { element.className = element.className.replace("show", ""); }, 10000);

    }, [])

    return (<div id="snackbar" >App is currently under construction \...[]_[]../</div>);
}

export default SlidingSnackbar;

/**
 * Resources
 * https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations
 * https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
 */