import { jsx, Renderer } from "@bulba/jsx"
import { BulbaElement, register } from "@bulba/element"
import styles from "./styles.scss"

class TodoActionButton extends BulbaElement(Renderer) {
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
