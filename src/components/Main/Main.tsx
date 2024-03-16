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
//import BigPictureContainer from "../BigPictureContainer/BigPictureContainer";

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
      <div>
        <StatusBar currentStep={currentStep} />
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
