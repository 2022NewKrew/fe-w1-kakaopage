import { Header } from './components/Header.js';
import { Navigator } from './components/Navigator/Navigator.js';
import { MainTemplate } from './components/MainTemplate.js';

export const App = (app) => {
    let state = {
        nav_id: 0
    }

    const setState = (nextState) => {
        state = {...state, ...nextState}
        render();
    }

    const header = Header({ app })
    const page = document.createElement("div");
    app.appendChild(header);
    app.appendChild(page);

    const render = () => {
        page.innerHTML = "";
        page.appendChild(Navigator({ 
            selected_id: state.nav_id, 
            selectCallback : (new_id) => setState({nav_id: new_id})
        }));
        page.appendChild(MainTemplate({ parent: page, nav_id: state.nav_id }));
    }

    render();
}