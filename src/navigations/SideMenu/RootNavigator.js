import React, { createRef } from "react";

//In navigations/index.js, we will pass this navigationRef as a ref to the NavigationContainer
export const navigationRef = createRef(null);

//if navigationRef is successfully passed to the NavigationContainer, we will use the navigate() function defined in the NavigationContainer.
export const navigate = (name, params) => {
    if (navigationRef.current) {
        navigationRef.current.navigate(name, params);
    }
}