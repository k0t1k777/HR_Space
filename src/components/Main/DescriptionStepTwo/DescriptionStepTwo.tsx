import './Description.css';
import SubTitle from '../../Subtitle/Subtitle';
import Button from '../../Button/Button';
import TextArea from '../../TextArea/TextArea';
import Title from '../../Title/Title';

export default function Description() {
  return (
    <div className='description'>
      <Title />
      <SubTitle subtitle='Обязанности сотрудника' />
      <TextArea />
      <div className='description__container-button'>
        <Button buttonText={'Назад'} />
        <Button
          buttonText={'Продолжить'}
          background='#E8F4FF'
          color='#1785E5'
        />
      </div>
    </div>
  );
}
