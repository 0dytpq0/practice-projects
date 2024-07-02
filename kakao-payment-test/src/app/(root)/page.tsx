"use client";

import { postDataToKakaoPay } from "@/services/kakaopay.service";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data } = useQuery({
    queryKey: ["payment"],
    queryFn: () => postDataToKakaoPay(),
  });

  console.log("data", data);
  return <main>asd</main>;
}
