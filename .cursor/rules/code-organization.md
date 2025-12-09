# Code Organization

## Directory Structure

```
src/
  components/onboarding-wizard/
    components/     # Reusable UI components (Header, Footer, DatePicker)
    config/         # Configuration files (constants, config)
    hooks/          # Custom hooks
    queries/        # React Query hooks
    steps/          # Step components (Email, PersonalDetails, etc.)
    store/          # Zustand store
    types/          # TypeScript type definitions
    validation/     # Zod validation schemas and functions
```

## File Naming

- Components: PascalCase (e.g., `Email.tsx`, `PersonalDetails.tsx`)
- Utilities/Config: camelCase (e.g., `constants.ts`, `config.ts`)
- Tests: `*.test.tsx` in `__tests__/` directories
- Types: `types.ts` in respective directories
