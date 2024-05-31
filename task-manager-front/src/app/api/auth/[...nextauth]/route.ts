import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

/**
 * authOptions
 * Funcion para la conexion con el google provider
 */
export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: "487793401549-ibakkrhr4lvlfuikdmohp4n75o4mq2i2.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
