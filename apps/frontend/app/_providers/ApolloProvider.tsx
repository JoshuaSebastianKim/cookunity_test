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
import { Session } from "next-auth";

const httpLink = new HttpLink({
  uri: "/graphql",
});

export let session: Session | null;

export default function ApolloProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = useMemo(() => {
    const authMiddleware = setContext(async (_operation, { headers }) => {
      if (!session) {
        session = await getSession();
      }

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
