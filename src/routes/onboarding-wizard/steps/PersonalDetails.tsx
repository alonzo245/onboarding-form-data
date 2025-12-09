import { useErrorsStore } from "../store/errorsStore";

export function PersonalDetails() {
  const getFieldError = useErrorsStore((state) => state.getFieldError);

  return (
    <div>
      <h2>Personal Details</h2>
      <div>
        <input type="text" placeholder="First Name" name="firstName" />
        {getFieldError("firstName") && (
          <div className="text-red-500 text-sm mt-1">
            {getFieldError("firstName")}
          </div>
        )}
      </div>
      <div>
        <input type="text" placeholder="Last Name" name="lastName" />
        {getFieldError("lastName") && (
          <div className="text-red-500 text-sm mt-1">
            {getFieldError("lastName")}
          </div>
        )}
      </div>
      <div>
        <input type="date" placeholder="Date of Birth" name="dateOfBirth" />
        {getFieldError("dateOfBirth") && (
          <div className="text-red-500 text-sm mt-1">
            {getFieldError("dateOfBirth")}
          </div>
        )}
      </div>
    </div>
  );
}
