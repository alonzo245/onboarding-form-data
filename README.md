# Onboarding Wizard

A multi-step onboarding form wizard built with React, TypeScript, and Tailwind CSS. Features a dark theme, mobile-first responsive design, form validation, and a celebratory confetti animation upon successful submission.

## Features

- **Multi-step Form**: Step-by-step wizard with Email → Personal Details → Home Address → Review → Thank You
- **Form Validation**: Zod schema validation with error handling and display
- **State Management**: Zustand store for error management
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Theme**: Modern dark UI with consistent styling
- **Step Navigation**: Clickable step indicators for easy navigation between completed steps
- **Confetti Animation**: Celebratory confetti effect on successful submission
- **Error Handling**: Centralized error store with field-level error display
- **Type Safety**: Full TypeScript support with defined types

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **Zod** - Schema validation
- **React Router** - Routing
- **React Query** - Data fetching and mutations
- **Canvas Confetti** - Confetti animation library

## Project Structure

```
src/
├── routes/
│   └── onboarding/
│       ├── OnboardingWizard.tsx    # Main wizard component
│       ├── Header.tsx              # Step indicator with navigation
│       ├── Footer.tsx               # Previous/Next buttons
│       ├── hooks.tsx                # Form submission logic
│       ├── queries.ts               # API submission functions
│       ├── types.ts                 # TypeScript type definitions
│       ├── validation.ts            # Zod validation schemas
│       ├── constants.tsx            # Step constants
│       ├── config.ts                # Step configuration
│       ├── store/
│       │   └── errorsStore.ts       # Zustand error store
│       ├── steps/
│       │   ├── Email.tsx
│       │   ├── PersonalDetails.tsx
│       │   ├── HomeAddress.tsx
│       │   ├── Review.tsx
│       │   └── ThankYou.tsx
│       └── common/
│           └── Step.tsx             # Step wrapper component
├── main.tsx                         # App entry point
└── router.tsx                        # React Router configuration
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Starts the development server at `http://localhost:5173`

## Build

```bash
npm run build
```

Builds the project for production.

## Preview

```bash
npm run preview
```

Preview the production build locally.

## Testing

```bash
npm test          # Run tests in watch mode
npm run test:ui   # Run tests with UI
npm run test:run  # Run tests once
```

## Key Features

### Step Navigation

- Users can click on previous steps in the header to navigate back
- Steps are disabled when on the Thank You page
- Active step is automatically centered on mobile view

### Form Validation

- Real-time validation using Zod schemas
- Field-level error messages displayed below inputs
- Errors are stored in Zustand store for easy access

### Responsive Design

- Mobile-first approach
- Horizontal scrolling step indicator on mobile
- Full-width inputs on mobile, constrained width on desktop
- Touch-friendly button sizes

### State Management

- Form data stored in refs to persist across step navigation
- Error state managed in Zustand store
- Form resets after successful submission

### Submission

- Random 50% success/fail simulation for testing
- Mock API endpoint with simulated delay
- Success leads to Thank You page with confetti
- Failure shows error and keeps user on Review step

## Form Steps

1. **Email**: Email address input with validation
2. **Personal Details**: First name, last name, and date of birth
3. **Home Address**: Street address, city, state, and ZIP code
4. **Review**: Summary of all entered information
5. **Thank You**: Success page with confetti animation

## Configuration

Step configuration and default values can be modified in `src/routes/onboarding/config.ts`.

## Type Definitions

All form data types are defined in `src/routes/onboarding/types.ts`:

- `EmailStepData`
- `PersonalDetailsStepData`
- `HomeAddressStepData`

## Validation Schemas

Validation schemas are defined in `src/routes/onboarding/validation.ts` using Zod:

- `emailStepValidation`
- `personalDetailsStepValidation`
- `homeAddressStepValidation`
