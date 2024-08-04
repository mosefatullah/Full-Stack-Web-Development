[] Features of Express Micro Framework :-

1. Creating Multipage Application (Template Engine) Like PHP.
2. Creating REST API Service.
3. Creating GraphQL Server.
4. Creating Real Time Application With Web Socket.
5. Creating Video-Audio Communication Application With Webrtc.
6. Creating gRPC Based Application.

---- **Expressjs** (Micro-framework for creating complete web application using nodejs & making API) (express(), application, request, response, router)

---- **Express Function** (.json() - json body parseing, .raw() - raw body parsing, .text() - text body persing, .urlencoded() - url encoded body parsing, .static(__dirname + '/public/') - public folder, .Router() - routing mechanism)

---- **Express Application** (.locals - storing variables, .mountpath - root path of sub app, .on("mount") - mount event for sub app, .all() - all http methods for routes, .enable() - enable an option, .disable() - disable an option, .METHOD_NAME() - specific http methods, .get/set() - setting & getting variables, .listen() - starts server, .param() - url parameter, .path() - canonical path of sub app, .route() - group of routes, .use() - using middleware, template engine rendering - 0)

---- **Express Request** (represents the http request; properties : .baseUrl - base path of current app, .originalUrl - original path of current app, .path - path of current app, .host - hostname of server, .ip - ip address of server, .method - request method, .protocol - https/http/others, .params - object of parameters with colon, .query - request query parameters, .body - request body, .cookies - client's cookies, .signedCookies - client's secured cookies, .secure - is https or non-https, .app - application object, .route - route object) (.body requires parser like express.json() & .cookies requires cookie-parser) (methods : .accepts() - checking client's fomat, .get() - getting a header)

---- **Express Response** (properties : .app - application object, .headersSent - is headers sent, res.locals - local variables in template; methods : .cookie() - setting cookie, res.clearCookie() - clearing cookie, .end() - ending response process, .send() - ending with data, .json() - sending json, .status() - setting status code, .sendStatus() - sending status code with data, .render() - renders a view, .format() - sending data with multiple content types, .location() - sets the response location for redirecting, .redirect() - auto redirect, .get/set() - getting or setting header)

---- **Express Middleware** (types - application-level, routing-level, built-in, error-handling)

---- **Express Router** (methods : .all() - all http methods, .METHOD_NAME() - specific http method, .param() - url parameter, .route() - group of routes, .use() - using middleware) (route path - can not only use strings but also pattern and regular expression or regex)

---- **Error Handling** (managing errors in both synchronous and asynchronous contexts) (synchronous system - express's default error handler operates invisibly; to modify that we have to write our custom middleware function down below & then send our response) (asynchronous system - passing error to next functio, detected from built-in error objects or try-catch blocks) (middleware chaining in route arrays - reduces asynchronous code, making it more synchronous)

---- **File Upload with Multer** (parsing multi-part data or form data; methods : .single - one field & one file, .array - one field but multiple files, .fields - multiple fields, .none - not files but form data) (file upload validation properties : limits, limits.fileSize - size limit in bytes, limits.fileFilter - callback function for validation) (file configuration methods : .diskStorage - modify destination & filename)
