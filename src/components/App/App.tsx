import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import * as Api from '../../utils/utils';
import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    Api.getContent()
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}
