"use client";

import AuthContext from "./AuthContext";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return <AuthContext>{children}</AuthContext>;
}
