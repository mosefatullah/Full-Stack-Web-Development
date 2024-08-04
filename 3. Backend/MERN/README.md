----- ++ Learn With Sumit Free Course ++ ------

----- ++ Learn With Sumit Free Course ++ ------

-----------------------------------------------------------------------------------------------------
Basics (States, Props, Components, Compositions)
-----------------------------------------------------------------------------------------------------
- React Prerequisities (JS Basics, JS ES6, JS OOP, React Basics)
- 
- JSX (Javascript XML) & HTML to JSX Convert (Tag attribute, Ending tag, '/' on Image src), JSX Element's Properties (It doesn't look like HTML element's property, but similar to DOM Object's property)
-
- Rendering Elements, JSX Fragments (<> </>) (For writing no tagname), JSX Interpolation (Write single JS in JSX elements like `<h1>{name}</h1>`) (React escape this {name} for security)
- 
- React's Block (React's so small building block is JSX element, and then React's component) (We can nest components), React Virtual DOM vs Real DOM (Virtual DOM is pure JS Object but DOM is not JS Object), React vs React-dom (React helps us creating JSX elements, React-dom helps us rendering virtual-dom)
- 
- React Issue (React's element is enumerable, which means you can't change tagname or UI, but can change value 'by changing data/state' and by working with 'components') (Every name of the element properties must be in Camel Case, due to JS)
- 
- React Functional Components and Props (It returns react elements, we can reuse it, it recieves properties from outside which is called props)
- 
- React Class Components and Props (It's not entirely same with the functional component, it has class's features. To get it's props, we have to write this.props)(Stateful component)
- 
- React State & Lifecycle Method (Props means only setting data outside of components & state means setting and also changing data inside of)(Lifecycle hook: componentDidMount(), componentWillUnmount() - on loading & on closeing page)
- 
- React Event Handling (CamelCase in naming, ), This problem on event function in class object (Solution is arrow function  /  using bind inside of class constructor),  Sending Parameters (Using .bind(this, parameter)  /  arrow function {(p)=>func(p)}),  Detect re-render & stop (Using lifecycle hook shouldComponentUpdate(nextProps) & comparing two props - is equal or not), Best Practise (Don't send parameter & send parameter by props)
- 
- React Conditional Rendering (Storing on variables & use on if else outside render() & then use the variable by curly bracket in render() / Using ternary operator)(Falsy value: 0,null,undefined,false,"",NaN)(Render() stoping: return null;)
- 
- React List & Keys (Using map instead of for loop; Jsx can take array of blocks; We must create a unique key in each blocks of the array for react's purpose; don't use array index as the unique key)
- 
- React Form Handling (Input, Textarea, Select, Checkbox, Submit)(All has value property; Must change all's value by react's state), Controlled vs Uncontrolled Component (React form is controlled, html form is uncontrolled; Can easily use input's value anywhere by react's state)(Forget using DOM's system in react which is uncontrolled, just use react state. But you must use DOM's system for file input using ref)(For using those inputs as uncontrolled set their value to null)
- 
- React Lifting State Up (Moving 'state' child to parent for solving problem; One-way data flow; Top-down approach; For these reasons, React is known for unidirectional data flow; In this way, Component access another component by their parent component)
- 
- React Composition vs Inheritance (React inspires us using composition instead of inheritance - OOP concept; Composition is the solution of it where we pass function as props then wrapping) (Dont use inheritance, due to this, components become dependant, tightly coupled & hard to find dependancy) (Multiple composition : Using nested wrapping)
- 
- React Higher Order Component (Avoids Props Drilling Problem Though Similar to Lifting State Up but scalable way when components are scattered)(A function takes component as a parameter & returns new)(Used to reduce duplicate states & functionalities and put to one place)
- 
- React Render Props (Uses Render Props Technique, But Alternative of HOC; A function passed in props for rendering specific component, It's a matter of wonder that the component don't know what will he render; only the function provided in the parent component knows)
- 
- React Context Api (Passing data or state from top to bottom component; it properly Solves Props Drilling Problem and A 3rd Party Solution; No Distance of Components Can Break This; contextType, useContext)




-----------------------------------------------------------------------------------------------------
Advanced
-----------------------------------------------------------------------------------------------------
- React Hooks (Simple functions for solving problems whenever faces related to states, lifecycle methods, duplicate codes and sharing same logic)
- 
- React UseState (State initializing, setting & getting states; how does it work behind the scene? proper state management)
- 
- React UseEffect (Working with side effects, outside of the responsibilities of react like changing dom, fetching data, setting subscriptions, times) (Component mount, unmount & update)
- 
- React UseCallback & UseMemo (Two higher order components, all about caching & hooks that memorize returned value & function's reference & forget when their dependencies change, used for performance optimization by controlling rerendering. Wrapping component or function with returned values with React.memo()) (UseCallback - To solve function reference problem in props which causes rerendering always. Wrapping function with React.useCallback(), has a array dependency like useEffect) 
- 
- React UseRef (DOM Reference - getting reference of an element with reactive way) (React ForwardRef is used for component; not for an element, it returns new component similarly like HOC pattern) (UseRef as a storage - rerendering can't change it's value; just setting value of myRef.current for storing)
- 
- React UseReducer (Related to state management; useState founded based on it; js reduce vs useRed.; it's supports action-based state changing while useState don't; scenario - state & action as primitive value/object, useRed. with useContext, useRed. with useEffect, useRed. vs useState) (number of state change - (1-3: useState), (3+: useRed.); many related states/complex logic - useRed.; data type of states - (string, number, boolean: useState), (object, array: useRed.); scope of state - (local: useState), (global: useRed.)) (it has class component's flavour)
- 
- React Custom Hook (Writing a function whose name starts with 'use', used to share logics, avoiding duplicate logics, solving complex problems and alternative to HOC & render props) (writing a function where all the logic will be written, even react's hooks can be used & finally the output will be returned inside the function itself)
-
- React Styling Component (Ways as like as stylesheet, Inline style, css modules and css in js) ()
- 
- React Router (Old vs v6) (Hooks) (Routing to pages without refreshing), Error Page Making With React Router
-
------------------------------------------------------------------------
Material UI, Ant Design - UI Library
React Strap - Bootstrap
React Router - Routing
Redux - State container
Mobx - State management
------------------------------------------------------------------------
REF[]

* Redux in 30 minutes :-
0. Application -> Action -> Reducers -> Store; (repeats)
1. State -> Action -> View
2. Concepts - Store (storing data), provider (wrapping components), reducer (changing data), action (check the reducers), useDispatch, thunk, useSelector (get the data)
3. Redux dev tool & it's extension



## What is the Syllabus of Nodejs?

---- **About Nodejs** (How it is event-driven, non-blocking I/O, asynchronus and single-threaded) (error back pattern in a callback function)

---- **Global Object & Module System** (Nodejs has global object but dont has window object. Modular system has privity, code organization, reusability, encapsulation, and scalability. Nodejs is is modular by design) (Behind the scene of `module, exports, require, __dirname, __filename`)

---- **Server & Core Modules** (Creating server with http module. Core modules of nodejs like fs, events, os, path, http) (All frameworks of nodejs are based on core modules)

---- **Stream & Buffer** ($Stream = ∑Buffers$) (Buffer is a binary based data type, small part of stream and stream comes to browser as many parts called chunks. Buffers are packets of chunks. These decrease loading time) (fs.createRreadStream, chunk.toString, Buffer().concat(), writeStream, pipe)

---- **Anatomy Of A Nodejs Application** (Application running command - node index/app) (`index.js/app.js`: comment section, dependency section, module scaffolding/app object, configuration object, function declaration, function invocation) (Application has control over server)

---- **Raw Project for Understanding** (Uptime monitoring api : restful api, authentication, authorization, user signup & add/edit settings, sms notification using twilio api - with raw nodejs, no modules)

**Requirements Analysis :-**

1. Start the API Server
2. Create, Edit, Delete User
3. Token based authentication
4. Logout Mechanism
5. Set links & Up/Down
6. Edit/Delete links & rate limit
7. Check up/down time

**Environment** - Eslint & Prettier (eslint, eslint-config-airbnb-base, eslint-config-prettier, eslint-plugin-import, eslint-plugin-prettier, prettier), Server restarting (nodemon)

**Database** - JSON (Unreal; Only for Our Project)

**[Part1]** (Built-in modules - http, url, string_decoder) (index.js, helpers/handleReRes.js, routes/routes.js, routes/handlers/sampleHandler.js, routes/handler/notFoundHandler.js)

**[Part2]** (Environment variables - run `KEY=VALUE node index/app` & use `process.env.KEY`; nodemon - for windows : `SET \"NODE_ENV=production\" && nodemon index`, for mac : `NODE_ENV=production nodemon index`) (helpers/environment.js, .data/, lib/data.js)

**[Part3]** (Built-in module for hash - crypto) (CRUD handling for users) (.data/users/, routes/handlers/userHandler.js, helpers/utilities.js)

**[Part4]** (Generating tokens by creating simple random string) (CRUD handling for tokens) (routes/handlers/tokenHandler.js, .data/tokens/)

**[Part5]** (Max limits in environment variable like 5 checks) (CRUD handling for checks) (routes/handlers/checkHandler.js, .data/checks/)

**[Part6]** (Built-in modules - https, querystring) (Using twilio api for sending messages to user's phone) (helpers/notify.js)

**[Part7]** (Running background workers in loop) (lib/server.js, lib/workers.js)

---- **Expressjs** (Micro-framework for creating complete web application using nodejs & making API) (express(), application, request, response, router)

---- **Express Function** (.json() - json body parseing, .raw() - raw body parsing, .text() - text body persing, .urlencoded() - url encoded body parsing, .static(__dirname + '/public/') - public folder, .Router() - routing mechanism)

---- **Express Application** (.locals - storing variables, .mountpath - root path of sub app, .on("mount") - mount event for sub app, .all() - all http methods for routes, .enable() - enable an option, .disable() - disable an option, .METHOD_NAME() - specific http methods, .get/set() - setting & getting variables, .listen() - starts server, .param() - url parameter, .path() - canonical path of sub app, .route() - group of routes, .use() - using middleware, template engine rendering - 0)

---- **Express Request** (represents the http request; properties : .baseUrl - base path of current app, .originalUrl - original path of current app, .path - path of current app, .host - hostname of server, .ip - ip address of server, .method - request method, .protocol - https/http/others, .params - object of parameters with colon, .query - request query parameters, .body - request body, .cookies - client's cookies, .signedCookies - client's secured cookies, .secure - is https or non-https, .app - application object, .route - route object) (.body requires parser like express.json() & .cookies requires cookie-parser) (methods : .accepts() - checking client's fomat, .get() - getting a header)

---- **Express Response** (properties : .app - application object, .headersSent - is headers sent, res.locals - local variables in template; methods : .cookie() - setting cookie, res.clearCookie() - clearing cookie, .end() - ending response process, .send() - ending with data, .json() - sending json, .status() - setting status code, .sendStatus() - sending status code with data, .render() - renders a view, .format() - sending data with multiple content types, .location() - sets the response location for redirecting, .redirect() - auto redirect, .get/set() - getting or setting header)

---- **Express Middleware** (types - application-level, routing-level, built-in, error-handling)

---- **Express Router** (methods : .all() - all http methods, .METHOD_NAME() - specific http method, .param() - url parameter, .route() - group of routes, .use() - using middleware) (route path - can not only use strings but also pattern and regular expression or regex)

---- **Error Handling** (managing errors in both synchronous and asynchronous contexts) (synchronous system - express's default error handler operates invisibly; to modify that we have to write our custom middleware function down below & then send our response) (asynchronous system - passing error to next functio, detected from built-in error objects or try-catch blocks) (middleware chaining in route arrays - reduces asynchronous code, making it more synchronous)

---- **File Upload with Multer** (parsing multi-part data or form data; methods : .single - one field & one file, .array - one field but multiple files, .fields - multiple fields, .none - not files but form data) (file upload validation properties : limits, limits.fileSize - size limit in bytes, limits.fileFilter - callback function for validation) (file configuration methods : .diskStorage - modify destination & filename)

---- **MongoDB Introduction & Installation** (mongodb is a nosql language and non-relational database management system; it's useful for javascript developers, because it uses bson format (lightweight, traversable, and efficient rather than json) similar to the structures of json) (sql to nosql : table - collection, row - document, column - field) (locally installation - try free > mongodb local > mongodb community server > download; then read the docs - docs > server > installation > community edition > follow the processes)

---- **MongoDB Basic CRUD Commands** (Command of opening mongo shell : mongo) (default database - admin, config, local (don't touch)) (mongodb commands : show dbs - showing all databases, use NAME - create & switch to a new database, db - current database, db.NAME - create a new collection, db.NAME :- .insertOne({}) - insert a document, .find()/.find().pretty()/... .limit()/skip() - find all documents, .insertMany([]) - insert multiple documents, .findOne() - find one collection, .updateOne({}, {})/.updateMany({}, {}) - updating collections (find+update), .deleteOne({})/deleteMany({}) - deleting collections) (MongoDB compass is for visualization without any commands)

---- **Mongoose CRUD Application** (Mongoose is a Object Data Modeling for mongodb, it uses OOP, not functional; it's used to model the data as js object; Mongoose connects to the MongoDB server automatically, whereas MongoDB does not) (Benefits - abstraction from raw low level mongodb, relation between nosql data, provides schema validation, translation of data into object, 40 to 60% less code compared to raw mongodb package) (topics - schema design, mongoose model using schema) (CRUD methods : .find, .findById, .save, .insertMany, .updateOne, .deleteOne, .findByIdAndUpdate) (regular expressions are supported for finding data)

---- **Mongoose Instance Methods, Static & Query Helpers** (Instance methods - comes from class through instance; example - mongoose.Schema; also we can create custom methods into `mySchema.methods = {}`; can't access the model without the model instance) (Static methods - can be called directly without creating an instance of the class first; we can write static methods into `mySchema.statics = {}`; the model can be accessed by this keyword) (Query helpers - which are like instance methods but for mongoose queries; we can write helper methods into mySchema.query = {}) (Do not declare statics using ES6 arrow functions (=>))

---- **Mongoose Populate Relational Data** (working with relational data) (methods - .populate - connecting with relational collection & retrieves data) (aggregation - advanced topic)

---- **Authenticate with JSON Web Token** (password hashing package - bcrypt) (jsonwebtoken or jwt is used for Authorization, not Authentication; usually used to manage user sessions on a website - upon reopening the website, the client sends the JWT to the server. If valid, the user is authenticated, continuing without logging in again)

---- **Project - Full-stack Node Chat Application** ()

**Requirement Analysis :-**

1. Application architecture 
    (backend - MVC pattern) (frontend - ejs template engine)
2. Application wireframes 
    (mostly used pages - login page, inbox page)
3. Database design 
    (users - username, name, email, password, avater, mobile, role) (messages - text, attachment, sender, reciever, sent_at, conversation_id) (conversations : id, creator_id, participant, last_updated) (database relations)
4. Functionalities 
    (addUser, login, deleteUser, editUser, getConversations, getMessages, sendMessage, addConversation, deleteConversation)
5. Role based authorization

* (npm packages - express, dotenv, ejs, mongoose, multer, cookie-parser, express-validator, jsonwebtoken, bcrypt, http-errors, socket.io, moment) (./controllers, ./middlewares, ./views, ./public, ./routes, ./models, .utilities/)


-----------------------------------------------

[] Features of Express Micro Framework :-

1. Creating Multipage Application Like PHP.
2. Creating REST API Service.
3. Creating GraphQL Server.
4. Creating Real Time Application With Web Socket.
5. Creating Video-Audio Communication Application With Webrtc.
6. Creating gRPC Based Application.


[] What to Learn As A Beginner?

REST API
- Learning Open API Specification.
- Writing REST API.
- Making API Documentation with Swagger.
- Testing API with Insomnia, Postman or Thunder Client.
- GraphQL Alternative Of REST API.

EXPRESSJS
- Everything About Express JS.
- Using Template Engine for Multipage Application.

UTILITY TOOLS
- Using Tools for Session & Cookies.
- Using ORM for Working With Databases.
- Using MongoDB with Mongoose.
- Using SQL with Sequelize.
- Using JWT, PassportJS for Authentication.
- Using Oauth2 for Multiple Authentication.
- Using Multer for File Upload Management.
- Using Tools to Send Stream Response.
- Using Socket io for Realtime Features.
- Using SMTP Server & Sending Bulk Email.
- Using Nodemailer for Email.
- Using SMS Alert, 2FA & Verification Code.
- Using Twilio, Sendgrid and Pusher.
- Using 3rd Party Storage Services, Central Log Service & Cashing.
- Using Cloudinary, AWS S3 and Vimeo.