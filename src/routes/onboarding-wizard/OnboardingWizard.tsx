import { useRef, useState } from "react";
import { Email } from "./steps/Email";
import { PersonalDetails } from "./steps/PersonalDetails";
import { Footer } from "./Footer";
import { Header } from "./Header";
import {
  emailStepValidation,
  personalDetailsStepValidation,
} from "./validation";
import { Review } from "./steps/Review";
import { Step } from "./common/Step";
import {
  STEP_EMAIL,
  STEP_MODE_CREATE,
  STEP_PERSONAL_DETAILS,
  STEP_REVIEW,
  type StepKey,
} from "./constants";

export function OnboardingWizard() {
  const [step, setStep] = useState<StepKey>(STEP_EMAIL);
  const [mode, setMode] = useState(STEP_MODE_CREATE);

  const emailStepData = useRef<{ email: string }>({ email: "" });
  const personalDetailsStepData = useRef<{
    firstName: string;
    lastName: string;
    dateOfBirth: string;
  }>({ firstName: "", lastName: "", dateOfBirth: "" });

  const onPrevious = () => {
    if (step === STEP_PERSONAL_DETAILS) {
      setStep(STEP_EMAIL);
    } else if (step === STEP_REVIEW) {
      setStep(STEP_PERSONAL_DETAILS);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      if (step === STEP_EMAIL) {
        const validatedData = emailStepValidation.parse({ email: data.email });
        if (validatedData) {
          emailStepData.current = validatedData;
          setStep(STEP_PERSONAL_DETAILS);
        }
        return;
      } else if (step === STEP_PERSONAL_DETAILS) {
        const validatedData = personalDetailsStepValidation.parse({
          firstName: data.firstName,
          lastName: data.lastName,
          dateOfBirth: data.dateOfBirth,
        });
        if (validatedData) {
          personalDetailsStepData.current = validatedData;
          setStep(STEP_REVIEW);
        }
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Onboarding Wizard</h1>
      <form onSubmit={onSubmit}>
        <Header currentStep={step} mode={mode} />
        <Step visible={step === STEP_EMAIL}>
          <Email />
        </Step>
        <Step visible={step === STEP_PERSONAL_DETAILS}>
          <PersonalDetails />
        </Step>
        <Step visible={step === STEP_REVIEW}>
          <Review
            formData={{
              ...emailStepData.current,
              ...personalDetailsStepData.current,
            }}
          />
        </Step>
        <Footer currentStep={step} onPrevious={onPrevious} />
      </form>
    </div>
  );
}
