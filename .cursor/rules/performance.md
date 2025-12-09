# Performance Optimization

## Component Optimization

1. **Memoize components** - Use `React.memo()` for components that don't need frequent rerenders

   ```typescript
   const WizardHeader = memo(() => <header>...</header>);
   ```

2. **Conditional subscriptions** - Subscribe only to data needed for current step

   ```typescript
   // ✅ Good - only subscribes to current step's data
   const currentStepData = useOnboardingStore((s) => {
     if (activePath === ONBOARDING_PATHS.EMAIL) return s.data.email;
     // ...
   });
   ```

3. **Memoize expensive computations** - Use `useMemo` for validation and derived state

## Avoid Unnecessary Rerenders

- Don't subscribe to entire objects when you only need specific fields
- Use `getState()` in handlers instead of subscribing
- Memoize objects passed as props (e.g., `countriesState`)
