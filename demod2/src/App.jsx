import CondRender from "./Component/CondRender"
import PropEx1 from "./Component/PropEx1"
import PropEx2 from "./Component/PropEx2"


function App() {
 

  return (
    <>
     <PropEx1 name="uion" country="India"/>
     <PropEx2 name="popo" age="34"/>
     

     <CondRender islogged={true}/>
    


    </>
  )
}

export default App
