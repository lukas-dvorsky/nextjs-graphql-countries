"use client";

import { GetCountriesQuery } from "@/gql/graphql";
import SearchBar from "./SearchBar";

interface NavbarProps {
  searchBarData: GetCountriesQuery;
}

function Navbar({ searchBarData }: NavbarProps) {
  return (
    <nav className="w-screen shadow-2xl flex justify-center">
      <SearchBar
        className="w-96"
        data={searchBarData.countries}
        searchBy={["name", "code", "capital"]}
        showData={["emoji", "name"]}
        action={(country) => console.log(country)}
      />
    </nav>
  );
}

export default Navbar;
