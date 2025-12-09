import { useRef } from "react";
import { ZodError } from "zod";
import {
  emailStepValidation,
  personalDetailsStepValidation,
  homeAddressStepValidation,
} from "./validation";
import {
  STEP_EMAIL,
  STEP_PERSONAL_DETAILS,
  STEP_HOME_ADDRESS,
  STEP_REVIEW,
  STEP_THANK_YOU,
  type StepKey,
} from "./constants";
import { useErrorsStore } from "./store/errorsStore";
import { submitOnboardingData } from "./queries";

interface UseOnboardingSubmitProps {
  step: StepKey;
  setStep: (step: StepKey) => void;
  emailStepData: React.MutableRefObject<{ email: string }>;
  personalDetailsStepData: React.MutableRefObject<{
    firstName: string;
    lastName: string;
    dateOfBirth: string;
  }>;
  homeAddressStepData: React.MutableRefObject<{
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    zip: string;
  }>;
}

export function useOnboardingSubmit({
  step,
  setStep,
  emailStepData,
  personalDetailsStepData,
  homeAddressStepData,
}: UseOnboardingSubmitProps) {
  const { setZodError, clearErrors } = useErrorsStore();

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

  return { handleOnSubmit };
}
