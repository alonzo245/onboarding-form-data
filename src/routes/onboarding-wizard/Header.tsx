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
    <div className="border-b border-gray-700 pb-4 sm:pb-6">
      <div className="flex flex-wrap gap-2 sm:gap-4">
        {Object.keys(stepsConfig).map((stepName, index) => {
          const isActive = currentStep === stepName;
          const isCompleted = false; // Could be enhanced to track completed steps

          return (
            <div
              key={stepName}
              className={clsx(
                "flex items-center gap-2 text-sm sm:text-base font-medium transition-colors",
                isActive ? "text-blue-400" : "text-gray-400"
              )}
            >
              {index > 0 && (
                <span
                  className={clsx(
                    "hidden sm:block w-8 h-0.5",
                    isActive || isCompleted ? "bg-blue-500" : "bg-gray-600"
                  )}
                />
              )}
              <div
                className={clsx(
                  "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 transition-colors",
                  isActive
                    ? "border-blue-500 bg-blue-900/30 text-blue-400"
                    : "border-gray-600 bg-gray-700 text-gray-400"
                )}
              >
                {index + 1}
              </div>
              <span className="hidden sm:inline capitalize">
                {stepName.replace(/([A-Z])/g, " $1").trim()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
