interface NameUrl {
  korean_name: string;
  name: string;
  url: string;
}

interface Ability {
  ability: NameUrl;
  is_hidden: boolean;
  slot: number;
}

interface GameIndex {
  game_index: number;
  version: NameUrl;
}

interface versionDetails {
  rarity: number;
  version: { name: string; url: string };
}

interface Held_Items {
  item: { name: string; url: string };
  version_details: versionDetails[];
}

interface MoveLearnMethod {
  level_learned_at: number;
  move_learn_method: NameUrl;
  version_group: NameUrl;
}

interface Move {
  move: NameUrl;
  version_group_details: MoveLearnMethod[];
}

interface Sprite {
  front_default: string;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
}

interface OtherSprites {
  dream_world: {
    front_default: string | null;
    front_female: string | null;
  };
  home: Sprite;
  official_artwork: {
    front_default: string | null;
    front_shiny: string | null;
  };
  showdown: Sprite;
}

interface GenerationSprites {
  "generation-i": {
    "red-blue": {
      back_default: string | null;
      back_gray: string | null;
      back_transparent: string | null;
      front_default: string | null;
      front_gray: string | null;
      front_transparent: string | null;
    };
    yellow: {
      back_default: string | null;
      back_gray: string | null;
      back_transparent: string | null;
      front_default: string | null;
      front_gray: string | null;
      front_transparent: string | null;
    };
  };
  "generation-ii": {
    crystal: Sprite & {
      back_shiny_transparent: string | null;
      back_transparent: string | null;
      front_shiny_transparent: string | null;
      front_transparent: string | null;
    };
    gold: Sprite & {
      front_transparent: string | null;
    };
    silver: Sprite & {
      front_transparent: string | null;
    };
  };
  "generation-iii": {
    emerald: {
      front_default: string | null;
      front_shiny: string | null;
    };
    "firered-leafgreen": Sprite;
    "ruby-sapphire": Sprite;
  };
  "generation-iv": {
    "diamond-pearl": Sprite;
    "heartgold-soulsilver": Sprite;
    platinum: Sprite;
  };
  "generation-v": {
    "black-white": {
      animated: Sprite;
    } & Sprite;
  };
  "generation-vi": {
    "omegaruby-alphasapphire": {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    "x-y": {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
  };
  "generation-vii": {
    icons: {
      front_default: string | null;
      front_female: string | null;
    };
    "ultra-sun-ultra-moon": {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
  };
  "generation-viii": {
    icons: {
      front_default: string | null;
      front_female: string | null;
    };
  };
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface Type {
  slot: number;
  type: {
    korean_name: string;
    name: string;
    url: string;
  };
}

export type PokemonsType = {
  abilities: Ability[];
  base_experience: number;
  cires: { latest: string; legacy: string };
  forms: NameUrl[];
  game_indices: GameIndex[];
  height: number;
  held_items: Held_Items[];
  id: number;
  is_default: boolean;
  korean_name: string;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: any[];
  past_types: any[];
  species: NameUrl;
  sprites: Sprite;
  other: OtherSprites;
  versions: GenerationSprites;
  stats: Stat[];
  types: Type[];
  weight: number;
};
