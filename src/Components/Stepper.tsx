import {
  CreditCardIcon,
  DocumentCheckIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';
import { Step, Stepper } from '@material-tailwind/react';
import React from 'react';

export function StepperWithIcon() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  return (
    <div className='w-full py-4 px-8'>
      <Stepper
        activeStep={0}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>
          <TruckIcon className='h-5 w-5' />
        </Step>
        <Step onClick={() => setActiveStep(1)}>
          <CreditCardIcon className='h-5 w-5' />
        </Step>
        <Step onClick={() => setActiveStep(2)}>
          <DocumentCheckIcon className='h-5 w-5' />
        </Step>
      </Stepper>
    </div>
  );
}
