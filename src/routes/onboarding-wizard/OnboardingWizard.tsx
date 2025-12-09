import { useRef, useState } from "react";
import { Email } from "./steps/Email";
import { PersonalDetails } from "./steps/PersonalDetails";
import { HomeAddress } from "./steps/HomeAddress";
import { Footer } from "./Footer";
import { Header } from "./Header";
import {
  emailStepValidation,
  personalDetailsStepValidation,
  homeAddressStepValidation,
} from "./validation";
import { Review } from "./steps/Review";
import { Step } from "./common/Step";
import {
  STEP_EMAIL,
  STEP_MODE_CREATE,
  STEP_PERSONAL_DETAILS,
  STEP_HOME_ADDRESS,
  STEP_REVIEW,
  type StepKey,
  STEP_THANK_YOU,
} from "./constants";
import { Form } from "react-aria-components";
import { useErrorsStore } from "./store/errorsStore";
import { ZodError } from "zod";
import { submitOnboardingData } from "./queries";

export function OnboardingWizard() {
  const [step, setStep] = useState<StepKey>(STEP_EMAIL);
  const [mode, setMode] = useState(STEP_MODE_CREATE);
  const { setZodError, clearErrors } = useErrorsStore();

  const emailStepData = useRef<{ email: string }>({ email: "" });
  const personalDetailsStepData = useRef<{
    firstName: string;
    lastName: string;
    dateOfBirth: string;
  }>({ firstName: "", lastName: "", dateOfBirth: "" });
  const homeAddressStepData = useRef<{
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    zip: string;
  }>({ addressLine1: "", city: "", state: "", zip: "" });

  const onPrevious = () => {
    if (step === STEP_PERSONAL_DETAILS) {
      setStep(STEP_EMAIL);
    } else if (step === STEP_HOME_ADDRESS) {
      setStep(STEP_PERSONAL_DETAILS);
    } else if (step === STEP_REVIEW) {
      setStep(STEP_PERSONAL_DETAILS);
    }
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      if (step === STEP_EMAIL) {
        const validatedData = emailStepValidation.parse({ email: data.email });
        if (validatedData) {
          clearErrors();
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
          clearErrors();
          personalDetailsStepData.current = validatedData;
          setStep(STEP_HOME_ADDRESS);
        }
        return;
      } else if (step === STEP_HOME_ADDRESS) {
        const validatedData = homeAddressStepValidation.parse({
          addressLine1: data.addressLine1,
          addressLine2: data.addressLine2 || undefined,
          city: data.city,
          state: data.state,
          zip: data.zip,
        });
        if (validatedData) {
          homeAddressStepData.current = validatedData;
          setStep(STEP_REVIEW);
        }
        return;
      } else if (step === STEP_REVIEW) {
        await submitOnboardingData({
          ...emailStepData.current,
          ...personalDetailsStepData.current,
          ...homeAddressStepData.current,
        });
        clearErrors();
        setStep(STEP_THANK_YOU);
      }
    } catch (error) {
      console.error(error);
      if (error instanceof ZodError) {
        setZodError(error);
      }
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
            <Header currentStep={step} mode={mode} />
            <div className="mt-6 sm:mt-8">
              <Step visible={step === STEP_EMAIL}>
                <Email />
              </Step>
              <Step visible={step === STEP_PERSONAL_DETAILS}>
                <PersonalDetails />
              </Step>
              <Step visible={step === STEP_HOME_ADDRESS}>
                <HomeAddress />
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
            </div>
            <Footer currentStep={step} onPrevious={onPrevious} />
          </div>
        </Form>
      </div>
    </div>
  );
}
