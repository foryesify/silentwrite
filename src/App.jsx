import { Route, Switch } from 'wouter-preact'
import Titlebar from './components/Titlebar'
import Home from './components/Home'

export default function App() {
  return (
    <div className="app">
      <Titlebar />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  )
}
