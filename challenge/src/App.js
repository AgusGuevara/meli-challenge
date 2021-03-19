import styles from "./App.module.scss";

// Components
import Search from "../src/Views/SearchComponent/Search";
import ListView from "../src/Views/ListView/ListView";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <Search />
      <ListView />
    </div>
  );
};

export default App;
