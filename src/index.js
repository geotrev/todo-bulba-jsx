import { BulbaElement, register } from "@bulba/element"
import { jsx, Renderer } from "@bulba/jsx"
import "./theme"

import "./components/todo-header"
import "./components/todo-body"
import "./components/todo-footer"

import styles from "./styles.scss"

// define the app

class TodoApp extends BulbaElement(Renderer) {
  static get styles() {
    return styles
  }

  render() {
    return (
      <div className="wrapper">
        <todo-header />
        <todo-body />
        <todo-footer />
      </div>
    )
  }
}

register("todo-app", TodoApp)
