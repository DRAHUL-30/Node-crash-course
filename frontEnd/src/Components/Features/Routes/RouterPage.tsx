import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routeNames } from './RouteName';
import { Components } from './RouteComponent';
import { Layout } from '../../Layout/Layout';

export const RouterPage = () => {
  const { Login, Dashboard, Profile } = Components;
  return (
    <BrowserRouter>
      <Routes >
        <Route path={routeNames.login} element={<Login />} />
        <Route path="/" element={<Navigate replace={true} to={routeNames.dashboard} />} />
        <Route path={routeNames.dashboard} element={<Layout children={<Dashboard /> } />} />
        <Route path={routeNames.profile} element={<Layout children={<Profile /> } />} />
        {/* <Route path='/:dashboard' element={<Dashboard />} /> */}
        {/* <Route path='/:dashboard' element={<AuthHOC children={<Dashboard />} />} /> */}
        {/* <Route path='/:dashboard/:page' element={<AuthHOC children={<Dashboard />} />} /> */}
        {/* <Route path='/:dashboard/:page/:id' element={<AuthHOC children={<Dashboard />} />} /> */}
      </Routes>
    </BrowserRouter >
  )
}
