import React from 'react';
import ReactDOM from 'react-dom';

import backGr from './assets/bg3.jpg'
import Header from './components/header'
import Layout from './components/layout'
import Footer from './components/footer';

// const el = React.createElement(

//   'h1',
//   null,
//   "Hello Wir from react"
// )
// const AppHeader = () => {
//   return (
//   <h1>React saluts to Wir</h1>
//   );
// }

// const items = ['Item-1', 'Item-2', 'Item-3', 'Item-4']
// const AppList = ({list = items}) => {
//   return (
//     <ul>
//       {
//       list.map(item => <li>{item}</li>)
//       }
//     </ul>
//   ); 
// }

const App = () => {
  return (
    <React.Fragment>
      <Header title = "test header title" descr = 'Test header description' />
      <Layout id = "1" title = "test layout1 title" descr = 'Test layout1 description' urlBg = "gray" colorBg = "blue" />
      <Layout id = "2" title = "test layout2 title" descr = 'Test layout2 description' urlBg = {backGr} colorBg = "gray" />
<Layout />
      <Footer />
    </React.Fragment>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));