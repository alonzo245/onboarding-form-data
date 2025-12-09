# Testing

## Best Practices

1. **Test location** - Tests in `__tests__/` directories next to components
2. **Test utilities** - Use `test-utils.tsx` for common test setup
3. **Query client** - Create test QueryClient with `retry: false`
4. **No providers needed** - Zustand doesn't require providers in tests
