import './App.css';
import Main, { MainContent } from '../Main/Main';
import Header from '../Header/Header';
import * as Api from '../../utils/utils';
import { useEffect, useState } from 'react';

export default function App() {
  const [content, setContent] = useState<MainContent | null>(null);
  useEffect(() => {
    Api.getContent()
      .then((data) => {
        setContent(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />
      {content && <Main content={content} />}
    </>
  );
}
