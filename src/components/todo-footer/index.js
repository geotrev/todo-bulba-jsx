import { jsx, Renderer } from "@bulba/jsx"
import { BulbaElement, register } from "@bulba/element"
import styles from "./styles.scss"

class TodoFooter extends BulbaElement(Renderer) {
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
