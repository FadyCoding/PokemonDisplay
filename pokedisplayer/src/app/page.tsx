import Image from "next/image";

// Components hierarchy
// Pokemon Filter : contains the entire app
// Search Bar : receives the user output
// Validation Button : validates the user input and fetches the corresponding pokemon data (img and name)
// Pokemon Name : displays the pokemon name
// Pokemon Image  : displays the pokemon image

function PokemonFilter() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SearchBar />
      <ValidationButton />
    </div>
  );
}

function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Enter a Pokemon name"
      className="border-2 border-gray-300 rounded-lg p-2"
    />
  );
}

function ValidationButton() {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">
      Search
    </button>
  );
}

function PokemonRow({ pokemons }) {
  const name = pokemons.stocked ? (
    pokemons.name
  ) : (
    <span className="bg-yellow-500">{pokemons.name}</span>
  );
  const img = pokemons.stocked ? (
    pokemons.img
  ) : (
    <span className="bg-yellow-500">{pokemons.img}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{img}</td>
    </tr>
  );
}

function PokemonTable({ pokemons }) {
  const rows = [];
  pokemons.forEach((pokemon) => {
    rows.push(
      <PokemonRow key={pokemon.name} name={pokemon.name} img={pokemon.img} />
    );
  });

  return <div className="flex flex-col items-center justify-center"></div>;
}

function FilterablePokemonTable({ pokemons }) {
  return (
    <div className="flex flex-col items-center justify-center">
      name_pokemon
    </div>
  );
}

const PokemonList = [
  { name: "bulbasaur", img: "/assets/bulbasaur.jpg" },
  { name: "charmander", img: "/assets/charmander.jpg" },
  { name: "squirtle", img: "/assets/squirtle.jpg" },
];

export default function Home() {
  return <PokemonFilter />;
}
