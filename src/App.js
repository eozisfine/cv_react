import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Main from "./layouts/Main";
import ContactMe from "./pages/ContactMe";
import About from "./pages/About";
import ProjectList from "./pages/Projects";
import Writing from "./pages/Writing";
import Projects from "./pages/Projects";


function App() {
  return (
      <>
      <BrowserRouter>
              <Routes>
              {/* Define the actual content for each route */}
              <Route path={'/'} index element={<Home/>}/>
              <Route path="/" element={<Main/>}>
                  <Route path="about" element={<About/>}/>
                  <Route path="projects" element={<Projects />}/>
                  <Route path="writing" element={<Writing />}/>
                  <Route path="resume" element={<Resume/>}/>
                  <Route path="contactme" element={<ContactMe/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
          </>
  );
}

export default App;
