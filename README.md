# New-n-Improved TWITTER

A fun new app for social blogging

## What we have to offer

- connect with people/brands on a more personal level

* connect with others around a shared interest or hobby

- share photos and add inspiring captions

* find, discuss, discover new ideas or opinions

- advertise products and services

## Routes

| method | path                          | purpose                                        |
| :----- | :---------------------------- | :--------------------------------------------- |
| GET    | /                             | Home Page                                      |
| GET    | /posts                        | all posts index page                           |
| POST   | /posts                        | creates new post                               |
| GET    | /posts/new                    | Form page for creating a new post              |
| GET    | /posts/:id                    | Details about a particular post                |
| PUT    | /posts/:id                    | Update a particular post                       |
| GET    | /posts/:id/edit               | Form page for editing an existing post         |
| DELETE | /posts/:id                    | Delete a particular post                       |
| POST   | /posts/:id/comment            | Create a comment about a particular post       |
| DELETE | /posts/:id/comment/:commentId | Delete a comment about a particular post       |
| GET    | \*                            | 404 page (matches any route not defined above) |
