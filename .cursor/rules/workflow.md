# Git & Workflow

## Commit Messages

- Use clear, descriptive commit messages
- Reference specific files/components when relevant

## GitHub Actions

- Build uses `npm install` (not `npm ci`) to ensure optional dependencies are installed
- BASE_URL is set to `/onboarding-wizard/` for GitHub Pages deployment

## When Making Changes

1. **Check for rerenders** - Ensure changes don't cause unnecessary component rerenders
2. **Update constants** - If adding new paths/strings, add to constants file
3. **Maintain type safety** - Keep TypeScript strict, avoid `any`
4. **Test changes** - Run `npm run test:run` before committing
5. **Optimize subscriptions** - Review Zustand selectors for granularity
6. **Check performance** - Use React DevTools Profiler if needed
