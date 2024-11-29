import { Routes, Route } from "react-router-dom";
import Home from "../views/home.jsx";
import PostIndex from "../views/posts/index.jsx";
import PostCreate from "../views/posts/create.jsx";
import PostEdit from "../views/posts/edit.jsx";
function RoutesIndex() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/posts"
				element={<PostIndex />}
			/>
			<Route
				path="/posts/create"
				element={<PostCreate />}
			/>
			<Route
				path="/posts/edit/:id"
				element={<PostEdit />}
			/>
		</Routes>
	);
}

export default RoutesIndex;
