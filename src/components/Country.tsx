import { GetCountriesQuery } from "@/gql/graphql";

interface CountryProps {
  country: GetCountriesQuery["countries"][number];
}

function Country({ country }: CountryProps) {
  return (
    <div className="grid grid-cols-3 gap-8 w-64">
      <span>{country.emoji}</span>
      <span>
        {country.name} ({country.code})
      </span>
      <span>{country.capital}</span>
    </div>
  );
}

export default Country;
