import { Outlet } from "react-router-dom";

// import styles from './App.module.less'

function App () {
  return (
    <div className="flex h-full relative">
      <Outlet/>
    </div>
  )
}

export default App
