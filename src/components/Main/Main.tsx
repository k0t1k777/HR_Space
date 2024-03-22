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
import StepSix from './Steps/StepSix';
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
  LanguageOption,
} from '../../utils/constants';
import StepSeven from './Steps/StepSeven';
import StepEight from './Steps/StepEight';
import StepNine from './Steps/StepNine';

export default function Main() {
  const [currentStep, setCurrentStep] = useState(1);
  const [inputValueSpecialty, setInputValueSpecialty] = useState('');
  const [inputValueCity, setInputValueCity] = useState('');
  const [inputValueSalaryMin, setInputValueSalaryMin] = useState('');
  const [inputValueSalaryMax, setInputValueSalaryMax] = useState('');
  const [inputValuesDuties, setInputValuesDuties] = useState('');
  const [inputValuesLanguage, setInputValuesLanguage] = useState('');
  const [suggestions, setSuggestions] = useState<LanguageOption[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [inputValueSkill, setInputValueSkill] = useState('');
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
  const [valuePay, setValuePay] = useState('');
  const [reward, setReward] = useState('');
  const [valueCandidates, setValueCandidates] = useState(1);
  const [valueDate, setValueDate] = useState('');
  const [valueRecruters, setValueRecruters] = useState<string>('');
  const [isValid, setIsValid] = useState(true);


  const handleContinue = (isValid: boolean) => {
    if (currentStep === 1) {
      if (
        inputValueSpecialty.trim() === '' ||
        inputValueSalaryMin.trim() === '' ||
        inputValueSalaryMax.trim() === ''
      ) {
        isValid = false;
        console.error('Поля обязательны для заполнения');
      }
    } else if (currentStep === 2) {
      if (inputValuesDuties.trim() === '') {
        console.log('inputValuesDuties: ', inputValuesDuties);
        isValid = false;
        console.error('Поле обязательно для заполнения');
      }
    } else if (currentStep === 3) {
      if (added.length === 0 && inputValueSkill.trim() === '') {
        isValid = false;
        console.error('Поле обязательно для заполнения');
      }
    } else if (currentStep === 4) {
      if (inputValuesLanguage.trim() === '') {
        isValid = false;
        console.error('Поле обязательно для заполнения');
      }
    }
    else if (currentStep === 9) {
      if (inputValuesLanguage.trim() !== '') {
        setCurrentStep((prevStep) => (prevStep < 9 ? prevStep + 1 : prevStep));
        isValid = false;
      } 
    }
    setIsValid(isValid);
    if (isValid) {
      setIsValid(true);
      localStorage.setItem(
        `step${currentStep}`,
        JSON.stringify({
          inputValueSpecialty,
          inputValueCity,
          inputValueSalaryMin,
          inputValueSalaryMax,
          inputValuesDuties,
          inputValueSkill,
          added,
          inputValuesRequirements,
          valuesExperiense,
          valuesSalary,
          valuesDecoration,
          valuesOccupation,
          valuesTimetable,
          valuesMission,
          valuesBonus,
          valueInputBonus,
          valuesExpectations,
        })
      );
      setCurrentStep((prevStep) => (prevStep < 9 ? prevStep + 1 : prevStep));
    }
  };

  const handleBack = () => {
    setIsValid(true);
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
              inputValueSkill={inputValueSkill}
              setInputValueSkill={setInputValueSkill}
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
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
              suggestions={suggestions}
              setSuggestions={setSuggestions}
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
          {currentStep === 8 && (
            <StepEight
              valueDate={valueDate}
              setValueDate={setValueDate}
              valueRecruters={valueRecruters}
              setValueRecruters={setValueRecruters}
              valueCandidats={valueCandidates}
              setValueCandidats={setValueCandidates}
            />
          )}

          {currentStep === 9 && (
            <StepNine
              valuePay={valuePay}
              setValuePay={setValuePay}
              reward={reward}
              setReward={setReward}
              isValid={isValid}
            />
          )}
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
