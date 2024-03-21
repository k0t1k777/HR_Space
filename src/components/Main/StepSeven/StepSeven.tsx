import './StepSeven.css';
import SubTitle from '../../Subtitle/Subtitle';
import Checkbox from '../../Checkbox/Checkbox';
import { checkCaption } from '../../../utils/constants';

export default function StepSeven() {
  return (
    <div>
      <SubTitle subtitle='Вы ожидаете, что рекрутер' />
      <div
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {checkCaption.map((item, index) => {
          return <Checkbox key={index} text={item} />;
        })}
      </div>
    </div>
  );
}
