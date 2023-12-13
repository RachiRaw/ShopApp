# ShopApp eCommerce Platform

> Built with MERN stack and Redux Toolkit

<a href="https://shopapp-xb30.onrender.com/">Link to the finished site</a>

## Features

- Shopping Cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder

## Environment Variables

These are environment variables in the .env file

NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = your_jwt_secret
PAYPAL_CLIENT_ID = your paypal client id
PAGINATION_LIMIT = 8

Depending on your payment processor,further env variables may be required

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install


### Run

```

# Run frontend vite client

cd frontend/ npm run dev

# Run frontend (:3000) & backend (:5000)

npm run dev

# Run backend only

npm run server

```

## Build & Deploy

```

# Create frontend production build

cd frontend
npm run build

In vite the build will be saved in the folder 'dist'

### Schemas

```
# Orders
# Users
# Products


```
