"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { GraduationCap, CircleHelp, Loader2, AlertCircle } from "lucide-react";
import { loginAdmin } from "./actions/auth";
export default function LoginPage() {
  const [pin, setPin] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-md">
        <div className="flex flex-col items-center mb-6">
          <GraduationCap className="w-12 h-12 text-blue-600 mb-2" />
          <h1 className="text-2xl font-bold text-slate-800">Login Admin OSIS</h1>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-center">
            <InputOTP maxLength={6} value={pin} onChange={(value) => setPin(value)}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          {errorMessage && (
            <div className="flex items-center text-red-500 text-sm bg-red-50 p-3 rounded-lg">
              <AlertCircle className="w-4 h-4 mr-2" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={pin.length !== 6 || isLoading}
            className="w-full py-4 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                <span>Memvalidasi...</span>
              </>
            ) : (
              "Masuk Aplikasi"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}