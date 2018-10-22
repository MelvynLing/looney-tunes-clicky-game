import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';
import HighScore from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Pepe Le Pew',
        img: 'img/images/pepe.png',
        clicked: false
    },
    {
        name: 'Speedy Gonzales',
        img: 'img/images/speedygonzales.png',
        clicked: false
    },
    {
        name: 'Michigan J Frog',
        img: 'img/images/michiganjfrog.png',
        clicked: false
    },
    {
        name: 'Tweety Bird',
        img: 'img/images/tweety.png',
        clicked: false
    },
    {
        name: 'Yosemite Sam',
        img: 'img/images/yosemite.png',
        clicked: false
    },
    {
        name: 'Elmer Fudd',
        img: 'img/images/elmer.png',
        clicked: false
    },
    {
        name: 'Wile E. Coyote',
        img: 'img/images/coyote.png',
        clicked: false
    },
    {
        name: 'Foghorn Leghorn',
        img: 'img/images/foghorn.png',
        clicked: false
    },
    {
        name: 'The Tazmanian Devil',
        img: 'img/images/taz.png',
        clicked: false
    },
    {
        name: 'Bugs Bunny',
        img: 'img/images/bugs.png',
        clicked: false
    },
    {
        name: 'Road Runner',
        img: 'img/images/roadrunner.png',
        clicked: false
    },
    {
        name: 'Marvin the Martian',
        img: 'img/images/marvin.png',
        clicked: false
    },
    {
        name: 'Granny',
        img: 'img/images/granny.png',
        clicked: false
    },
    {
        name: 'Slyvester',
        img: 'img/images/slyvester.png',
        clicked: false
    },
    {
        name: 'Daffy Duck',
        img: 'img/images/daffy.png',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <p>"I tawt I taw a puddy tat...I did, I did!" - Tweety Bird<br/>Test your memory with this Looney Tunes Clicky Game! Simply click on a Looney Tunes Character to recieve a point. But beware, clicking the same character twice resets the game. Thats all folks! Enjoy :)</p>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}