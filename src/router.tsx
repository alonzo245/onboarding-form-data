import { createBrowserRouter, Navigate } from "react-router-dom";
import { OnboardingWizard } from "./routes/onboarding-form-data/OnboardingWizard";
import { ROOT_PATH } from "./constants";

// GitHub Pages base path
export const GITHUB_PAGES_BASE = "/onboarding-form-data";

export const router = createBrowserRouter([
  {
    path: ROOT_PATH,
    element: <Navigate to={`${GITHUB_PAGES_BASE}/email`} replace />,
  },
  {
    path: `${GITHUB_PAGES_BASE}/:step`,
    element: <OnboardingWizard />,
  },
]);
