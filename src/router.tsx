import { createBrowserRouter } from "react-router-dom";
import { OnboardingWizard } from "./routes/onboarding-form-data/OnboardingWizard";
import { ROOT_PATH } from "./constants";

// GitHub Pages base path: /onboarding-form-data/
const basePath = import.meta.env.BASE_URL || ROOT_PATH;

export const router = createBrowserRouter(
  [
    {
      path: ROOT_PATH,
      element: <OnboardingWizard />,
    },
  ],
  {
    basename: basePath === ROOT_PATH ? undefined : basePath.replace(/\/$/, ""),
  }
);
