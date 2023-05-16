import React from 'react';
import { Navigate } from 'react-router-dom';

function MissingRoute() {
 return window.location.replace('https://camrinfilms.com/');
}

export { MissingRoute }