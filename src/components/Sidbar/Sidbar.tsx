import './Sidbar.css';
import BigPicture from '../BigPicture/BigPicture';
import lineOne from '../../assets/line-1.svg';
import lineTwo from '../../assets/line-2.svg';
import { asideText } from '../../utils/constants';

export default function Sidbar() {
  return (
    <aside className='big-picture-container__items'>
      {asideText.map((item, index) => {
        return <BigPicture title={item.title} icon={item.image} key={index} />;
      })}
      <img className='big-picture-container__line' src={lineOne} alt='image' />
      <img
        className='big-picture-container__line line_position_bottom'
        src={lineTwo}
        alt='image'
      />
    </aside>
  );
}
