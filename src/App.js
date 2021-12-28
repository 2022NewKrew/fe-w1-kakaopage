import { Header } from './components/Header.js';
import { Navigator } from './components/Navigator.js';
import { MainContents } from './components/MainContents.js';

export const App = function ($app) {
    console.log("this in App", this, $app);
    const header = new Header({ $app })
    const navigator = new Navigator({ $app });
    const main_contents = new MainContents({ $app })
}