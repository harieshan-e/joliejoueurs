import Topbar from './Topbar';
import Intro from './Intro';
import Mission from './Mission';
import Equipes from './Equipes';
import Contact from './Contact';
import Join from './Join';
import TopbarEn from './en/TopbarEn';
import IntroEn from './en/IntroEn';
import MissionEn from './en/MissionEn';
import EquipesEn from './en/EquipesEn';
import ContactEn from './en/ContactEn';
import JoinEn from './en/JoinEn';
import Team from './Team';
import Achievements from './Achievements';
import Comments from './Comments';
import Confirmation from './Confirmation';
import NotFound from './NotFound';
import ScrollToTop from './ScrolltoTop';
import TeamsTopbar from './TeamsTopbar';
import "./fonts/Oswald-VariableFont_wght.ttf"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Topbar/>
              <Intro/>
              <Mission/>
              <Equipes/>
              <Contact/>
              <Join/>
            </Route>
            <Route path="/en">
              <TopbarEn/>
              <IntroEn/>
              <MissionEn/>
              <EquipesEn/>
              <ContactEn/>
              <JoinEn/>
            </Route>
            <Route path="/dota2">
              <TeamsTopbar/>
              <Team/>
              <Achievements/>
              <Comments/>
            </Route>
            <Route path="/league">
              <TeamsTopbar/>
              <Team/>
              <Achievements/>
              <Comments/>
            </Route>
            <Route path="/overwatch">
              <TeamsTopbar/>
              <Team/>
              <Achievements/>
              <Comments/>
            </Route>
            <Route path="/valorant">
              <TeamsTopbar/>
              <Team/>
              <Achievements/>
              <Comments/>
            </Route>
            <Route path="/smash">
              <TeamsTopbar/>
              <Team/>
              <Achievements/>
              <Comments/>
            </Route>
            <Route path="/rocketleague">
              <TeamsTopbar/>
              <Team/>
              <Achievements/>
              <Comments/>
            </Route>
            <Route path="/confirmation">
              <Topbar/>
              <Confirmation/>
            </Route>
            <Route path="*">
              <Topbar/>
              <NotFound/>
            </Route>
          </Switch>
          
        </div>
      </div>
    </Router>


    
  );
}

export default App;
