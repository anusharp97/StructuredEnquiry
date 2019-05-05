********************DATABASE FIELD VALIDATION(ON THE BACKEND)*****************
Create a new folder as the project folder.
Under the project directory create two more directories.
One as the 'frontend' for the frontend(GUI).
Another as the 'backend' for the backend(server).   

Database creation on MONGODB
1. Create database named users which stores all the detials of a user.
2. Crete collection named users in that database.

Open node js command prompt in project folder.
type 'code' which will direct to the visual studio code.

ng new frontend
cd frontend
npm install -g @angular/cli
dependencies:
ng add @angular/material 
ng g c component/insert
ng g c component/login
ng g c component/search
ng g c component/searchresult
ng g c component/update
ng g c component/edit

cd ..
mkdir backend
cd backend
npm init -y
npm install --save-dev babel-cli babel-preset-env
npm install --save-dev babel-cli babel-watch
npm install express
npm install mongoose
npm install cors

Open two terminals in angular, one to run frontend and another to run the backend.
Frontend: ng serve
Backend: nodemon index.js


The project will be opened at http://localhost:4200/

