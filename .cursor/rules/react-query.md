# React Query

## Best Practices

1. **Query configuration** - Set appropriate `staleTime` and `gcTime`

   ```typescript
   useQuery({
     queryKey: ["countries"],
     queryFn: fetchCountries,
     staleTime: 10 * 60 * 1000, // 10 minutes
   });
   ```

2. **Query keys** - Use consistent, descriptive query keys
3. **Select function** - Use `select` to transform data and prevent unnecessary rerenders
4. **Default options** - Configure QueryClient with sensible defaults in `main.tsx`
