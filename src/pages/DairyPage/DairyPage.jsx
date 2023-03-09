import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import s from './DairyPage.module.css';
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
    <DiaryAddProductForm />
  );
}


