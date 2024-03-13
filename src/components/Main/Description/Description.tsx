import './Description.css';
import Input from '../../Input/Input';
import SubTitle from '../../Subtitle/Subtitle';
import TextArea from '../../TextArea/TextArea';
import Button from '../../Button/Button';
import StatusBar from '../../StatusBar/StatusBar';

export default function Description() {

  return (
    <div className='description'>
      <StatusBar />
      <SubTitle subtitle='Специальность (необязательно)' />
      <Input />
      <SubTitle subtitle='Заработная плата сотрудника (необязательно)' />
      <Input width='276px' placeholder={"Введите сумму"} />
      <SubTitle subtitle='Обязанности сотрудника (необязательно)' />
      <TextArea />
      <div className='description__container-button'>
        <Button buttonText={"Вернуться"}/>
        <Button buttonText={"Продолжить"} background='#E8F4FF' color='#1785E5'/>
      </div>
    </div>
  );
}
