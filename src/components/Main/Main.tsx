import './Main.css';
import Sidebar from '../Sidbar/Sidbar';
import { useEffect, useState } from 'react';
import StepThree from './Steps/StepThree';
import StepFour from './Steps/StepFour';
import ButtonNext from '../ButtonNext/ButtonNext';
import ButtonPrevious from '../ButtonPrevious/ButtonPrevious';
import StatusBar from '../StatusBar/StatusBar';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import StepFive from './Steps/StepFive';
import StepSix from './Steps/StepSix';
import StepSeven from './Steps/StepSeven';
import StepEight from './Steps/StepEight';
import StepNine from './Steps/StepNine';
import { ShowContent } from '../../types/types';
import { statusBarData } from '../../utils/constants';
import * as Api from '../../utils/utils';
import InfoTooltipDone from '../InfoTooltipDone/InfoTooltipDone';

export interface MainContent {
  content?: ShowContent[];
  specialization: string[];
  towns: string[];
  skills: string[];
  experience: string[];
  education: string[];
  occupation: string[];
  timetable: string[];
  expectations: string[];
  registration: string[];
  languages: string[];
  languages_levels: string[];
  payments: string[];
  // date: string;
  bonus: string[];
  recruiter_count: string[];
  candidates_count: number[];
  mission: string[];
}

export default function Main({ content }: { content: MainContent }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [newTitle, setNewTitle] = useState(statusBarData.task);
  const [infoTooltipSaveIsOpen, setInfoTooltipSaveIsOpen] = useState(false);
  const [inputValueSpecialty, setInputValueSpecialty] = useState('');
  const [inputValueCity, setInputValueCity] = useState('');
  const [inputValueSalaryMin, setInputValueSalaryMin] = useState<string>('');
  const [inputValueSalaryMax, setInputValueSalaryMax] = useState<string>('');
  const [inputValuesDuties, setInputValuesDuties] = useState('');
  const [inputValuesLanguage, setInputValuesLanguage] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedValue, setSelectedValue] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<string>('');
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
  const [reward, setReward] = useState<string>('');
  const [valueCandidates, setValueCandidates] = useState(1);
  const [valueDate, setValueDate] = useState('');
  const [valueRecruters, setValueRecruters] = useState<string>('');
  const [isValid, setIsValid] = useState(true);
  const [showContent, setShowContent] = useState(content);
  const [draft, setDraft] = useState(false)

  useEffect(() => {
    setShowContent(content);
    console.log('content: ', content);
  }, [content]);

  const [newContent, setNewContent] = useState<object>({});

  const addNewContent = () => {
    Api.addNewContent(newContent);
  };
  // console.log('newContent: ', newContent);

  useEffect(() => {
    setNewContent({
      mission: valuesMission,
      bonus: valuesBonus,
      salary_min: inputValueSalaryMin,
      salary_max: inputValueSalaryMax,
      responsibilities: inputValuesDuties,
      other_requirements: inputValuesRequirements,
      candidates_count: valueCandidates,
      recruiter_count: valueRecruters,
      award: reward,
      name: newTitle,
      specialization: inputValueSpecialty,
      towns: inputValueCity,
      experience: valuesExperiense,
      education: valuesSalary,
      payments: valuePay,
      skills: added,
      languages: {
        name: inputValuesLanguage,
        language_level: selectedLevel,
      },
      occupation: valuesOccupation,
      registration: valuesDecoration,
      timetable: valuesTimetable,
      expectations: valuesExpectations,
    });
  }, [
    valuesMission,
    valuesBonus,
    inputValueSalaryMin,
    inputValueSalaryMax,
    inputValuesDuties,
    inputValuesRequirements,
    valueCandidates,
    valueRecruters,
    reward,
    newTitle,
    inputValueSpecialty,
    inputValueCity,
    valuesExperiense,
    valuesSalary,
    valuePay,
    added,
    inputValuesLanguage,
    selectedLevel,
    valuesOccupation,
    valuesDecoration,
    valuesTimetable,
    valuesExpectations,
  ]);

  const handleContinue = (isValid: boolean) => {
    if 
      (currentStep === 1) {
        if (
          inputValueSpecialty.trim() === '' ||
          inputValueSalaryMin.trim() === '' ||
          inputValueSalaryMax.trim() === ''
        ) {
          isValid = false;
        }
      } else if (currentStep === 2) {
        if (inputValuesDuties.trim() === '') {
          isValid = false;
        }
      } else if (currentStep === 3) {
        if (added.length === 0 && inputValueSkill.trim() === '') {
          isValid = false;
        }
      } else if(currentStep === 9)
     {
      if (reward.trim() === '') {
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
          inputValuesLanguage,
          selectedLevel,
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
          valueCandidates,
          valueDate,
          valueRecruters,
          valuePay,
          reward,
        })
      );
      setCurrentStep((prevStep) => (prevStep < 9 ? prevStep + 1 : prevStep));
      if (currentStep === 9 && isValid) {
        handleSend();
        setDraft(true);
      }
    }
  };

  const handleSend = () => {
    addNewContent();
    setInfoTooltipSaveIsOpen(true);
    setTimeout(() => {
      setInfoTooltipSaveIsOpen(false);
    }, 3000);
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
          <StatusBar
            currentStep={currentStep}
            newTitle={newTitle}
            setNewTitle={setNewTitle}
          />
          {currentStep === 1 && (
            <StepOne
              inputValueSpecialty={inputValueSpecialty}
              inputValueCity={inputValueCity}
              setInputValueSpecialty={setInputValueSpecialty}
              setInputValueCity={setInputValueCity}
              inputValueSalaryMin={inputValueSalaryMin}
              setInputValueSalaryMin={setInputValueSalaryMin}
              inputValueSalaryMax={inputValueSalaryMax}
              setInputValueSalaryMax={setInputValueSalaryMax}
              isValid={isValid}
              showContent={showContent}
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
              added={added}
              inputValueSkill={inputValueSkill}
              setInputValueSkill={setInputValueSkill}
              setAdded={setAdded}
              valuesExperiense={valuesExperiense}
              setValuesExperiense={setValuesExperiense}
              valuesSalary={valuesSalary}
              setValuesSalary={setValuesSalary}
              isValid={isValid}
              showContent={showContent}
            />
          )}
          {currentStep === 4 && (
            <StepFour
              isValid={isValid}
              inputValuesLanguage={inputValuesLanguage}
              setInputValuesLanguage={setInputValuesLanguage}
              inputValuesRequirements={inputValuesRequirements}
              setInputValuesRequirements={setInputValuesRequirements}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
              suggestions={suggestions}
              setSuggestions={setSuggestions}
              selectedLevel={selectedLevel}
              setSelectedLevel={setSelectedLevel}
              showContent={showContent}
            />
          )}
          {currentStep === 5 && (
            <StepFive
              valuesDecoration={valuesDecoration}
              setValuesDecoration={setValuesDecoration}
              valuesOccupation={valuesOccupation}
              setValuesOccupation={setValuesOccupation}
              valuesTimetable={valuesTimetable}
              setValuesTimetable={setValuesTimetable}
              showContent={showContent}
            />
          )}
          {currentStep === 6 && (
            <StepSix
              valuesMission={valuesMission}
              setValuesMission={setValuesMission}
              valuesBonus={valuesBonus}
              setValuesBonus={setValuesBonus}
              valueInputBonus={valueInputBonus}
              setInputValuesBonus={setInputValuesBonus}
              showContent={showContent}
            />
          )}
          {currentStep === 7 && (
            <StepSeven
              valuesExpectations={valuesExpectations}
              setValuesExpectations={setValuesExpectations}
              showContent={showContent}
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
              showContent={showContent}
            />
          )}

          {currentStep === 9 && (
            <StepNine
              valuePay={valuePay}
              setValuePay={setValuePay}
              reward={reward}
              setReward={setReward}
              isValid={isValid}
              showContent={showContent}
            />
          )}
        </div>
        <div className='main__button'>
          <ButtonPrevious
            handleBack={handleBack}
            disabled={currentStep === 1}
          />
          <ButtonNext
            handleContinue={handleContinue}
            currentStep={currentStep}
          />
        </div>
      </div>
      <InfoTooltipDone
        isVisible={infoTooltipSaveIsOpen}
        currentStep={currentStep}
        draft={draft}
      />
    </main>
  );
}
