import './App.css';
import Main, { MainContent} from '../Main/Main';
import Header from '../Header/Header';
import { data } from '../../utils/constants';
//import * as Api from '../../utils/utils';
import { useEffect, useState } from 'react';

export default function App() {
  // <MainContent | null>
  const [content, setContent] = useState<MainContent | null>(null);
  useEffect(() => {
    setContent(data);
  }, [])
  
  // код для БД
  // useEffect(() => {
  //   Api.getContent()
  //     .then((data) => {
  //       setContent(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <>
      <Header />
      {content && <Main content={content} />}
    </>
  );
}
