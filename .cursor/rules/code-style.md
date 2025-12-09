# Code Style

## General Rules

1. **No code comments** - Remove all code comments unless absolutely necessary
2. **Remove unused code** - Delete unused functions, variables, and imports
3. **Constants over strings** - Always use constants from `config/constants.ts`
4. **Function extraction** - Extract complex logic into standalone functions
5. **Error handling** - Use try-catch for async operations, show user-friendly errors

## Import Organization

```typescript
// 1. React and React-related
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 2. Third-party libraries
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";

// 3. Internal components
import { Header } from "./components/Header";

// 4. Internal utilities/hooks
import { useOnboardingStore } from "../store/onboardingStore";
import { validateStepEmail } from "../validation/validation";

// 5. Types
import type { Country } from "../types/types";

// 6. Constants
import { ONBOARDING_PATHS } from "../config/constants";
```
