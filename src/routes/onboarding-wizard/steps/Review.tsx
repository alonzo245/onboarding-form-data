export function Review({ formData }: { formData: any }) {
  return (
    <div>
      <h2>Review</h2>
      <p>Review your information</p>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
}
