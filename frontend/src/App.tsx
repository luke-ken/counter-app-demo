import './App.css'
import {Provider} from "react-redux";
import {store} from "./stores/store.ts";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {CounterWithReduxOnly} from "./components/CounterWithReduxOnly.tsx";
import {CounterWithHTTP} from "./components/CounterWithHTTP.tsx";
import {CounterWithWebSocket} from "./components/CounterWithWebSocket.tsx";

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to="/">Redux only</Link></li>
                        <li><Link to="/with-http">With HTTP</Link></li>
                        <li><Link to="/with-websocket">With Websocket</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<CounterWithReduxOnly/>} />
                    <Route path="/with-http" element={<CounterWithHTTP/>} />
                    <Route path="/with-websocket" element={<CounterWithWebSocket/>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App
