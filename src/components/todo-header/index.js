import { jsx } from "snabbdom"
import { RotomElement, register } from "rotom/jsx"
import { dispatch, actions } from "../../store"
import "../todo-action-button"
import styles from "./styles.scss"

class TodoHeader extends RotomElement {
  static get styles() {
    return styles
  }

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    dispatch(actions.ADD_TODO)
  }

  render() {
    return (
      <header className="todo-header">
        <h1 className="todo-header--heading">
          <span aria-hidden="true">/</span>TooDoo
        </h1>
        <todo-action-button
          on-click={this.handleClick}
          className="todo-header-action-button"
          icon="+"
          size="lg"
        >
          Add Todo
        </todo-action-button>
      </header>
    )
  }
}

register("todo-header", TodoHeader)
