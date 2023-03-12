import React, { useEffect } from 'react';
import { format } from 'date-fns';
import s from './Sidebar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { SelectDate, SelectSummary } from '../../redux/diary/diarySelectors';
import { dailyCaloriesAuth } from 'redux/dailyCalories/caloriesSlice';
import { selectUserId } from 'redux/authorization/authSelectors';

export const Summary = () => {
  const summary = useSelector(SelectSummary);
  const selectedDate = useSelector(SelectDate);
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);

  useEffect(() => {
    dispatch(dailyCaloriesAuth(userId));
  }, [dispatch, userId]);

  const dailyRate =
    summary !== null && summary !== undefined ? summary.dailyRate : '000';
  const consumed =
    summary !== null && summary !== undefined ? summary.kcalConsumed : '000';
  const left =
    summary !== null && summary !== undefined ? summary.kcalLeft : '000';
  const partOfNormal =
    summary !== null && summary !== undefined
      ? Math.round((consumed * 100) / dailyRate)
      : '00';

  const currentDate = format(Date.now(), 'yyyy-MM-dd');
  const date =
    selectedDate !== null && selectedDate !== undefined
      ? selectedDate
      : currentDate;
  const summaryDate = date.split('-').reverse().join('.');

  return (
    <div>
      <h3 className={s.SidebarTitle}>Резюме для {summaryDate}</h3>
      <ul className={s.SidebarList}>
        <li className={s.SidebarItem}>
          <p className={s.SidebarText}>Залишилось</p>
          <p className={s.SidebarText}>{Math.round(left)} ккал</p>
        </li>
        <li className={s.SidebarItem}>
          <p className={s.SidebarText}>Спожито</p>
          <p className={s.SidebarText}>{Math.round(consumed)} ккал</p>
        </li>
        <li className={s.SidebarItem}>
          <p className={s.SidebarText}>Денна норма</p>
          <p className={s.SidebarText}>{Math.round(dailyRate)} ккал</p>
        </li>
        <li className={s.SidebarItem}>
          <p className={s.SidebarText}>% від норми</p>
          <p className={s.SidebarText}>{`${Math.round(partOfNormal)}%`}</p>
        </li>
      </ul>
    </div>
  );
};
