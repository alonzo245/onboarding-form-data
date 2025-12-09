import { createBrowserRouter } from "react-router-dom";
import { OnboardingWizard } from "./routes/onboarding-form-data/OnboardingWizard";
import { ROOT_PATH } from "./constants";

// GitHub Pages base path: https://alonzo245.github.io/onboarding-form-data/
const GITHUB_PAGES_BASE = "/onboarding-form-data";

export const router = createBrowserRouter(
  [
    {
      path: ROOT_PATH,
      element: <OnboardingWizard />,
    },
  ],
  {
    basename: GITHUB_PAGES_BASE,
  }
);
