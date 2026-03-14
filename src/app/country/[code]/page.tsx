import CountryPageClient from "./CountryPageClient";

interface CountryPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function CountryPage({ searchParams }: CountryPageProps) {
  const countryCode = (await searchParams).code;

  return (
    <>
      {countryCode}
      <CountryPageClient />
    </>
  );
}

export default CountryPage;
