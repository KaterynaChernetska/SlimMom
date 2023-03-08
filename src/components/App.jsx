
import React from 'react';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from 'redux/routes/PrivateRoute';
import { PublicRoute } from 'redux/routes/RestrictedRoute';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/authorization/authOperations';

import LoginPage from 'pages/LoginPage/LoginPage';
import HomePage from 'pages/MainPage/MainPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { DairyPage } from 'pages/DairyPage/DairyPage';
import { DiaryAddProductForm } from './DiaryAddProductForm/DiaryAddProductForm';

// const DairyPage = lazy(() => import('pages/DairyPage/DairyPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch, isLoggedIn]);

  return !!isRefreshing ? (
    <b>Оновлення користувача...</b>
  ) : (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route
              path="/login" element={<PublicRoute redirectTo="/diary"
                component={<Suspense fallback={<div>Loading</div>}><LoginPage />
                </Suspense>} />}
            />
            <Route path="/register" element={<PublicRoute
              redirectTo="/diary"
              component={<Suspense fallback={<div>Loading</div>}>
                <RegistrationPage /></Suspense>} />}
            />

          </Route>
          <Route path="/diary" element={
            <Suspense fallback={<div>Loading</div>}>
              <DairyPage></DairyPage>
            </Suspense>} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
