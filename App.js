import React from 'react';
import ReactDOM from 'react-dom';
function app() {

  const documentRoot = document.getElementById("root");
  const reactRoot=document.getElementById("react-root");
  const heading = document.createElement("h1");
  heading.textContent = "Hello world by JS";

  let counter = 0;

    while (counter <= 5) {
      
        counter++;
        
        function printCounter(x){

            setTimeout(() => {
        
                heading.textContent = `Hello world by JS  + ${x}`;
                documentRoot.append(heading);
              }, counter * 2000);

        }
        
        printCounter(counter);

        const li1=React.createElement('li',{},"List Item 1");
        const li2=React.createElement('li',{},"List Item 2");
        const li3=React.createElement('li',{},"List Item 3");


        const reactHeading=React.createElement('ul',{id:'heading'},"List Title",li1,li2,li3);
        const root = ReactDOM.createRoot(reactRoot);
        root.render(reactHeading);

        console.log(reactHeading)

    }
  
}

app();
