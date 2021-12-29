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

    const header = new Header({ $app })
    const $page = document.createElement("div");
    $app.appendChild($page);

    this.render = () => {
        $page.innerHTML = "";
        const navigator = new Navigator({ 
            $page, 
            selected: this.state.nav_id, 
            selectCallback : (new_id) => this.setState({nav_id: new_id})
        });
        const main_contents = new MainContents({ $page, nav_id: this.state.nav_id })
    }

    this.render();
}