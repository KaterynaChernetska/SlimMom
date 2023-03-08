import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { SideBar } from 'components/SideBar/SideBar';
import s from './DairyPage.module.css';
import { addEatedProduct, getProductsByTitle } from 'redux/products/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate } from 'redux/products/selectors';
import { getProductsByDate } from 'redux/products/operations';

export function DairyPage() {
  const dispatch = useDispatch();
  const date = useSelector(selectDate);


  useEffect(() => {
    if (date !== null) dispatch(getProductsByDate(date));
  }, [date, dispatch]);

  return (
    <div className={s.diary__wrap}>
      <DiaryAddProductForm />
      <SideBar />
    </div>
  );
}
