import './Sidbar.css';
import BigPicture from '../BigPicture/BigPicture';
import LineOne from '../../assets/line-1.svg?react';
import LineTwo from '../../assets/line-2.svg?react';
import { asideText } from '../../utils/constants';

export default function Sidbar() {
  return (
    <aside className="big-picture-container__items">
      {
        asideText.map((item, index) => {
          return <BigPicture key={index} title={item.title} icon={item.image}  />
        })
      }
      <LineOne className="big-picture-container__line" />
      <LineTwo className="big-picture-container__line line_position_bottom" />
    </aside>
  );
}
