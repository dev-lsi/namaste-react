
const reactHeading=React.createElement("h2", 
{
  id:"react-heading"
}, 
"Hello world by React");

const reactHeading2=React.createElement("h2", 
{
  id:"react-heading2"
}, 
"Hello world by React in root 2");

const reactHeading3=React.createElement("h2", 
{
  id:"react-heading3"
}, 
"Hello world by React in root2 changed after 3 seconds");

const reactRoot=ReactDOM.createRoot(document.getElementById('react-root'));
reactRoot.render(reactHeading);

const reactRoot2=ReactDOM.createRoot(document.getElementById('react-root2'));
reactRoot2.render(reactHeading2);

setTimeout(()=>reactRoot2.render(reactHeading3),3000)