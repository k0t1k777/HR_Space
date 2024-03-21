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
import StepSeven from './Steps/StepSeven';
import StepEight from './StepEight/StepEight';
import StepNine from './StepNine/StepNine';

export default function Main() {
  const [currentStep, setCurrentStep] = useState(1);
  const [inputValueSpecialty, setInputValueSpecialty] = useState('');
  const [inputValueCity, setInputValueCity] = useState('');
  const [inputValueSalaryMin, setInputValueSalaryMin] = useState('');
  const [inputValueSalaryMax, setInputValueSalaryMax] = useState('');
  const [inputValuesDuties, setInputValuesDuties] = useState('');
  const [inputValuesLanguage, setInputValuesLanguage] = useState('');
  const [added, setAdded] = useState<string[]>([]);
  const [inputValuesRequirements, setInputValuesRequirements] = useState('');
  const [valuesExperiense, setValuesExperiense] = useState<string>('');
  const [valuesSalary, setValuesSalary] = useState<string>('');
  const [valuesDecoration, setValuesDecoration] = useState<string>('');
  const [valuesOccupation, setValuesOccupation] = useState<string[]>([]);
  const [valuesTimetable, setValuesTimetable] = useState<string[]>([]);
  const [valuesMission, setValuesMission] = useState<string>('');
  const [valuesBonus, setValuesBonus] = useState<string>('');
  const [valueInputBonus, setInputValuesBonus] = useState<string>('');
  const [valuesExpectations, setValuesExpectations] = useState<string[]>([]);
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
    } else if (currentStep === 3) {
      if (added.length !== 0) {
        setCurrentStep((prevStep) => (prevStep < 9 ? prevStep + 1 : prevStep));
        setIsValid(true);
      } else {
        setIsValid(false);
        console.error('Поле обязательно для заполнения');
      }
    } else if (currentStep === 4) {
      if (inputValuesLanguage.trim() !== '') {
        setCurrentStep((prevStep) => (prevStep < 9 ? prevStep + 1 : prevStep));
        setIsValid(true);
      } else {
        setIsValid(false);
        console.error('Поле обязательно для заполнения');
      }
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
              added={added}
              setAdded={setAdded}
              valuesExperiense={valuesExperiense}
              setValuesExperiense={setValuesExperiense}
              valuesSalary={valuesSalary}
              setValuesSalary={setValuesSalary}
              isValid={isValid}
            />
          )}
          {currentStep === 4 && (
            <StepFour
              languages={languages}
              isValid={isValid}
              inputValuesLanguage={inputValuesLanguage}
              setInputValuesLanguage={setInputValuesLanguage}
              inputValuesRequirements={inputValuesRequirements}
              setInputValuesRequirements={setInputValuesRequirements}
            />
          )}
          {currentStep === 5 && (
            <StepFive
              decoration={decoration}
              occupation={occupation}
              timetable={timetable}
              valuesDecoration={valuesDecoration}
              setValuesDecoration={setValuesDecoration}
              valuesOccupation={valuesOccupation}
              setValuesOccupation={setValuesOccupation}
              valuesTimetable={valuesTimetable}
              setValuesTimetable={setValuesTimetable}
            />
          )}
          {currentStep === 6 && (
            <StepSix
              mission={mission}
              bonus={bonus}
              valuesMission={valuesMission}
              setValuesMission={setValuesMission}
              valuesBonus={valuesBonus}
              setValuesBonus={setValuesBonus}
              valueInputBonus={valueInputBonus}
              setInputValuesBonus={setInputValuesBonus}
            />
          )}
          {currentStep === 7 && (
            <StepSeven
              valuesExpectations={valuesExpectations}
              setValuesExpectations={setValuesExpectations}
            />
          )}
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
