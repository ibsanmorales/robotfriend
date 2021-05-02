import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
class App extends Component{
    constructor(){
        super()
        //we have two state robots and searchfield 
        this.state = {
            robots: [],
            searchfield: '', 
        }
    }
    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp =>{
            return resp.json();
        })
        .then(users =>{
            this.setState({robots:users});
        });
    
    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value});
    }

    render(){
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
         return !robots.length ?
           <h1>Loading Robots...</h1>
         :(
                <div className='tc'>
                    <h1 className='f2'>ROBOTFRIENDS</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                    <CardList robots = {filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    }


export default App;