import { redirect } from "next/navigation";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import CopyButton from "@/component/CopyButton";
import { auth0 } from "@/libs/auth/auth0";

export default async function Dashboard() {
  const session = await auth0.getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="container mx-auto sm:px-6 lg:px-8">
      <div className="flex h-screen flex-col items-center justify-center gap-y-4 p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex w-full justify-end gap-x-2">
          <CopyButton accessToken={session.tokenSet.accessToken as string}>
            Copy Access Token
          </CopyButton>
          <a
            href="/auth/logout"
            className="rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Logout
          </a>
        </div>
        <SyntaxHighlighter
          language="json"
          style={docco}
          className="w-full overflow-y-auto rounded-md bg-gray-100 p-4 break-words whitespace-pre-wrap"
        >
          {JSON.stringify(session, null, 2)}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
