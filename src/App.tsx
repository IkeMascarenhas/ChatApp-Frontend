import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
import NotFound from './pages/NotFound';
import { useSocketInfo } from "./contexts/SocketInfoContext";
const App = () => {
  const { socket } = useSocketInfo()

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/chat/' element={<Chat />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}

export default App