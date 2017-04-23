// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
// codeslide from https://github.com/thejameskyle/spectacle-code-slide
import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  cinderlogo: require("../assets/cinder-logo.png"),
  logo: require("../assets/formidable-logo.svg"),
  opengl: require("../assets/opengl.jpg"),
  webgl: require("../assets/webgl.jpg"),
  vdlogo: require("../assets/videodromm-logo.jpg"),
  neo: require("../assets/neo.jpg"),
  circle: require("../assets/circle.jpg"),
  formidablelogo: require("../assets/formidable-logo.svg")
};

preloader(images);

const theme = createTheme({
  primary: "black",
  secondary: "orange",
  tertiary: "yellow",
  quartenary: "red"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
       
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={5} fit caps lineHeight={1} textColor="secondary">Creative Coding with</Heading>
            <Heading size={1} fit textColor="secondary">
              <Link target="_new" href="http://libcinder.org">
                <Text bold caps textColor="quartenary">Cinder</Text>
              </Link>
            </Heading>
            <Link target="_new" href="https://www.facebook.com/batchass">
              <Text bold textColor="tertiary">by Bruce LANE</Text>
            </Link>
            <Link target="_new" href="http://twitter.com/batchass">
              <Text bold textColor="tertiary">@batchass</Text>
            </Link>				
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          
          <Image width="70%" src={images.cinderlogo}/>
					<Heading size={5} textColor="tertiary">
						C++ framework for multimedia applications.
				  </Heading>
          <Heading size={6} textColor="secondary" caps>Developed by</Heading>
            <Link target="_new" href="http://barbariangroup.com/">
              <Text bold textColor="tertiary">The Barbarian Group, New-York, USA, </Text>
            </Link>
          <Text  textColor="tertiary">
						Open sourced under the 
					</Text>
            <Link target="_new" href="http://oss-watch.ac.uk/resources/modbsd">
              <Text bold textColor="tertiary">simplified BSD licence</Text>
            </Link>				
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>It’s a C++ framework.</Heading>
          <List>
            <ListItem>Maximum performance!</ListItem>
            <ListItem>low level direct hardware access</ListItem>
            <ListItem>multimedia (video, graphics, audio)</ListItem>
            <ListItem>libraries for network, MIDI, OSC, etc.</ListItem>
            <ListItem>40 years of C/C++ code</ListItem>
          </List>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Cinder uses OpenGL to use the resources of the graphics card (GPU, memory).<br />
						</Quote>
            <Cite>CPU can be used for other tasks</Cite>
          </BlockQuote>
          <Image width="70%" src={images.opengl}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Installation Windows - Mac - Linux</Heading>
          <List>
            <ListItem>launch cmd (Win+R cmd) or terminal</ListItem>
            <ListItem>cd Documents</ListItem>
            <ListItem>git clone --recursive https://github.com/cinder/Cinder.git</ListItem>
            <ListItem>cd Cinder</ListItem>
          </List>
        </Slide>
        
      </Deck>
    );
  }
}
