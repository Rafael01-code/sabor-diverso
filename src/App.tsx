import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import Categories from './pages/Categories';
import CategoryDetail from './pages/CategoryDetail';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="receitas" element={<Recipes />} />
        <Route path="receitas/:slug" element={<RecipeDetail />} />
        <Route path="categorias" element={<Categories />} />
        <Route path="categorias/:slug" element={<CategoryDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
