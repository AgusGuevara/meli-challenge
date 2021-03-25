import styles from "./App.module.scss";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  BrowserRouter,
} from "react-router-dom";
// Components
import HeaderView from "./Views/HeaderVIew/HeaderView";
import ListView from "../src/Views/ListView/ListView";
import ProductView from "../src/Views/ProductView/ProductView";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.appContainer}>
        <Router>
          <Route path="/" component={HeaderView} />
          <Route exact path="/items" component={ListView} />
          <Route exact path="/items/:id" component={ProductView} />
        </Router>
      </div>
    </BrowserRouter>
  );
};

export default withRouter(App);
