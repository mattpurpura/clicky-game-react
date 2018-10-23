import React, { Component } from 'react';
import Card from './components/Card';
import images from './images.json';
import NavBar from './components/NavBar';
import Wrapper from './components/Wrapper';
import "./App.css"

class App extends Component {
    state = {
        images,
        clickedImages: [], 
        score: 0, 
        highScore: 0
    };

    checkClicked = (id) => {
        if(this.state.clickedImages.includes(id) === false){
            let newImageArr = this.state.clickedImages;
            newImageArr.push(id);
            this.setState({
                clickedImages: newImageArr,
                score: this.state.score + 1
            }, () => {
                if(this.state.score > this.state.highScore){
                    this.setState({highScore: this.state.score})
                }
            });
            this.randomizeImages();
        } else {
            this.setState({clickedImages: [], images: images, score: 0})
            console.log('you guessed incorrectly, you suck')
        };
        
    }

    randomizeImages = () => {
        let imageArray = this.state.images;
        let randomizedImages = [];
        for (let i=0; i < this.state.images.length; i++){
            let randy = imageArray[Math.floor(Math.random()*imageArray.length)];
            imageArray = imageArray.filter(image => image.id !== randy.id);
            randomizedImages.push(randy);
        }
        this.setState({images: randomizedImages})
    }

render(){
    console.log(this.state.images)
    
    return(
        <Wrapper>
        <NavBar score={this.state.score} highScore={this.state.highScore}/>
            <div className = 'container'>
                <div className = 'row images'>
                {this.state.images.map(image => (
                    <Card key ={image.id} id={image.id} src={image.image} onClick={this.checkClicked}/> ))}
                </div>
            </div>
        </Wrapper>
    );
};
   
}
   

export default App;