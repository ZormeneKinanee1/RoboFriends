import React, {Component} from 'react'; 
import CardList from '../Components/CardList';
import SearchBox from "../Components/SearchBox";
import Scroll from '../Components/Scroll';
import'./App.css';
import ErrorBoundry from '../Components/ErrorBoundry';


class App extends Component {

  constructor() 
  {
    super()
    this.state = // this state is what changes in an app, what describes the app
    { // state is something that can change and affect our App
      robots: [], 
      searchfield:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users') //API
    .then(response =>response.json())
    .then(users => [this.setState({robots: users})]);
  }


  onSearchChange = (event) =>
  {
    this.setState({searchfield:event.target.value});

  }
  render()
  {
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    });
    return !robots.length? 

    <h1> LOADING... </h1> : 
    (
      <div className='tc'>
        <h1 className="f1"> RoboFriends </h1> 
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll> 
        <ErrorBoundry> 
          <CardList robots={filteredRobots}/>
        </ErrorBoundry>
        </Scroll>
      </div>
    );

    
  }
}

export default App;