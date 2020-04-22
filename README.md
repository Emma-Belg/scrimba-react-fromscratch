# scrimba-react-fromscratch

Making a React project from scratch so that I can learn more about the process.

Using the instructions found [here](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658).

What is Babel and why use it?
https://babeljs.io/docs/en/


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

