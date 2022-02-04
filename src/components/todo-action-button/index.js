import { jsx } from "snabbdom"
import { RotomElement, register } from "rotom/jsx"
import styles from "./styles.scss"

class TodoActionButton extends RotomElement {
  static get properties() {
    return {
      icon: {
        reflected: true,
        required: true,
      },
      size: {
        default: "md",
        reflected: true,
      },
    }
  }

  static get styles() {
    return styles
  }

  render() {
    return (
      <button className={`todo-action-button ${this.size}`}>
        <span aria-hidden="true" className="todo-action-button--icon">
          {this.icon}
        </span>
        <span className="todo-action-button--text">
          <slot />
        </span>
      </button>
    )
  }
}

register("todo-action-button", TodoActionButton)
