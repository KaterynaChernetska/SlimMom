import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUserInfo, logoutUser } from 'redux/authorization/authOperations';
import s from '../UserInfo/UserInfo.module.scss';
import {
  selectUserName,
} from 'redux/authorization/authSelectors';
import Line from 'images/line.svg';
import { deleteUserInfro } from 'redux/diary/diarySlice';
import { useEffect } from 'react';

const UserInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserName);

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  const handleChange = () => {
    dispatch(deleteUserInfro());
    dispatch(logoutUser());
   
  };

  return (
    <nav className={s.navigation__list}>
      <div className={s.decoration}>
        <p className={s.name}>{user}</p>
      </div>
      <div className={s.line}>
        <img src={Line} alt="line" width="2" height="32" />
      </div>
      <div className={s.out}>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? s.active : s.default)}
          onClick={handleChange}
        >
          Вихід
        </NavLink>
      </div>
    </nav>
  );
};

export default UserInfo;
