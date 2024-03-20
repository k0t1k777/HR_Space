import './Main.css';
import Sidebar from '../Sidbar/Sidbar';
import { useState } from 'react';
import StepThree from './Steps/StepThree';
import StepFour from './Steps/StepFour';
import ButtonNext from '../ButtonNext/ButtonNext';
import ButtonPrevious from '../ButtonPrevious/ButtonPrevious';
import StatusBar from '../StatusBar/StatusBar';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import StepFive from './Steps/StepFive';
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
  const [inputValuesDuties, setInputValuesDuties] = useState('');
  // const [inputValuesLanguage, setInputValuesLanguage] = useState('');
  // const [selectedValue, setSelectedValue] = useState<string[]>([]);

  const [isValid, setIsValid] = useState(true);

  const handleContinue = () => {
    if (currentStep === 1) {
      if (
        inputValueSpecialty.trim() !== '' &&
        inputValueSalaryMin.trim() !== '' &&
        inputValueSalaryMax.trim() !== ''
      ) {
        setCurrentStep((prevStep) => (prevStep < 9 ? prevStep + 1 : prevStep));
        setIsValid(true);
      } else {
        setIsValid(false);
        console.error('Поля обязательны для заполнения');
      }
    } else if (currentStep === 2) {
      if (inputValuesDuties.trim() !== '') {
        setCurrentStep((prevStep) => (prevStep < 9 ? prevStep + 1 : prevStep));
        setIsValid(true);
      } else {
        setIsValid(false);
        console.error('Поле обязательно для заполнения');
      }
      // } else if (currentStep === 3) {
      //   if (selectedValue.length !== 0) {
      //     setCurrentStep((prevStep) => (prevStep < 9 ? prevStep + 1 : prevStep));
      //     setIsValid(true);
      //   } else {
      //     setIsValid(false);
      //     console.error('Поле обязательно для заполнения');
      //   }
    } else {
      setCurrentStep((prevStep) => (prevStep < 9 ? prevStep + 1 : prevStep));
      setIsValid(true);
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
              isValid={isValid}
            />
          )}
          {currentStep === 2 && (
            <StepTwo
              inputValuesDuties={inputValuesDuties}
              setInputValuesDuties={setInputValuesDuties}
              isValid={isValid}
            />
          )}
          {currentStep === 3 && (
            <StepThree
              expiriense={expiriense}
              education={education}
              skills={skills}
              // inputValuesLanguage={inputValuesLanguage}
              // setInputValuesLanguage={setInputValuesLanguage}
              // isValid={isValid}
              // selectedValue={selectedValue}
              // setSelectedValue={setSelectedValue}
              // setIsValid={setIsValid}
            />
          )}
          {currentStep === 4 && (
            <StepFour languages={languages} isValid={isValid} />
          )}
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
