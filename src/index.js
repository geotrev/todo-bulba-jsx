import { RotomElement, register } from "rotom/jsx"
import { jsx } from "snabbdom"
import "./theme"

import "./components/todo-header"
import "./components/todo-body"
import "./components/todo-footer"

import styles from "./styles.scss"

// define the app

class TodoApp extends RotomElement {
  static get styles() {
    return styles
  }

  render() {
    return (
      <div attrs={{ class: "wrapper" }}>
        <todo-header />
        <todo-body />
        <todo-footer />
      </div>
    )
  }
}

register("todo-app", TodoApp)
