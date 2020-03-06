# Nike Shoes API

## Deployed Site URL
`https://sneaker-api-dk.herokuapp.com/`

If you do not want to clone the repository, you can use this URL.

For making requests that are described below, use the deployed URL instead of `http://localhost:3000`.


### Example
`https://sneaker-api-dk.herokuapp.com/login`


## Description

 RESTful API where you are able to CRUD Nike and Jordan shoes. Sorting functionality to sort through the different models, types, price, id, etc.

## Installation

To install this API, clone the repository, open Terminal, and run this command in that directory

```bash
npm install
```

Then run:

```
npm run dev
```

# Authentication

## Register an Account

All you'll have to do is send a POST request to `http://localhost:3000/sign-up`

Make sure you have the correct headers with the correct data type:

```
username: String

password: Password
```

You will have to login once you have registered for an account

## Login

In order to log in, send a POST request to `http://localhost:3000/login`

Make sure you have the correct headers with the correct data type:

```
username: String

password: Password
```

You should now be authenticated. You can check with the route below.

# Pre-steps Before Making Requests

Once you have logged in, you will be provided with a token in the JSON data

1. Copy your token value
2. Go to authorization tab to the left of the header tab
3. Make sure the type of token is **Bearer Token**
4. Paste your token value in the Token input field

In order to make requests, you have to be authorized to do so. Without providing your token value, you will not be able to make requests for `/api/shoes`


# How to make requests

## Get all shoes

Send a GET request to URL `localhost:3000/api/shoes` to get a list of all shoes.

Data will look like:

```json
[
    {
        _id: '5e614d4711f7e59691d10626',
        name: 'White Cement',
        model: 'Air Jordan 3',
        type: 'basketball',
        year: '1988',
        SKU: '31456-002',
        price: '225.00'
    }
]
```

The SKU is the 9 character long string located on the size tag of the shoe.

## Get a specific shoe

In order to GET request a specific shoe, copy the _id field of the specific shoe and paste it to the end of the URL.

Example:

`http://localhost:3000/api/shoes/5e614d4711f7e59691d10626`


## Create a new shoe

Make a POST request on `http://localhost:3000/api/shoes` and refer to the following names and values:

```
name: String

model: String

type: String

year: Number

SKU: String

price: Number
```

Add these key-value pairs in the Body tab

Amazing! You just created a new shoe in the API!

## Update a shoe

Send a PUT request to a specific shoe with the shoe id at the end of the URL

Update any information that is in the body tab and then the specific shoe object should update its information

## Remove a shoe

Send a DELETE request to a specific shoe with the shoe id at the end of the URL.

After making the request, it should redirect you to `http://localhost:3000/api/shoes` with the shoe you wanted to delete removed from the list.
