import { Header } from './components/Header.js';
import { Navigator } from './components/Navigator.js';
import { MainContents } from './components/MainContents.js';

export const App = function ($app) {
    this.state = {
        nav_id: 0
    }

    this.setState = (nextState) => {
        this.state = {...this.state, ...nextState}
        this.render();
    }

    this.render = () => {
        $app.innerHTML = "";
        const header = new Header({ $app })
        const navigator = new Navigator({ 
            $app, 
            selected: this.state.nav_id, 
            selectCallback : (new_id) => this.setState({nav_id: new_id})
        });
        const main_contents = new MainContents({ $app, nav_id: this.state.nav_id })
    }

    this.render();
}