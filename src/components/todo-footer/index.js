import { RotomElement, register } from "rotom/jsx"
import { jsx } from "snabbdom"
import styles from "./styles.scss"

class TodoFooter extends RotomElement {
  static get styles() {
    return styles
  }

  render() {
    return (
      <footer attrs={{ class: "todo-footer" }}>
        <p>
          <a attrs={{ href: "https://github.com/geotrev" }}>
            Created by George Treviranus
          </a>
        </p>
      </footer>
    )
  }
}

register("todo-footer", TodoFooter)
