import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routeNames } from './RouteName';
import { Components } from './RouteComponent';
import { Layout } from '../../Layout/Layout';
import { DemoCode } from '../../../Readme_File';

export const RouterPage = () => {
  const { Login, Dashboard, Profile, Settings, UsersList, Uploads } = Components;
  return (
    <BrowserRouter>
      <Routes >
        <Route path={routeNames.login} element={<Login />} />
        <Route path="/" element={<Navigate replace={true} to={routeNames.dashboard} />} />
        <Route path={routeNames.dashboard} element={<Layout children={<DemoCode />} />} />
        {/* <Route path={routeNames.dashboard} element={<Layout children={<Dashboard />} />} /> */}
        <Route path={routeNames.userslist} element={<Layout children={<UsersList /> } />} />
        <Route path={routeNames.profile} element={<Layout children={<Profile />} />} />
        <Route path={routeNames.Uploads} element={<Layout children={<Uploads />} />} />
        <Route path={routeNames.settings} element={<Layout children={<Settings /> } />} />
        {/* <Route path='/:dashboard' element={<Dashboard />} /> */}
        {/* <Route path='/:dashboard' element={<AuthHOC children={<Dashboard />} />} /> */}
        {/* <Route path='/:dashboard/:page' element={<AuthHOC children={<Dashboard />} />} /> */}
        {/* <Route path='/:dashboard/:page/:id' element={<AuthHOC children={<Dashboard />} />} /> */}
      </Routes>
    </BrowserRouter >
  )
}
