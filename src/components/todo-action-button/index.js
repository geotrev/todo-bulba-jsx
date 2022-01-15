import { RotomElement, register } from "rotom/jsx"
import { jsx } from "snabbdom"
import styles from "./styles.scss"

class TodoActionButton extends RotomElement {
  static get styles() {
    return styles
  }

  renderIcon() {
    const icon = this.getAttribute("icon")
    if (!icon) return

    return (
      <span attrs={{ ariaHidden: "true", class: "todo-action-button--icon" }}>
        {icon}
      </span>
    )
  }

  render() {
    const size = this.getAttribute("size") || "md"

    return (
      <button attrs={{ class: `todo-action-button ${size}` }}>
        {this.renderIcon()}
        <span attrs={{ class: "todo-action-button--text" }}>
          <slot />
        </span>
      </button>
    )
  }
}

register("todo-action-button", TodoActionButton)
