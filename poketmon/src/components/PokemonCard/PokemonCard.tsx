import Image from "next/image";

type CardProps = {
  name: string;
  pokemonNum: number;
  pokemonImg: string;
  // onClickFn: React.MouseEventHandler<HTMLDivElement>;
};

function PokemonCard({
  name,
  pokemonNum,
  pokemonImg,
}: // onClickFn: handleCardClick,
CardProps) {
  return (
    <div
      className={
        "p-5 flex flex-col items-start justify-center h-52 border rounded-lg shadow-md hover:shadow-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:opacity-50 duration-300"
      }
      // onClick={handleCardClick}
    >
      <div className="relative flex items-center justify-center w-full h-1/2">
        <Image
          className="object-contain w-20 h-auto mb-4 aspect-auto"
          alt={name}
          src={pokemonImg}
          width={100}
          height={100}
        />
      </div>
      <h1 className="mb-2 text-xl font-semibold">{name}</h1>
      <p>도감번호 : {pokemonNum}</p>
    </div>
  );
}

export default PokemonCard;
