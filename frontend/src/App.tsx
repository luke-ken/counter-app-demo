import './App.css'
import {Provider} from "react-redux";
import {store} from "./stores/store.ts";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {CounterWithReduxOnly} from "./components/CounterWithReduxOnly.tsx";
import {CounterWithHTTP} from "./components/CounterWithHTTP.tsx";
import {CounterWithWebSocket} from "./components/CounterWithWebSocket.tsx";

function App() {

    const addStyleWhenLinkActive = (isActive: boolean) => {
        return isActive ? "font-bold" : ""
    }

    return (
        <Provider store={store}>
            <BrowserRouter>
                <nav className="bg-gray-700 text-white p-3">
                    <ul className="flex space-x-4 justify-center">
                        <li><NavLink to="/" className={({isActive}) => `hover:underline ${addStyleWhenLinkActive(isActive)}`}>Redux only</NavLink></li>
                        <li><NavLink to="/with-http" className={({isActive}) => `hover:underline ${addStyleWhenLinkActive(isActive)}`}>With HTTP</NavLink></li>
                        <li><NavLink to="/with-websocket" className={({isActive}) => `hover:underline ${addStyleWhenLinkActive(isActive)}`}>With Websocket</NavLink></li>
                    </ul>
                </nav>
                <div className="p-4">
                    <Routes>
                        <Route path="/" element={<CounterWithReduxOnly/>} />
                        <Route path="/with-http" element={<CounterWithHTTP/>} />
                        <Route path="/with-websocket" element={<CounterWithWebSocket/>} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    )
}

export default App
