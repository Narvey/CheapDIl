import React from "react"
import ReactDOM from "react-dom"
import Airtable from "airtable"
import Decks from "./Decks"
import Games from "./Games"

import "./styles.css"
const apiKey = "keyry7eJdcLS7lfKW" //key from junk account
const base = new Airtable({ apiKey }).base("appaM5qc5hYdfL1Vw")

function onDeckSelect(deck) {
  console.log(deck)
}

class App extends React.Component {
  constructor() {
    base("Decks")
      .select({
        // Selecting the first 4 records in view:
        maxRecords: 4,
        view: "All",
      })
      .firstPage((err, recs) => {
        this.setState({ visibleDecks: recs })
      }) //TODO: allow more than 4 decks?
    super()
  }
  state = {
    visibleDecks: [],
    selDeck: null, //selected deck (now select game)
    selGame: "", //selected game ID
  }
  render() {
    //maybe show number of current games (link to search/join), then big buttons for starting new games, listing decks.
    if (this.state.selGame) return <span>not ready yet</span>
    if (this.state.selDeck) return <Games />
    else
      return (
        <div className="App">
          <Decks onSelectDeck={d => this.setState({ selDeck: d })} decks={this.state.visibleDecks} />
        </div>
      )
  }
}
//function onSelectDeck(deck) {
//  console.log("selected: " + deck.fields["Deck Name"])
//}

async function render() {
  const rootElement = document.getElementById("root")
  ReactDOM.render(<App />, rootElement)
}

render()
