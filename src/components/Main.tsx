import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Devices } from '../views/Devices';
import Layout from './Layout';

const Main = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/alldevices" component={Devices} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default Main;
