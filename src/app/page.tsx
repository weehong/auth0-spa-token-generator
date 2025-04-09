import { redirect } from "next/navigation";

import { auth0 } from "@/libs/auth/auth0";

export default async function Home() {
  const session = await auth0.getSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="container mx-auto sm:px-6 lg:px-8">
      <div className="flex h-screen flex-col items-center justify-center gap-y-4">
        <h1 className="text-2xl font-bold">Auth0 SPA Token Generator</h1>
        <a
          href="/auth/login"
          className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Login
        </a>
      </div>
    </div>
  );
}
