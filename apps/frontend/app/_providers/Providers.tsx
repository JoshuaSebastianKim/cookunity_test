"use client";

import ApolloProvider from "./ApolloProvider";
import AuthContext from "./AuthContext";
import { CardProvider } from "./CardProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <AuthContext>
      <ApolloProvider>
        <CardProvider>{children}</CardProvider>
      </ApolloProvider>
    </AuthContext>
  );
}
