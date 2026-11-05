# TaskManager — Full-Stack Web Application

A simple and functional task management application built with HTML, CSS, JavaScript, PHP, and MySQL.

## Application Preview

![TaskManager Screenshot](images/taskmanager.png)

## Features

- Add new tasks
- Edit task titles
- Mark tasks as completed or pending
- Delete tasks
- Search for tasks
- Filter tasks by status
- Display task statistics
- Store tasks in a MySQL database
- Keep data persistent after page reloads

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Styling and responsive design |
| JavaScript | User interactions and DOM manipulation |
| PHP | Backend logic and API |
| MySQL | Database management |
| Fetch API | Communication between frontend and backend |
| Git & GitHub | Version control |

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
├── README.md
│
└── images/
    └── taskmanager.png
```

## Installation and Setup

### 1. Requirements

- XAMPP
- PHP
- MySQL
- A web browser

### 2. Clone the repository

```bash
git clone https://github.com/nourelhoudagasmi2-hue/TaskManager.git
```

### 3. Configure the project

Copy the project folder into the XAMPP `htdocs` directory.

### 4. Create the database

Open phpMyAdmin and create a database named:

```sql
taskmanager
```

Create the `taches` table:

```sql
CREATE TABLE taches (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    terminee BOOLEAN NOT NULL DEFAULT FALSE,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 5. Run the application

Start Apache and MySQL in XAMPP.

Open your browser and visit:

```text
http://localhost/TaskManager/
```

## How It Works

The application follows a simple client-server architecture:

1. **JavaScript** handles user interactions.
2. **Fetch API** sends requests to the backend.
3. **PHP** processes requests and communicates with the database.
4. **MySQL** stores task information.
5. **PHP** returns responses in JSON format.
6. **JavaScript** updates the interface.

## Learning Objectives

This project helped me practice:

- Frontend and backend development.
- JavaScript DOM manipulation.
- Asynchronous requests using Fetch API.
- PHP and MySQL integration.
- CRUD operations (Create, Read, Update, Delete).
- Database management.
- Git and GitHub version control.

## Future Improvements

- User authentication.
- Multiple user accounts.
- Task deadlines and priorities.
- Improved responsive design.

## Author

**GASMI NOURELHOUDA**

Full-Stack Development Student

