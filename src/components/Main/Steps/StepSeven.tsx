import SubTitle from '../../Subtitle/Subtitle'
import Checkbox from '../../Checkbox/Checkbox'
import { checkCaption } from '../../../utils/constants'


export default function StepSeven() {
  return (
    <div className='step-seven'>
      <SubTitle subtitle='Вы ожидаете, что рекрутер' />
      <div className='step-seven__container'>
      {
        checkCaption.map((item, index) => {
          return <Checkbox key={index} text={item} />
        })
      }
      </div>
      
    </div>
  )
}