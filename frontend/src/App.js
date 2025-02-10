import Navbar from './components/Navbar' 
import Home from './pages/Home';
import Create from './pages/Create';
import UserUpdate from './pages/UserUpdate';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //biblioteca que permite criar rotas e controlar a navegação entre diferentes componentes sem a necessidade de carregar a página inteira


// Router: torna o roteamento disponível para todos os componentes dentro dele
// Routes: Atua como container para as rotas individuais -> Ele analisa a URL atual e renderiza o primeiro Route que corresponder ao padrão definido -> garante que uma única rota é exibida de cada vez
// Route: Define uma rota individual

function App() {
  return (
    <Router> 
      <div className="App">
          <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/create' element={<Create />}/>
            <Route path='/update/:id' element= {<UserUpdate />}/>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
