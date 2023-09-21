# New-n-Improved TWITTER

<img src='./frontend/public/LOGO.png' alt='logo pic' width=60px>
A fun new app for social blogging

## What we have to offer

- connect with people/brands on a more personal level

* connect with others around a shared interest or hobby

- share photos and add inspiring captions

* find, discuss, discover new ideas or opinions

- advertise products and services

## Routes

| method | path          | purpose                                        |
| :----- | :------------ | :--------------------------------------------- |
| GET    | /             | Home Page                                      |
| GET    | /AllPosts     | all posts index page                           |
| GET    | /AboutUs      | About us page                                  |
| GET    | /CreateAPost  | Form page for creating a new post              |
| GET    | /AllPosts/:id | Details about a particular post                |
| GET    | /AllPosts/:id | View a specific post                           |
| PUT    | /CreateAPost  | Form page for editing an existing post         |
| DELETE | /AllPosts/:id | Delete a particular post                       |
| GET    | \*            | 404 page (matches any route not defined above) |
