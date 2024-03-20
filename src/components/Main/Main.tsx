import './Main.css';
import Sidebar from '../Sidbar/Sidbar';
import { useState } from 'react';
import StepThree from './StepThree/StepThree';
import StepFour from './StepFour/StepFour';
import ButtonNext from '../ButtonNext/ButtonNext';
import ButtonPrevious from '../ButtonPrevious/ButtonPrevious';
import StatusBar from '../StatusBar/StatusBar';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import StepFive from './StepFive/StepFive';
import StepSix from './StepSix/StepSix';
import {
  expiriense,
  education,
  options,
  towns,
  skills,
  languages,
  decoration,
  occupation,
  timetable,
  mission,
  bonus,
} from '../../utils/constants';
import StepSeven from './StepSeven/StepSeven';
import StepEight from './StepEight/StepEight';
import StepNine from './StepNine/StepNine';

export default function Main() {
  const [currentStep, setCurrentStep] = useState(1);
  const [inputValueSpecialty, setInputValueSpecialty] = useState('');
  const [inputValueCity, setInputValueCity] = useState('');
  const [inputValueSalaryMin, setInputValueSalaryMin] = useState('');
  const [inputValueSalaryMax, setInputValueSalaryMax] = useState('');
  const [isValid, setIsValid] = useState(true);
  const isRequired = true;

  // const handleContinue = () => {
  //   if (!isRequired || inputValueSpecialty.trim() !== '') {
  //     setCurrentStep((prevStep) => (prevStep < 9 ? prevStep + 1 : prevStep));
  //     setIsValid(true);
  //   } else {
  //     setIsValid(false);
  //     console.error('Поле input не заполнено');
  //   }
  // };

  const handleContinue = () => {
    if (
      !isRequired ||
      (inputValueSpecialty.trim() !== '' &&
        inputValueSalaryMin.trim() !== '' &&
        inputValueSalaryMax.trim() !== '')
    ) {
      setCurrentStep((prevStep) => (prevStep < 9 ? prevStep + 1 : prevStep));
      setIsValid(true);
    } else {
      setIsValid(false);
      console.error('Поле input не заполнено');
    }
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  return (
    <main className='main'>
      <Sidebar />
      <div className='main__container'>
        <div style={{ height: '484px' }}>
          <StatusBar currentStep={currentStep} />
          {currentStep === 1 && (
            <StepOne
              options={options}
              towns={towns}
              inputValueSpecialty={inputValueSpecialty}
              inputValueCity={inputValueCity}
              setInputValueSpecialty={setInputValueSpecialty}
              setInputValueCity={setInputValueCity}
              inputValueSalaryMin={inputValueSalaryMin}
              setInputValueSalaryMin={setInputValueSalaryMin}
              inputValueSalaryMax={inputValueSalaryMax}
              setInputValueSalaryMax={setInputValueSalaryMax}
              isRequired={isRequired}
              isValid={isValid}
            />
          )}
          {currentStep === 2 && <StepTwo />}
          {currentStep === 3 && (
            <StepThree
              expiriense={expiriense}
              education={education}
              skills={skills}
            />
          )}
          {currentStep === 4 && <StepFour languages={languages} />}
          {currentStep === 5 && (
            <StepFive
              decoration={decoration}
              occupation={occupation}
              timetable={timetable}
            />
          )}
          {currentStep === 6 && <StepSix mission={mission} bonus={bonus} />}
          {currentStep === 7 && <StepSeven />}
          {currentStep === 8 && <StepEight />}
          {currentStep === 9 && <StepNine />}
        </div>
        <div className='main__button'>
          <ButtonPrevious
            handleBack={handleBack}
            disabled={currentStep === 1}
          />
          <ButtonNext handleContinue={handleContinue} />
        </div>
      </div>
    </main>
  );
}
