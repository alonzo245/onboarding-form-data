# Routing

## Best Practices

1. **Use constants** - All path strings must come from `config/constants.ts`

   ```typescript
   // ✅ Good
   import { ONBOARDING_PATHS } from "../config/constants";
   <Link to={ONBOARDING_PATHS.EMAIL} />

   // ❌ Bad
   <Link to="/onboarding/email" />
   ```

2. **Route organization** - Define routes in `router.tsx` using constants
