import { jsx, Renderer } from "@bulba/jsx"
import debounce from "lodash-es/debounce"
import { BulbaElement, register } from "@bulba/element"
import { dispatch, subscribe, actions } from "../../store"
import "../todo-action-button"
import styles from "./styles.scss"

class TodoBody extends BulbaElement(Renderer) {
  static get properties() {
    return {
      todos: {
        default: [],
        type: "array",
      },
    }
  }

  static get styles() {
    return styles
  }

  constructor() {
    super()
    subscribe(this, ["todos"])
    this.handleClick = this.handleClick.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleDebouncedInput = this.handleDebouncedInput.bind(this)
    this.debounceInput = debounce(this.handleDebouncedInput, 500)
  }

  onUpdate() {
    this.focusDraftTodo()
  }

  focusDraftTodo() {
    const topTodo = this.todos[0]

    if (topTodo && topTodo.draft) {
      const todoEl = this.shadowRoot.querySelector(".todo")
      todoEl.querySelector(".todo--textarea").focus()
    }
  }

  handleClick(event) {
    const deleteBtn = event.target
    dispatch(actions.DELETE_TODO, { id: deleteBtn.parentElement.id })
  }

  handleDebouncedInput(target) {
    if (!target.classList.contains("todo--textarea")) return

    dispatch(actions.SAVE_TODO, {
      id: target.parentElement.id,
      value: target.value,
    })
  }

  handleInput(event) {
    this.debounceInput(event.composedPath()[0])
  }

  renderEmptyState() {
    return (
      <p>
        You're done! Rejoice! :)
        <br />
        <br />
        Or<span aria-hidden="true">...</span> create more todos!
      </p>
    )
  }

  renderTodos() {
    if (!this.todos.length) {
      return this.renderEmptyState()
    }

    return this.todos.map((todo) => (
      <div
        on-input={this.handleInput}
        className="todo"
        id={todo.id}
        key={todo.id}
      >
        <textarea className="todo--textarea" placeholder={todo.placeholder}>
          {todo.value}
        </textarea>
        <todo-action-button
          className="todo-body-action-button"
          icon="-"
          on-click={this.handleClick}
        >
          Delete
        </todo-action-button>
      </div>
    ))
  }

  render() {
    return <main className="todo-body">{this.renderTodos()}</main>
  }
}

register("todo-body", TodoBody)
