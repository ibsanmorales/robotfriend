import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
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
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if(this.state.robots.length === 0){
            return <h1>Loading Robots...</h1>
        }else{
            return (
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

}

export default App;