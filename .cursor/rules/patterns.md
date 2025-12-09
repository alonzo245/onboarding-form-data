# Common Patterns

## Form Handling

- Use controlled components with Zustand state
- Validate on blur and on submit
- Show errors only after field is touched
- Use debouncing for async validation (e.g., email prefill)

## Navigation

- Protect routes - redirect users who try to skip steps
- Track `furthestStep` to control step access
- Use constants for all navigation paths

## Data Persistence

- Zustand persist middleware handles localStorage
- Store only necessary data (data + furthestStep)
- Clear persisted data on successful submission
