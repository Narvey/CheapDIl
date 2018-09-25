import React from "react"
import Airtable from "airtable"

export default class Decks extends React.Component {
  render() {
    return (
      <div>
        <h1>Select a deck to play:</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: "10px",
            gridAutoRows: "minmax(100px, auto)",
          }}
        >
          {this.props.decks.map(x => toComponent(x, this.props.onSelectDeck))}
        </div>
      </div>
    )
  }
}

function toComponent(deck, callback) {
  return (
    <div onClick={() => callback(deck)} key={deck.id} style={{ background: "#9fff00" }}>
      <h2 style={{ color: "green" }}>{deck.fields["Deck Name"]}</h2>
      <span style={{ size: "4px" }}>{deck.id}</span>
    </div>
  )
}
