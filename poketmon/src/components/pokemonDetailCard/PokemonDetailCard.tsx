import { PokemonsType } from "@/types/pokemonType";
import Image from "next/image";
import { ComponentProps } from "react";
import { changeNameToChips } from "./changeNameToChips";

function PokemonDetailCard({ pokemon }: { pokemon: PokemonsType | undefined }) {
  const hadnleBack: ComponentProps<"button">["onClick"] = (): void => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <div className="p-4 flex flex-col items-center overflow-y-scroll">
      <h1 className="text-3xl font-semibold mb-2">{pokemon?.korean_name}</h1>
      <h2 className="text-xl font-semibold mb-2">
        도감 번호 : {pokemon?.id.toString().padStart(4, "0")}
      </h2>
      <div className="relative flex items-center justify-center w-full h-1/2">
        <Image
          className="object-cover w-40 h-auto mb-4 aspect-auto"
          alt={"포켓몬"}
          src={pokemon?.sprites.front_default || "/"}
          width={100}
          height={100}
        />
      </div>
      <p>이름 : {pokemon?.korean_name}</p>
      <p>
        키 : {pokemon?.height} 몸무게 : {pokemon?.weight}
      </p>
      <p className="flex">
        타입 :{" "}
        {changeNameToChips({
          name: pokemon?.types[0].type.korean_name,
          type: "type",
        })}{" "}
        특성 :{" "}
        {pokemon?.abilities.map((ability) =>
          changeNameToChips({
            name: ability.ability.korean_name,
            type: "ability",
          })
        )}
      </p>
      <p>기술 :</p>
      <p className="flex flex-wrap p-4">
        {pokemon?.moves.map((move) =>
          changeNameToChips({ name: move.move.korean_name, type: "skills" })
        )}
      </p>
      <button
        onClick={hadnleBack}
        className="w-24 h-12 rounded-lg text-white bg-blue-500 hover:opacity-90 active:opacity-70"
      >
        뒤로가기
      </button>
    </div>
  );
}

export default PokemonDetailCard;
