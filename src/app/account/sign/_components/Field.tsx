interface FieldProps {
  register: any;
  label: string;
  name: string;
  type?: string;
  placeHolder?: string;
  required?: boolean;
  error?: any;
}

export default function Field({ register, label, name, type="text", placeHolder="", required=false, error=undefined }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <input {...register} type={type} name={name} id={name} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeHolder} required={required} />
      {error && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error}</p>}
    </div>
  );
}