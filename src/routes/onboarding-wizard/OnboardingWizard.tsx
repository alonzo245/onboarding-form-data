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

export function OnboardingWizard() {
  const [step, setStep] = useState<string>("email");

  const emailStepData = useRef<{ email: string }>({ email: "" });
  const personalDetailsStepData = useRef<{
    firstName: string;
    lastName: string;
    dateOfBirth: string;
  }>({ firstName: "", lastName: "", dateOfBirth: "" });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    try {
      if (step === "email") {
        const validatedData = emailStepValidation.parse({ email: data.email });
        if (validatedData) {
          emailStepData.current = validatedData;
          setStep("personalDetails");
        }
        return;
      } else if (step === "personalDetails") {
        const validatedData = personalDetailsStepValidation.parse({
          firstName: data.firstName,
          lastName: data.lastName,
          dateOfBirth: data.dateOfBirth,
        });
        if (validatedData) {
          personalDetailsStepData.current = validatedData;
          setStep("review");
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
        <Header />
        <Step visible={step === "email"}>
          <Email />
        </Step>
        <Step visible={step === "personalDetails"}>
          <PersonalDetails />
        </Step>
        <Step visible={step === "review"}>
          <Review
            formData={{
              ...emailStepData.current,
              ...personalDetailsStepData.current,
            }}
          />
        </Step>
        <Footer />
      </form>
    </div>
  );
}
