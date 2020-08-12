import React from 'react';
import './App.css';
import ListItems from './ListItems'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
        checked: false
      }
    })
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: '',
          checked: false
        }
      })
    }
  }

  checkedHandler = (event, idTask) => {
    const taskIndex = this.state.items.findIndex(p => {
      return p.key === idTask;
    });

    const task = {
      ...this.state.items[taskIndex]
    };

    task.checked = event.target.checked;

    const allTasks = [...this.state.items];
    allTasks[taskIndex] = task;

    this.setState(
      { items: allTasks }
    );
  }

  totalNChecked() {
    return this.state.items.filter(props => !props.checked).length;
  }
  totalChecked() {
    return this.state.items.filter(props => props.checked).length;
  }

  render() {
    return (
      <div className="relative">
        <h1>Todos</h1>
        <div className="App">
          <header>
            <form id="to-do-form" onSubmit={this.addItem}>
              <input type="text" placeholder="What needs to be done?"
                value={this.state.currentItem.text} onChange={this.handleInput} />
            </form>
          </header>
          <p></p>
          {
            this.state.items.map((pElement, index) => {
              return (
                <ListItems
                  key={pElement.key}
                  name={pElement.text}
                  checked={pElement.checked}
                  changed={(event) => this.checkedHandler(event, pElement.key)}
                />
              )
            })
          }

          <div className="alignCenter">
            <button>
              Ativas: {this.totalNChecked()}
            </button>
            <button>
              Concluidas: {this.totalChecked()}
            </button>
          </div>

        </div>
      </div>
    );
  }
}
export default App;