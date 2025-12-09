import { useRef, useState } from "react";
import { Email } from "./steps/Email";
import { PersonalDetails } from "./steps/PersonalDetails";
import { HomeAddress } from "./steps/HomeAddress";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Review } from "./steps/Review";
import { ThankYou } from "./steps/ThankYou";
import { Step } from "./common/Step";
import {
  STEP_EMAIL,
  STEP_MODE_CREATE,
  STEP_PERSONAL_DETAILS,
  STEP_HOME_ADDRESS,
  STEP_REVIEW,
  STEP_THANK_YOU,
  type StepKey,
} from "./constants";
import { Form } from "react-aria-components";
import { useOnboardingSubmit } from "./hooks";
import {
  EmailStepData,
  PersonalDetailsStepData,
  HomeAddressStepData,
} from "./types";
import { stepsConfig } from "./config";

export function OnboardingWizard() {
  const [step, setStep] = useState<StepKey>(STEP_EMAIL);
  const [mode, setMode] = useState(STEP_MODE_CREATE);

  const emailStepData = useRef<EmailStepData>({ ...stepsConfig.email });
  const personalDetailsStepData = useRef<PersonalDetailsStepData>({
    ...stepsConfig.personalDetails,
  });
  const homeAddressStepData = useRef<HomeAddressStepData>({
    ...stepsConfig.homeAddress,
  });

  const { handleOnSubmit } = useOnboardingSubmit({
    step,
    setStep,
    emailStepData,
    personalDetailsStepData,
    homeAddressStepData,
  });

  const onPrevious = () => {
    if (step === STEP_PERSONAL_DETAILS) {
      setStep(STEP_EMAIL);
    } else if (step === STEP_HOME_ADDRESS) {
      setStep(STEP_PERSONAL_DETAILS);
    } else if (step === STEP_REVIEW) {
      setStep(STEP_PERSONAL_DETAILS);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-4 px-4 sm:py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-6 sm:mb-8">
          Onboarding Wizard
        </h1>
        <Form onSubmit={handleOnSubmit}>
          <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4 sm:p-6 lg:p-8">
            <Header currentStep={step} mode={mode} setStep={setStep} />
            <div className="mt-6 sm:mt-8">
              <Step visible={step === STEP_EMAIL}>
                <Email initialValues={emailStepData.current} />
              </Step>
              <Step visible={step === STEP_PERSONAL_DETAILS}>
                <PersonalDetails />
              </Step>
              <Step visible={step === STEP_HOME_ADDRESS}>
                <HomeAddress initialValues={homeAddressStepData.current} />
              </Step>
              <Step visible={step === STEP_REVIEW}>
                <Review
                  formData={{
                    ...emailStepData.current,
                    ...personalDetailsStepData.current,
                    ...homeAddressStepData.current,
                  }}
                />
              </Step>
              {step === STEP_THANK_YOU && (
                <ThankYou
                  isVisible={step === STEP_THANK_YOU}
                  setStep={setStep}
                />
              )}
            </div>
            {step !== STEP_THANK_YOU && (
              <Footer currentStep={step} onPrevious={onPrevious} />
            )}
          </div>
        </Form>
      </div>
    </div>
  );
}
