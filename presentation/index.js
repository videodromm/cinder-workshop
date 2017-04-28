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
  tinderbox: require("../assets/tinderbox1.png"),
  tinderboxb: require("../assets/tinderbox2.png"),
  vdlogo: require("../assets/videodromm-logo.jpg"),
  neo: require("../assets/neo.jpg"),
  circle: require("../assets/circle.jpg"),
  project: require("../assets/firstapp1.png"),
  cinderloop: require("../assets/CinderLoop.png"),
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
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
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
        <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Installation Windows - Mac - Linux</Heading>
          <List>
            <ListItem>launch cmd (Win+R cmd) or terminal</ListItem>
            <ListItem>cd Documents</ListItem>
            <ListItem>git clone --recursive https://github.com/cinder/Cinder</ListItem>
            <ListItem>cd Cinder</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Cinder - compilation on windows</Heading>
          <List>
            <ListItem>Explorer: go to Cinder/proj/vc2015</ListItem>
            <ListItem>open cinder.sln</ListItem>
            <ListItem>build debug and release versions: cinder.lib is generated</ListItem>
            <ListItem>Explorer: Cinder/samples/basicApp/vc2013</ListItem>
            <ListItem>open basicApp.sln</ListItem>
            <ListItem>run basicApp</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Cinder - compilation on mac</Heading>
          <List>
            <ListItem>terminal: go to Cinder/proj/xcode</ListItem>
            <ListItem>run ./full_build.sh</ListItem>
            <ListItem>cinder.a is generated</ListItem>
            <ListItem>Finder: Cinder/samples/basicApp/xcode</ListItem>
            <ListItem>open basicApp.xcodeproj</ListItem>
            <ListItem>run basicApp</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Cinder - compilation on linux</Heading>
          <List>
            <ListItem>terminal: go to Cinder/</ListItem>
            <ListItem>mkdir build && cd build</ListItem>
            <ListItem>cmake ..</ListItem>
            <ListItem>make -j 8</ListItem>
            <ListItem>cd samples/BasicApp/proj/cmake</ListItem>
            <ListItem>mkdir build && cd build</ListItem>
            <ListItem>cmake ..</ListItem>
            <ListItem>make -j 8</ListItem>
            <ListItem>run ./Debug/BasicApp/BasicApp</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
					<Heading size={5} textColor="tertiary">
						FIRST PROJECT (WIN/MAC).
				  </Heading>
          <Text  textColor="primary">
						Launch tools/Tinderbox and enter FirstCinderProject as project name. 
					</Text>
          <Image width="70%" src={images.tinderbox}/>
        </Slide>        
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
					<Heading size={5} textColor="tertiary">
						SELECT BLOCKS
				  </Heading>
          <Text  textColor="primary">
						No need for blocks in this one, we click Finish. 
					</Text>
          <Image width="70%" src={images.tinderboxb}/>
        </Slide>        
        <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>FOLDER STRUCTURE</Heading>
          <List>
            <ListItem>assets: for images,etc. loadAsset("file.png") looks here (up to 5 parent folders)</ListItem>
            <ListItem>resources: resources compiled in the app</ListItem>
            <ListItem>include: .h header files</ListItem>
            <ListItem>src: .cpp files</ListItem>
            <ListItem>vc2013 or xCode: project files</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">         
					<Heading size={5} textColor="tertiary">
						RESULTING PROJECT
				  </Heading>
          <Image width="100%" src={images.project}/>
         			
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">         
					<Heading size={5} textColor="tertiary">
						APPLICATION FLOW
				  </Heading>
          <Image width="60%" src={images.cinderloop}/>
         			
        </Slide>
        <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw-loader!../assets/basic.cpp")}
            ranges={[
              { loc: [0, 8], title: "BASIC DRAWING PRIMITIVES" },
              { loc: [2, 3], note: "1.0f : f means float, double otherwise" },
              { loc: [2, 3], note: "set drawing color: red, green, blue" },
              { loc: [3, 4], note: "draw a filled ellipse" },
              { loc: [0, 8], title: "Try it!" }
            ]}
          />
        <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw-loader!../assets/fft.cpp")}
            ranges={[
              { loc: [24, 50], title: "Audio Input Analyzer" },
              { loc: [17, 22], note: "private variables declaration" },
              { loc: [27, 39], note: "setup fft size and enable audio in" },
              { loc: [49, 56], note: "get spectrum and store it" },
              { loc: [24, 58], title: "Demo" }
            ]}
          />

      </Deck>
    );
  }
}
