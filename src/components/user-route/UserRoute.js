import React from 'react';
import { Route, Redirect } from 'react-router-dom'

const basename = process.env.PUBLIC_URL;

export default ({component: Component, authenticated, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => authenticated
        ? <Component {...props} />
        : <Redirect to={{pathname: `${basename}/login`, state: {from: props.location}}} />}
    />
  )
}