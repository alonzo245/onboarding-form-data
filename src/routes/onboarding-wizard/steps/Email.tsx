import { FieldError, Input, Label, TextField } from "react-aria-components";
import { useErrorsStore } from "../store/errorsStore";

export function Email() {
  const getFieldError = useErrorsStore((state) => state.getFieldError);
  const emailError = getFieldError("email");

  return (
    <div>
      <h2>Email</h2>
      <TextField name="email" type="email" isRequired>
        <Label>Email</Label>
        <Input />
        {emailError && (
          <div className="text-red-500 text-sm mt-1">{emailError}</div>
        )}
      </TextField>
    </div>
  );
}
