"use client";

import ApolloProvider from "./ApolloProvider";
import AuthContext from "./AuthContext";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <AuthContext>
      <ApolloProvider>{children}</ApolloProvider>
    </AuthContext>
  );
}
