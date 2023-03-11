import classes from './App.module.css';
import { SelectableListSection } from './examples/0-SelectableList/SelectableListSection';

export function App() {
  return (
    <div className={classes.App}>
      <div>
        <SelectableListSection />
      </div>
    </div>
  );
}
