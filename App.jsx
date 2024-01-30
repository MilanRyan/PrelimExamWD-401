import { useState } from 'react'
import './App.css'
import Welcome from './component/Welcome';
import Hello from './component/Hello';
import React from 'react'
import ParentComponent from './component/Parentcomponent';
// import Todolist from './component/Todolist';
// import Booklist from './component/BookList';
// import MovieList from './component/MovieList';
// import ShinyButton from './component/Conditional Rendering/Conditional-Demo-1';
// import RainOrShine from './component/Conditional Rendering/Conditional-Demo-2';
// import RainOrShine3 from './component/Conditional Rendering/Conditional-Demo-3';
// import RainOrShine4 from './component/Conditional Rendering/Conditional-Demo-3';
import biblequiz from './component/prelimexam/biblequiz';

function App() {

return (
// <>
// <div>
// <Hello/>
// <Welcome/>
// </div>
// </>
<div>
<h1>  </h1>

{/* <Todolist/>
<MovieList/>
<Booklist/> */}
{/* 
<ShinyButton/>
 <Hello/>
 <Welcome/>
 <RainOrShine />

 <RainOrShine3 />

<RainOrShine4 /> */}

<biblequiz/>
 
{/* <h1>React Props Example</h1>
<ParentComponent/> */}
</div>
)
}

export default App;