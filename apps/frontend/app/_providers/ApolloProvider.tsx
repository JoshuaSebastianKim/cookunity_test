import { useMemo } from "react";
import {
  ApolloClient,
  ApolloProvider as Provider,
  HttpLink,
  InMemoryCache,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getSession } from "next-auth/react";

const httpLink = new HttpLink({
  uri: "http://localhost:3001/graphql",
});

export default function ApolloProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = useMemo(() => {
    const authMiddleware = setContext(async (_operation, { headers }) => {
      const session = await getSession();

      return {
        headers: {
          ...headers,
          authorization: `Bearer ${session?.auth_token}`,
        },
      };
    });

    return new ApolloClient({
      link: from([authMiddleware, httpLink]),
      cache: new InMemoryCache(),
    });
  }, []);

  return <Provider client={client}>{children}</Provider>;
}
