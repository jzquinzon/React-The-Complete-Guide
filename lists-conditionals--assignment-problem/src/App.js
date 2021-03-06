import React, {Component} from 'react';
import './App.css';
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
    state = {
        text: "",
        textLength: 0,
        tooShort: true
    }

    changeLengthHandler = (event) => {
        let len = event.target.value.length;

        this.setState({
            text: event.target.value,
            textLength: len
        })
    }

    deleteCharHandler = (event, i) => {
        let text = this.state.text;
        text = text.substring(0,i) + text.substring(i+1);
        this.setState({
            text: text,
            textLength: text.length,

        })
    }


    render() {
        let characters = null;

        characters = (
            <div>
                {[...this.state.text].map((character, i) => {
                    return <Char key={i}
                                 click={ (event) => this.deleteCharHandler(event, i) }
                                 character={character}/>
                })}
            </div>
        )

        return (
            <div className="App">
                <ol>
                    <li>Create an input field (in App component) with a change listener which outputs the length of the
                        entered text below it (e.g. in a paragraph).
                    </li>
                    <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
                    <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending
                        on the text length (e.g. take 5 as a minimum length)
                    </li>
                    <li>Create another component (=> CharComponent) and style it as an inline box (=> display:
                        inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
                    </li>
                    <li>Render a list of CharComponents where each CharComponent receives a different letter of the
                        entered text (in the initial input field) as a prop.
                    </li>
                    <li>When you click a CharComponent, it should be removed from the entered text.</li>
                </ol>
                <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

                <input type="text" onChange={(event) => this.changeLengthHandler(event)} value={this.state.text}/>
                <p>{this.state.textLength}</p>
                <Validation
                    textLength={this.state.textLength}
                />
                {characters}

            </div>
        );
    }
}

export default App;
