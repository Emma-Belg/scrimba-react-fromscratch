# scrimba-react-fromscratch

Making a React project from scratch so that I can learn more about the process.
Making a React app from scratch involves using:  
1. a compiler  
2. a bundler
3. a package manager (I use react with npm).
  
I am following a scrimba course that does not explain anything about how to acutally implement or use React and continues to require to make prjects from scratch so I have found a tutorial that will help me do this :).  

For this particular practice I am using the instructions found [here](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658).  

This is also a helpful link: https://reactjs.org/docs/create-a-new-react-app.html

## Compiler
This particular tutorial uses Babel
What is Babel and why use it?
https://babeljs.io/docs/en/


## Bundler
This tutorial uses Webpack but I decided to do a bit of research into other bundlers to understand a bit more.  
What about webpack vs parcel vs rollup?  
These are all bundlers: "a bundler is a tool that recursively follows all imports from the entry point of your app and bundles them up into a single file. Bundlers can also minify your files by removing unnecessary white spaces, new lines, comments, and block delimiters without affecting their functionality."

Looking at a few categories to decide which bundler is best...  

**Configuring**  
Parcel wins as it does not require configuring.
"webpack config can get complex, but it provides extensive support for third-party imports, images, CSS preprocessors, and whatnot."  

**Dead code elimination**  
Parcel emerged as the winner here.
Rollup comes second  

**Code splitting**  
webpack wins in this aspect, with minimal work and faster load time.

"Building a basic app and want to get it up and running quickly? Use Parcel.   

Building a library with minimal third-party imports? Use Rollup.

Building a complex app with lots of third-party integrations? Need good code splitting, use of static assets, and CommonJs dependencies? Use webpack."

https://medium.com/better-programming/the-battle-of-bundlers-6333a4e3eda9  

## Notes on React
The installation of regular dependencies was new to me.
https://create-react-app.dev/docs/installing-a-dependency/

**Regular dependencies vs dev dependencies**
A note on dev dependencies
"devDependencies should contain packages which are used during development or which are used to build your bundle, for example, mocha, jscs, grunt-contrib-watch, gulp-jade and etc. These packages are neseccery only while you are developing your project, also ESlint is used to check everything during building your bundle. So install all these packages using -dev flag, this will say to the npm, heeey, I need these package for development, so this will automatically add package to devDependencies instead of usual dependencies."  
Whereas  
"Dependencies should contain libs and framewors your app is built on, such as Vue, React, Angular, Express, JQuery and etc. You will agree with me, if I say, that your project wont work without these packages(if you are using them, of course)."  

https://medium.com/@stalonadsl948/dependencies-vs-devdependencies-926e096a3dee

## Further notes  

**HMR**  
HMR stands for Hot Module Replacement.  
Read [this, to understand why you should use HMR](https://www.javascriptstuff.com/why-use-hmr/).  
In short, "Hot Module Replacement is a Webpack feature that updates your Javascript without a browser reload. It can even maintain your application state across code updates. It's primarily used for development."
It is my understanding that this is what react apps automatically do if you don't build them from scratch.  
Note that HMR can be used with Webpack and Parcel but not with Rollup. A practical explanation as to why this is useful can be read about [here](https://stackoverflow.com/questions/49236373/react-hot-module-replacement-alternative-rollup-gulp-and-browsersync).

https://www.javascriptstuff.com/understanding-hmr/


I came across this error when trying to install React Hot Loader (using: `npm install react-hot-loader`).
> npm ERR! Failed to parse package.json data.  
> npm ERR! package.json must be actual JSON, not just JavaScript.  
> npm ERR! Tell the package author to fix their package.json file. JSON.parse  

After some investigation there was no error with the type of file, there was simply a comma in the wrong place at the end of an object.  
After this problem was solved I still couldn't install it as my node.js version was too old so I updated it using instructions found [here](https://www.hostingadvice.com/how-to/update-node-js-latest-version/):

```` 
sudo npm cache clean -f  
sudo npm install -g n  
sudo n stable
````

