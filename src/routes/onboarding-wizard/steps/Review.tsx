export function Review({ formData }: { formData: any }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-100">
        Review
      </h2>
      <p className="text-sm sm:text-base text-gray-400">
        Please review your information before submitting
      </p>
      <div className="bg-gray-700 rounded-lg p-4 sm:p-6 border border-gray-600">
        <pre className="text-xs sm:text-sm text-gray-300 whitespace-pre-wrap break-words overflow-x-auto">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
}
