import SubTitle from '../../Subtitle/Subtitle';
import TextArea from '../../TextArea/TextArea';
import { useState, useEffect } from 'react';
import './Step.css';
import { StepSixData } from '../../../utils/constants';
import InputSelect from '../../InputSelect/InputSelect';
import { ShowContent } from '../../../types/types';

interface StepSixProps {
  valuesMission: string;
  setValuesMission: (value: string) => void;
  valuesBonus: string;
  setValuesBonus: (value: string) => void;
  valuesTimetable?: string;
  setValuesTimetable?: (value: string) => void;
  valueInputBonus: string;
  setInputValuesBonus: (value: string) => void;
  showContent: ShowContent
}

export default function StepSix({
  valuesMission,
  setValuesMission,
  valuesBonus,
  setValuesBonus,
  valueInputBonus,
  setInputValuesBonus,
  showContent,
}: StepSixProps) {
  const [showBlock, setShowBlock] = useState(false);

  useEffect(() => {
    if (valuesBonus === 'Да') {
      setShowBlock(true);
    } else {
      setShowBlock(false);
    }
  }, [valuesMission, valuesBonus]);

  return (
    <div className='step-six'>
      <SubTitle subtitle={StepSixData.subTitleMission} />
      <InputSelect
        multi={showContent.mission}
        selectedItem={valuesMission}
        setSelectedItem={setValuesMission}
      />
      <SubTitle subtitle={StepSixData.subTitleBonus} />
      <InputSelect
        multi={showContent.bonus}
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
