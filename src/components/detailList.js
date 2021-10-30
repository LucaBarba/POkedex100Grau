import {
  DetailsListStyle,
  ColumnDiv,
  HeaderStyle,
  ValueStyle,
} from "../styles/details";

function DetailsList({ details }) {
  return (
    <DetailsListStyle>
      <ColumnDiv>
        {Object.keys(details).map((header, i) => (
          <HeaderStyle key={i}>{header}:</HeaderStyle>
        ))}
      </ColumnDiv>

      <ColumnDiv>
        {Object.keys(details).map((header, i) => (
          <ValueStyle key={i}>{details[header]}</ValueStyle>
        ))}
      </ColumnDiv>
    </DetailsListStyle>
  );
}

export default DetailsList;
