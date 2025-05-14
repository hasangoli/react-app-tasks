import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import { store } from "./app/store.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route index element={<App />} />
			</Routes>
		</BrowserRouter>
	</Provider>
);
