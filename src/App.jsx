import { motion,useTransform,useMotionValue } from "motion/react";
import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [align,setAlign]=useState('flex-start')
const y=useMotionValue(0)
const backgroundColor=useTransform(y,[-100,0,100],['#fff','#999',"#000"])

console.log(align);


console.log({y,backgroundColor});

  return (
    <div className="flex flex-col gap-12 justify-center items-center h-screen w-screen bg-blue-400">
      <motion.div style={{backgroundColor,y}}   drag='y' dragDirectionLock={false} dragConstraints={{
        top:-100,
        bottom:100
      }}  className="rounded-md flex justify-center items-center w-40 h-40 shadow-md bg-white">
        <span className="text-blue-500 text-4xl text-bold">{counter}</span>
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-7 py-2 bg-blue-500 border border-blue-500 rounded-full  text-white shadow-md "
        onClick={() => setCounter(counter + 1)}
      >
        Dale!
      </motion.button>

      <div className="flex flex-col gap-12  justify-center items-center">
        <div style={{display:"flex", justifyContent:align}} className={ `bg-purple-600 w-25 h-10 rounded-full p-1`}> 
       <motion.div  layout className="rounded-full h-7 w-7 bg-white"></motion.div>
        </div>
        <motion.button type="button"  whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-7 py-2 bg-blue-500 border border-blue-500 rounded-full  text-white shadow-md "
        onClick={() => setAlign("flex-end")}>change align</motion.button>
      </div>
    </div>
  );
}

export default App;
