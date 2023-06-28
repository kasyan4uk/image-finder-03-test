import { Component } from "react";
import { Container } from "./App.styled";
import { Searchbar } from "./Searchbar/Searchbar";

class App extends Component {


    render() { 
        return (
            <Container>
                <Searchbar/>
            </Container>
        );
    }
}
 
export default App;