import { type StepKey, STEP_EMAIL } from "./constants";

interface FooterProps {
  currentStep: StepKey;
  onPrevious: () => void;
}

export function Footer({ currentStep, onPrevious }: FooterProps) {
  const isFirstStep = currentStep === STEP_EMAIL;

  return (
    <div className="flex justify-between mt-4">
      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirstStep}
        className={isFirstStep ? "opacity-50 cursor-not-allowed" : ""}
      >
        Previous
      </button>
      <button type="submit">Next</button>
    </div>
  );
}
