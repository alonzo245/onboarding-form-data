import { useErrorsStore } from "../store/errorsStore";

export function PersonalDetails() {
  const getFieldError = useErrorsStore((state) => state.getFieldError);

  return (
    <div className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-100">
        Personal Details
      </h2>
      <div className="space-y-4 sm:space-y-5">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="First Name"
            name="firstName"
            className="w-full px-3 py-2 sm:py-2.5 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base sm:text-sm"
          />
          {getFieldError("firstName") && (
            <div className="text-red-400 text-sm mt-1.5">
              {getFieldError("firstName")}
            </div>
          )}
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Last Name"
            name="lastName"
            className="w-full px-3 py-2 sm:py-2.5 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base sm:text-sm"
          />
          {getFieldError("lastName") && (
            <div className="text-red-400 text-sm mt-1.5">
              {getFieldError("lastName")}
            </div>
          )}
        </div>
        <div>
          <label
            htmlFor="dateOfBirth"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Date of Birth
          </label>
          <input
            id="dateOfBirth"
            type="date"
            name="dateOfBirth"
            className="w-full px-3 py-2 sm:py-2.5 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base sm:text-sm"
          />
          {getFieldError("dateOfBirth") && (
            <div className="text-red-400 text-sm mt-1.5">
              {getFieldError("dateOfBirth")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
