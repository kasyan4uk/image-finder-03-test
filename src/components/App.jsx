import { Component } from "react";
import { Container } from "./App.styled";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";

class App extends Component {


    render() { 
        return (
            <Container>
                <Searchbar />
                <ImageGallery></ImageGallery>
            </Container>
        );
    }
}
 
export default App;