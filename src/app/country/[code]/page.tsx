import NameValuePair from "@/components/NameValuePair";
import {
  GetCountryByCodeDocument,
  GetCountryByCodeQuery,
  GetCountryByCodeQueryVariables,
} from "@/gql/graphql";
import { client } from "@/lib/graphql/client";
import CountryData from "./CountryData";
import Map from "@/components/UI/Map";

interface CountryPageProps {
  params: Promise<{ code: string }>;
}

async function CountryPage({ params }: CountryPageProps) {
  const { code } = await params;
  const countryData = await client.request<
    GetCountryByCodeQuery,
    GetCountryByCodeQueryVariables
  >(GetCountryByCodeDocument, { code });

  const country = countryData.country;
  console.log(country);

  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${countryData.country?.capital}&format=json`,
    {
      headers: {
        "User-Agent": "my-app",
      },
    },
  );

  const data = await response.json();
  console.log(data);

  return (
    <main className="flex">
      <CountryData country={country} code={code} />
      {data && <Map lat={data[0].lat} lng={data[0].lon}></Map>}
    </main>
  );
}

export default CountryPage;
