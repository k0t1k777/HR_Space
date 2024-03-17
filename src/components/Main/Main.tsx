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
import StepSix from './StepFive copy/StepSix';
import {
  expiriense,
  education,
  options,
  towns,
  skills,
  langages,
  decoration,
  occupation,
  timetable,
  mission,
  bonus,
} from '../../utils/constants';

export default function Main() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleContinue = () => {
    setCurrentStep((prevStep) => (prevStep < 9 ? prevStep + 1 : prevStep));
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
          {currentStep === 1 && <StepOne options={options} towns={towns} />}
          {currentStep === 2 && <StepTwo />}
          {currentStep === 3 && (
            <StepThree
              expiriense={expiriense}
              education={education}
              skills={skills}
            />
          )}
          {currentStep === 4 && <StepFour langages={langages} />}
          {currentStep === 5 && (
            <StepFive
              decoration={decoration}
              occupation={occupation}
              timetable={timetable}
            />
          )}
          {currentStep === 6 && <StepSix mission={mission} bonus={bonus} />}
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
