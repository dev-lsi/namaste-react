# Namaste React

## Lesson 1 INCEPTION

Links to React : react CDN:

<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

MUST ADD LIKE THIS:

        <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
        <script>App.js</script>  //App.JS-always comes after React and ReactDom scripts!

These links contain all plain js code for the React!---React is a JS library! for React and ReactDOM objects;


  <body>
    <div id="root">

        <h1>Hello world!</h1> //this h1 tag will be cleared when ReactDOM renders react components! 
   
    </div>

        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

     <script>

         const reactHeading=React.createElement('h1', {id="heading",xyz="xyz" color="red"}, "Hello from React");
         const root=ReactDOM.createRoot(document.getElementById('root'));
         root.render(reactHeading);

      </script>
 </body>

         const reactHeading=React.createElement  ->Creates Just a normal JS OBJECT!!!

         root.render(reactHeading)  -> creates HTML from the object and appends it to the root!!!


  
  ## Lesson 2   IGNITION

   First we create Git Repository,


   
   npm init  creates package.json (for all dependencies of the project);
     !!!!!Now we can install dependencies!!!!!
         
            ---->  Bundler ( WebPack,Parcel,Weed): Bundle the app ready for production!
         create-react-app uses WebPack but here we use Parcel!


         npm i -D parcel  (npm install dev parcel); 

         Interesting Versions Note:
         ` -  tilde stands for ;  upgrades only minor new versions
         ^ -  caret stands for ;   upgrades all versions

         npm install -D parcel creates package-lock.json and install dependencies in /node-modules;
         ADD /node-modules in .gitignore;  npm i  will recreate it from package.json and package-lock.json


# starting our app:   npx parcel index.html

and also : npm i react and npm i react-dom;


### npx parcel build index.html  - When we build for production!!!

#### .parcel-cache and dist folders must be in .gitignore!!!

## Lesson3  lying The Foundations
