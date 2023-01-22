import {Route, Routes} from 'react-router-dom';
import CookiePage from '../pages/cookies.page';
import HomePage from '../pages/home.page';

const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<HomePage />}
			/>
			<Route
				path="/cookies"
				element={<CookiePage />}
			/>
		</Routes>
	);
};
export default AppRoutes;
