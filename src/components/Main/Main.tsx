import './Main.css';
import Sidebar from '../Main/Sidebar/Sidebar';
import { useState } from 'react';
import StepThree from './StepThree/StepThree';
import StepFour from './StepFour/StepFour';
import ButtonNext from '../ButtonNext/ButtonNext';
import ButtonPrevious from '../ButtonPrevious/ButtonPrevious';
import StatusBar from '../StatusBar/StatusBar';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';

export default function Main() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleContinue = () => {
    setCurrentStep(currentStep + 1);
  };
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <main className='main'>
      <Sidebar />
      <div>
        <StatusBar currentStep={currentStep}/>
        {currentStep === 1 && <StepOne />}
        {currentStep === 2 && <StepTwo />}
        {currentStep === 3 && <StepThree />}
        {currentStep === 4 && <StepFour />}
        <div className='main__button'>
          <ButtonPrevious
            handleBack={handleBack}
            disabled={currentStep === 1}
          />
          <ButtonNext
            handleContinue={handleContinue}
          />
        </div>
      </div>
    </main>
  );
}
