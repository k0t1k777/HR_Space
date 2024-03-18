import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import * as Api from '../../utils/utils';
import { useEffect } from 'react';

export default function App() {


  // useEffect(() => {
  //   Promise.all([Api.getContent()])
  //     .then((data) => {
  //       setContent(data);
  //       console.log('Успешно app');
  //     })
  //     .catch((err) => {
  //       console.log('Ошибка app:', err);
  //     });
  // }, []);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}
