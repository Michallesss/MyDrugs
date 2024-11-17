'use client';
// React 
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
// Libraries
import { cn } from "@/lib/utils";

function Loader({ text }: { text: string }) {
  return (
    <div className="flex items-center space-x-2">
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      <p>{text}</p>
    </div>
  );
}

interface SubmitButtonProps {
  text?: string;
  children?: React.ReactNode;
  loadingText?: string;
  className?: string;
  loading?: boolean;
}

export default function SubmitButton({
  text,
  children,
  loadingText,
  loading,
}: SubmitButtonProps) {
  const status = useFormStatus();
  return (
    <button 
      type="submit" 
      aria-disabled={status.pending || loading}
      disabled={status.pending || loading}
      className={cn("w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800")}
    >
      {status.pending || loading ? <Loader text={loadingText || "Loading..."} /> : text || children}
    </button>
  );
}