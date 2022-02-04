import { jsx } from "snabbdom"
import { RotomElement, register } from "rotom/jsx"
import styles from "./styles.scss"

class TodoFooter extends RotomElement {
  static get styles() {
    return styles
  }

  render() {
    return (
      <footer className="todo-footer">
        <p>
          <a href="https://github.com/geotrev">Created by George Treviranus</a>
        </p>
      </footer>
    )
  }
}

register("todo-footer", TodoFooter)
