
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