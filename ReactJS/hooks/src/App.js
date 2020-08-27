import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseStateHook from './components/UseSateHook';
import PrevState from './components/prevState';
import ObjectHook from './components/objHook';
import ClassCounterOne from './components/ClassCounterOne';
import UseEffectCounterOne from './components/UseEffectCounterOne';
import ClassEffectOnce from './components/ClassEffectOnce';
import FunctionHookOnce from './components/FunctionHookOnce';
import CleanUpHook from './components/CleanUpHook';
import ClassTick from './components/ClassTick';
import FunctionTick from './components/FunctionTick';
import Reducecounter from './components/Reducecounter';
import FocusInput from './components/FocusInput';
import TimerClass from './components/TimerClass';
import HookTime from './components/HookTimer';

function App() {
  return (
    <div>
       {/* <UseStateHook/> */}
       {/* <PrevState/> */}
       {/* <ObjectHook/> */}
       {/* <ClassCounterOne/> */}
       {/* <UseEffectCounterOne/> */}
       {/* <ClassEffectOnce/> */}
       {/* <FunctionHookOnce/> */}
       {/* <CleanUpHook/> */}
       {/* <ClassTick/> */}
       {/* <FunctionTick/> */}
       {/* <Reducecounter/> */}
       {/* <FocusInput/> */}
       {/* <TimerClass/> */}
       <HookTime/>
    </div>
  );
}

export default App;
