import { createBrowserRouter } from "react-router-dom";
import { OnboardingWizard } from "./routes/onboarding-wizard/OnboardingWizard";
import { ONBOARDING_PATHS, ROOT_PATH } from "./constants";

const basePath = import.meta.env.BASE_URL || ROOT_PATH;

export const router = createBrowserRouter(
  [
    {
      path: ONBOARDING_PATHS.BASE,
      element: <OnboardingWizard />,
    },
  ],
  {
    basename: basePath === ROOT_PATH ? undefined : basePath.replace(/\/$/, ""),
  }
);
