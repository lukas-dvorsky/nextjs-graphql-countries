export default async function Home() {
  // const data = await client.request<GetCountriesQuery>(GetCountriesDocument);

  return (
    <main className="h-screen w-screen flex flex-col items-center overflow-scroll">
      {/* Search country */}
      {/* <Navbar searchBarData={data} /> */}
      {/* Country games */}

      {/* {data.countries.map((country) => (
        <Country key={country.code} country={country}></Country>
      ))} */}
    </main>
  );
}
