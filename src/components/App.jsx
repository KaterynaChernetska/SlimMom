import React from 'react';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { PublicRoute } from 'components/Routes/PublicRoute';
import { refreshUser } from 'redux/authorization/authOperations';

import LoginPage from 'pages/LoginPage/LoginPage';
import HomePage from 'pages/MainPage/MainPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { DairyPage } from 'pages/DairyPage/DairyPage';
import { DiaryAddProductForm } from './DiaryAddProductForm/DiaryAddProductForm';
import { CalculatorPage } from 'pages/CalculatorPage/CalculatorPage';

// const DairyPage = lazy(() => import('pages/DairyPage/DairyPage'));

export const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/calculator" element={<CalculatorPage />} />
              <Route path="/diary" element={<DairyPage />} />
            </Route>
            <Route path="/" element={<PublicRoute />}>
              <Route index element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegistrationPage />} />
            </Route>

            {/* <Route
              path="/login" element={<PublicRoute redirectTo="/calculator"
                component={<Suspense fallback={<div>Loading</div>}><LoginPage />
                </Suspense>} />}
            />
            <Route path="/register" element={<PublicRoute
              redirectTo="/calculator"
              component={<Suspense fallback={<div>Loading</div>}>
                <RegistrationPage /></Suspense>} />}
            />
            <Route path="/diary" element={
              <Suspense fallback={<div>Loading</div>}>
                <DairyPage></DairyPage>
              </Suspense>} />

            <Route path="/calculator" element={
              <Suspense fallback={<div>Loading</div>}>
                <CalculatorPage></CalculatorPage>
              </Suspense>} />
          </Route> */}
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
