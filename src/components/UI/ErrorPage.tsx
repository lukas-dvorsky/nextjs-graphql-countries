interface ErrorPageProps {
  code: number;
  message: string;
}

function ErrorPage({ code, message }: ErrorPageProps) {
  return (
    <div className="flex flex-col gap-4 m-auto h-screen w-screen  items-center justify-center">
      <h1 className="text-3xl font-bold">{code}</h1>
      <p>{message}</p>
    </div>
  );
}

export default ErrorPage;
