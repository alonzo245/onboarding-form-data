# State Management (Zustand)

## Best Practices

1. **Always use granular selectors** - Subscribe only to the specific fields/components needed

   ```typescript
   // ✅ Good - subscribes only to email
   const email = useOnboardingStore((s) => s.data.email);

   // ❌ Bad - subscribes to entire data object
   const data = useOnboardingStore((s) => s.data);
   ```

2. **Use `getState()` for handlers** - Avoid subscriptions in event handlers

   ```typescript
   // ✅ Good
   const handleNext = () => {
     const state = useOnboardingStore.getState();
     // use state.data...
   };
   ```

3. **Memoize computed values** - Use `useMemo` for derived state

   ```typescript
   const isValid = useMemo(() => validateStep(data), [data]);
   ```

4. **Store structure** - Keep store in `store/` directory with descriptive names
   - Use `persist` middleware for localStorage persistence
   - Extract complex logic into standalone functions
