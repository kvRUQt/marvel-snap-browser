import rawCards from "../cards.json";
import "./browser.style.css";

function Image(id) {
  const uri = `https://images.marvelsnap.io/images/cards/${id.toString()}.webp`;

  return <img style="cursor:pointer" src={uri} />;
}

export function Browser() {
  return (
    <div class="browser">
      {rawCards.map((card) => (
        <div class="card">
          {Image(card.id)}
          <span>
            {card.id} {card.name}
          </span>
        </div>
      ))}
    </div>
  );
}
