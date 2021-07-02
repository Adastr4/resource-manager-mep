import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Devices } from './Devices';
import Layout from './Layout';

const Main = () => {
  return (
    <Router>
      <Layout />
      <Switch>
        <Route exact path="/alldevices" component={Devices} />
      </Switch>
    </Router>
  );
};

export default Main;
