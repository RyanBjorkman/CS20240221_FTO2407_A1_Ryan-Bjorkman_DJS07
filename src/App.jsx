// The main App component that combines the Header and Meme components.
import Header from "./components/Header";
import Meme from "./components/Meme";

/**
 * This is the main entry point of the app, rendering the Header and Meme components.
 */
export default function App() {
    return (
        <div>
            <Header />
            <Meme />
        </div>
    );
}
