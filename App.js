
import React from 'react';
import Home from './Home';
import Event from './Event';
import './App.css';

function App() {
  return (
    import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Event Planner</h1>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/event/:id" component={Event} />
          </Switch>
        </main>
        <footer>
          <p>&copy; 2023 Event Planner. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

    <div className="App">
      <header>
        <h1>Event Planner</h1>
      </header>
      <main>
        {/* content here */}
      </main>
      <footer>
        <p>&copy; 2023 Event Planner. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
