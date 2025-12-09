# Validation

## Best Practices

1. **Use Zod schemas** - All validation should use Zod
2. **Schema organization** - Keep schemas in `validation/validation.ts`
3. **Validation functions** - Export step-specific validation functions
   - `validateStepEmail(email: string): string | null`
   - `validateStepPersonal(data): Record<string, string>`
   - `validateStepAddress(address, countries): Record<string, string>`
   - `validateStepBusiness(business, countries): Record<string, string>`
