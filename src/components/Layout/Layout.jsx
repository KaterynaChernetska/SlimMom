import React, { Suspense } from 'react';
import { Logo } from 'components/Logo/Logo';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/authorization/authSelectors';
import { useSelector } from 'react-redux';
import s from '../Layout/Layout.module.scss';
import { Navigation } from 'components/Navigation/Navigation';
import { LoggedInNavigation } from 'components/LoggedInNavigation/LoggedInNavigation';
import Burger from './Burger/Burger';
import { useWindowSize } from 'react-use';
import UserInfo from 'components/UserInfo/UserInfo';
import Line from 'images/line.svg';
import { Loader } from 'components/Loader/Loader';

export function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { width } = useWindowSize();

  return (
    <>
      <header className={s.header}>
        <div>
          <Logo />
        </div>
        <div className={s.line}>
          <img src={Line} alt="line" width="2" height="32" />
        </div>
        <nav className={s.decoration}>
          <ul className={s.navigation__list}>
            {!isLoggedIn ? (
              <>
                <Navigation />
              </>
            ) : (
              <>
                {/* {isLoggedIn && width < 1280 && <Burger />} */}
                {width < 1279 ? <Burger /> : <LoggedInNavigation />}
                <UserInfo />
              </>
            )}
          </ul>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
      <main className={s.main}>
        <Outlet />
      </main>
      </Suspense>
    </>
  );
}
