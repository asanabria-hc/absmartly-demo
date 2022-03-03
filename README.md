# absmartly-demo

The purpose of this project is to debug and fix absmartly wrong behaviors with Next.js.

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Setup Environment Variables

Before launching the application, you must create a `.env.local` file in the
root directory. This file is used by Next.js to load the required environment
variables, you can learn more about it in
[this documentation](https://nextjs.org/docs/basic-features/environment-variables).
File `.env.local` is also used by Docker to build the application.

Create the file:

```bash
touch .env.local
```

Once you create it, copy the contents of `.env.example` to `.env.local` and
assign the variables to actual values.

### Launch Application

Install dependencies.

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

### Debug

We have provided a `postman_collection.json` file that can be used to debug
the absmartly sdk in the application api route and a \_middleware.
