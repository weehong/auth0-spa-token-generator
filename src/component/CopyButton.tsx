"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  accessToken: string;
}

const copyAccessTokenToClipboard = (accessToken: string) => {
  navigator.clipboard.writeText(accessToken);
};

export default function CopyButton({
  children,
  accessToken,
  ...props
}: ButtonProps) {
  return (
    <button
      className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      {...props}
      onClick={() => copyAccessTokenToClipboard(accessToken)}
    >
      {children}
    </button>
  );
}
