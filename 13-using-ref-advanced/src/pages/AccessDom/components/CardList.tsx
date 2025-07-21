import type { MovieInfo } from "../type"
import CardItem from "./CardItem";

interface Props {
  list: MovieInfo[];
  usingPopup: boolean;
}

function CardList({list, usingPopup}:Props) {
  // console.log(list);
  return (
    <ul>
      {
        list.map(item => (
          <li key={item.id}>
            <CardItem item={item} popup={usingPopup} />
          </li>
        ))
      }
    </ul>
  )
}
export default CardList