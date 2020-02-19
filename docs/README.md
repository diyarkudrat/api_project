# Nike Shoes API

## Description

 RESTful API where you are able to CRUD Nike and Jordan shoes. Sorting functionality to sort through the different models, types, price, id, etc.

## Installation

To install this API, clone the repository, open Terminal, and run this command in that directory

```bash
npm install
```

Then run:

```
npm start
```

# How to make requests

## Get all shoes

Send a GET request to URL `localhost:3000/shoes` to get a list of all shoes.

Data will look like:

```json
[
    {
        name: 'White Cement',
        model: 'Air Jordan 3',
        type: 'basketball',
        year: '2018',
        id : '314-30065',
        price: '$149.99',
    }
]
```
The id is from the 9 character long code on the size tag for every shoe. This id is unique to the specific shoe model.

## Get a specific shoe

## Add a shoe

## Remove a shoe

## Edit a shoe