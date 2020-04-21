import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

/**
 * Code Splitting
 */
const AlertsModule = lazy(() => import('../modules/alerts'));
const ZonesModule = lazy(() => import('../modules/zones'));
const StationsModule = lazy(() => import('../modules/stations'));

/**
 * Manager of all app routes, here we'll configure the private
 * and public routes.
 *
 */
export default function RouterManager() {
  /* logic for manage the routes*/
  //if(user.isLogged)
  // return private routes
  // else
  // return public routes

  return (
    <Switch>
      {renderPrivateRoutes()}
      {renderPublicRoutes()}
    </Switch>
  );
}

/**
 * Render private routes(show only when the user is have access)
 */
function renderPrivateRoutes() {
  return (
    <Suspense fallback={null}>
      <Route exact path="/">
        <Redirect to="/alerts" />
      </Route>

      <Route path="/alerts" component={AlertsModule} />
      <Route path="/zones" component={ZonesModule} />
      <Route path="/stations" component={StationsModule} />
    </Suspense>
  );
}

/**
 * Render public routes
 */
function renderPublicRoutes() {
  return null;
}
