import './App.css'
import {Provider} from "react-redux";
import {store} from "./stores/store.ts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CounterWithReduxOnly} from "./components/CounterWithReduxOnly.tsx";
import {CounterWithHTTP} from "./components/CounterWithHTTP.tsx";
import {CounterWithWebSocket} from "./components/CounterWithWebSocket.tsx";
import {NavLinkCustom} from "./components/NavLinkCustom.tsx";

// one place to manage all paths, making adding new paths and removing existing paths easier
const NAVIGATION_ELEMENTS = [
    {path: "/", name: "Redux only", element: <CounterWithReduxOnly/>},
    {path: "/with-http", name: "With HTTP", element: <CounterWithHTTP/>},
    {path: "/with-websocket", name: "With WebSocket", element: <CounterWithWebSocket/>},
]

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <nav className="bg-gray-700 text-white p-3">
                    <ul className="flex space-x-4 justify-center">
                        {NAVIGATION_ELEMENTS.map((navEle, index) =>
                            <li key={`${index}-${navEle.name}`}>
                                <NavLinkCustom path={navEle.path} name={navEle.name}/>
                            </li>
                        )}
                    </ul>
                </nav>
                <div className="p-4">
                    <Routes>
                        {NAVIGATION_ELEMENTS.map((navEle, index) =>
                            <Route key={`${index}-${navEle.name}`} path={navEle.path} element={navEle.element}/>
                        )}
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    )
}

export default App
