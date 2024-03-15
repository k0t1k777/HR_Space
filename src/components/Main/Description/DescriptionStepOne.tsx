import './Description.css';
import Input from '../../Input/Input';
import SubTitle from '../../Subtitle/Subtitle';
import Button from '../../ButtonNext/ButtonNext';
import StatusBar from '../../StatusBar/StatusBar';
import InputSalary from '../../InputSalary/InputSalary';
import TextArea from '../../TextArea/TextArea';

export default function Description() {
  return (
    <div className='description'>
      <StatusBar />
      <SubTitle subtitle='Специальность' />
      <Input placeholder={'Сантехник'} />
      <SubTitle subtitle='Город (необязательно)' />
      <Input placeholder={'Москва'} />
      <SubTitle subtitle='Заработная плата сотрудника (необязательно)' />
      <InputSalary />
      <div className='description__container-button'>
        <Button buttonText={'Назад'} />
        <Button
          buttonText={'Продолжить'}
          background='#E8F4FF'
          color='#1785E5'
        />
      </div>
      <SubTitle subtitle='Обязанности сотрудника' />
      <TextArea />
    </div>
  );
}
