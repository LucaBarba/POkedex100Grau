import { DetailsPage, DetailsSection, Img } from "../styles/details";

import { capitalizeName } from "../utils";

import DetailsList from "./detailList";

function PokemonDetails({ selected, setSelected }) {
  const imgSrc = selected?.image_url || "";

  if (selected === null) {
    return <></>;
  }

  return (
    <DetailsPage
      onClick={(e) => {
        e.stopPropagation();
        setSelected(null);
      }}
    >
      <DetailsSection
        onClick={(e) => e.stopPropagation()}
        className={selected.kind.split(";")[0]}
      >
        <Img src={imgSrc} />
        <DetailsList
          details={{
            Nome: capitalizeName(selected.name),
            Id: selected.id,
            Tipo: selected.kind
              .split(";")
              .map((type) => capitalizeName(type))
              .join(" & "),
            Altura: selected.height,
            Peso: selected.weight,
          }}
        ></DetailsList>
      </DetailsSection>
    </DetailsPage>
  );
}

export default PokemonDetails;
