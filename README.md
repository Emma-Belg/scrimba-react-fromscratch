# scrimba-react-fromscratch

Making a React project from scratch so that I can learn more about the process.
Making a React app from scratch involves using:  
1. a compiler  
2. a bundler
3. React (using npm)  
  
For this particular practice I am using the instructions found [here](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658).

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


## Further notes  

I came across this error when trying to install React Hot Loader (using: `npm install react-hot-loader`).
> npm ERR! Failed to parse package.json data.  
> npm ERR! package.json must be actual JSON, not just JavaScript.  
> npm ERR! Tell the package author to fix their package.json file. JSON.parse  

After some investigation there was no error with the type of file, there was simply a comma in the wrong place at the end of an object.  
After this problem was solved I still couldn't install it as my node.js version was too old so I updated it using instructions found [here](https://www.hostingadvice.com/how-to/update-node-js-latest-version/):

> sudo npm cache clean -f  
> sudo npm install -g n  
> sudo n stable  




