# TaskManager — Full-Stack Web Application
## Application Preview

![TaskManager Screenshot](./images/taskmanager.png)
A task management application developed using HTML, CSS, JavaScript, PHP and MySQL.

This project started as a JavaScript To-Do List application and was later upgraded into a Full-Stack application with a PHP backend and a MySQL database.

## Featuresages/taskmanager.png)

- Add new tasks
- Display all tasks
- Edit task titles
- Mark tasks as completed or uncompleted
- Delete tasks
- Search tasks
- Filter tasks (All, In Progress, Completed)
- Display task statistics
- Store tasks permanently in MySQL

## Technologies Used

| Technology | Role |
|---|---|
| HTML5 | Page structure |
| CSS3 | Design and responsive interface |
| JavaScript | Frontend interactions |
| PHP | Backend processing |
| MySQL | Database management |
| PDO | PHP-MySQL connection |
| Fetch API | Frontend/backend communication |
| JSON | Data exchange |
| XAMPP | Local development environment |

## Project Structure

```text
TaskManager/
│
├── index.html
├── style.css
├── script.js
├── api.js
├── api.php
├── connexion.php
└── test.php
```

## Installation and Setup

### 1. Requirements

- XAMPP
- Visual Studio Code
- Web browser

### 2. Clone or download the project

Place the project folder inside:

```text
C:\xampp\htdocs\
```

### 3. Start XAMPP

Start the following services:

- Apache
- MySQL

### 4. Create the database

Open phpMyAdmin:

```text
http://localhost/phpmyadmin
```

Create a database named:

```text
taskmanager
```

Create a table named `taches` using the following SQL:

```sql
CREATE TABLE taches (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    terminee BOOLEAN NOT NULL DEFAULT FALSE,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 5. Configure the database connection

Check `connexion.php` and make sure the database connection matches your local MySQL configuration.

### 6. Run the application

Open your browser and visit:

```text
http://localhost/TaskManager/
```

## How It Works

The application follows a simple Full-Stack architecture:

1. JavaScript handles user interactions.
2. The Fetch API sends requests to the PHP API.
3. PHP processes requests and communicates with MySQL.
4. MySQL stores the tasks.
5. PHP returns responses in JSON format.
6. JavaScript updates the interface.

## Learning Objectives

This project helped me understand:

- Frontend and backend development
- PHP and MySQL integration
- Database operations (CRUD)
- API communication
- Asynchronous JavaScript
- JSON data exchange
- Persistent data storage

## Future Improvements

- User registration and login
- PHP sessions and authentication
- Improved application security
- Better code organization
- Deployment online

## Author

**GASMI NOURELHOUDA**

Full-Stack Web Development Learning Project.
