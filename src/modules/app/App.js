import '../libs/normalize.css';
import './App.scss';

import AppHeader from '../app-header/app-header';
import AppPromo from '../app-promo/app-promo';
import AppProcess from '../app-process/app-process';
import AppAdvantage from '../app-advantage/app-advantage';
import AppConsultation from '../app-consultation/app-consultation';
import AppInstallation from '../app-installation/app-installation';


function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppPromo />
      <AppProcess />
      <AppAdvantage />
      <AppConsultation />
      <AppInstallation />
    </div>
  );
}

export default App;
