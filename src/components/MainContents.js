import { DummyPage } from "./pages/DummyPage.js";
import { WebtoonPage } from "./pages/WebtoonPage.js";

export const MainContents = ({ parent, nav_id }) => {

    const render = () => {
        return nav_id === 1 ? WebtoonPage() : DummyPage({ nav_id });
    }

    return render();
}