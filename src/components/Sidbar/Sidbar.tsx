import './Sidbar.css';
import BigPicture from '../BigPicture/BigPicture';
import lineOne from '../../assets/line-1.svg?react';
import lineTwo from '../../assets/line-2.svg?react';
import { asideText } from '../../utils/constants';

export default function Sidbar() {
  return (
    <aside className="big-picture-container__items">
      {
        asideText.map((item, index) => {
          return <BigPicture key={index} title={item.title} icon={item.image}  />
        })
      }
      <lineOne className="big-picture-container__line" />
      <lineTwo className="big-picture-container__line line_position_bottom" />
    </aside>
  );
}
