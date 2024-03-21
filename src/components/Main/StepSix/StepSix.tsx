import SubTitle from '../../Subtitle/Subtitle';
import MultiInput from '../../InputSelect/InputSelect';
import TextArea from '../../TextArea/TextArea';
import { useState } from 'react';
import './StepSix.css';
import { StepSixData } from '../../../utils/constants';

export default function StepSix({ mission, bonus }: any) {
  const [showBlock, setShowBlock] = useState(0);
  return (
    <div className='step-six'>
      <SubTitle subtitle={StepSixData.subTitleMission} />
      <MultiInput multi={mission} click={showBlock} setClick={setShowBlock} />
      <SubTitle subtitle={StepSixData.subTitleBonus} />
      <MultiInput multi={bonus} click={showBlock} setClick={setShowBlock} />
      <div
        className={showBlock ? 'step-six__area' : 'step-six__area_display_none'}
      >
        <SubTitle subtitle={StepSixData.textAreaBonus} />
        <TextArea placeholder={StepSixData.placeholderBonus} />
      </div>
    </div>
  );
}
