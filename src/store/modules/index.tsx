import { TodoProvider } from "./todo"
import { FCC } from "../../typings"

const providers = [TodoProvider]

export const ContextProvider: FCC = ({ children }) => {
  const _len = providers.length

  function renderContext(index = 0) {
    const Element = providers[index]
    return <Element>
      { index === _len - 1 ? children : renderContext(index + 1) }
    </Element>
  }

  return renderContext()
}