"use client";

import { useParams } from "next/navigation";

function CountryPageClient() {
  const params = useParams<{ code: string }>();

  return <div>aaa</div>;
}

export default CountryPageClient;
