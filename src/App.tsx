import TodoList from './components/TodoList'
import { ContextProvider } from './store/modules'

function App() {
  return (
    <ContextProvider>
      <main className='mx-auto max-w-2xl p-4'>
        <TodoList />
      </main>
    </ContextProvider>
  )
}

export default App
