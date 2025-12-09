import clsx from "clsx";
import { stepsConfig } from "./config";

export function Header({
  currentStep,
  mode,
}: {
  currentStep: string;
  mode: string;
}) {
  return (
    <div className="flex gap-4 my-4">
      {Object.keys(stepsConfig).map((stepName) => (
        <div key={stepName}>
          <div
            className={clsx(
              currentStep === stepName ? "text-blue-500" : "text-gray-500"
            )}
          >
            {stepName}
          </div>
        </div>
      ))}
    </div>
  );
}
