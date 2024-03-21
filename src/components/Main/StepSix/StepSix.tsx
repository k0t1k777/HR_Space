import SubTitle from '../../Subtitle/Subtitle';
import TextArea from '../../TextArea/TextArea';
import { useState } from 'react';
import './StepSix.css';
import { StepSixData } from '../../../utils/constants';
import InputSelect from '../../InputSelect/InputSelect';

interface StepSixProps {
  mission: string[];
  bonus: string[];
  valuesMission: string;
  setValuesMission: (value: string) => void;
  valuesBonus: string;
  setValuesBonus: (value: string) => void;
  valuesTimetable: string;
  setValuesTimetable: (value: string) => void;
  valueInputBonus: string;
  setInputValuesBonus: (value: string) => void;
}

export default function StepSix({
  mission,
  bonus,
  valuesMission,
  setValuesMission,
  valuesBonus,
  setValuesBonus,
  valueInputBonus,
  setInputValuesBonus,
}: StepSixProps) {
  const [showBlock, setShowBlock] = useState(false);
  return (
    <div className='step-six'>
      <SubTitle subtitle={StepSixData.subTitleMission} />
      <InputSelect
        multi={mission}
        selectedItem={valuesMission}
        setSelectedItem={setValuesMission}
      />
      <SubTitle subtitle={StepSixData.subTitleBonus} />
      <InputSelect
        multi={bonus}
        click={showBlock}
        setClick={setShowBlock}
        selectedItem={valuesBonus}
        setSelectedItem={setValuesBonus}
      />
      <div
        className={showBlock ? 'step-six__area' : 'step-six__area_display_none'}
      >
        <SubTitle subtitle={StepSixData.textAreaBonus} />
        <TextArea
          placeholder={StepSixData.placeholderBonus}
          inputValues={valueInputBonus}
          setInputValues={setInputValuesBonus}
          isValid={true}
        />
      </div>
    </div>
  );
}
