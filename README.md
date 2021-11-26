# SpaceX launches

Simple website for showing next, latest, upcoming and past launches from SpaceX.

[Click here for live preview](https://spacex.entusiasta.dev/).

## Modules

The project is divided into back-end (built with **Node.js**) and front-end (built with **React** and **Next.js**).

### Back-end

This module simply perform requests to the [SpaceX API](https://github.com/r-spacex/SpaceX-API) and return them to the client.

### Front-end

This is the website. It consumes the back-end API and renders the content in a clean, visual fashion.

## Build

You only need a few commands to preview it in localhost.

### Install dependencies

```text
cd backend && npm install
cd ..
cd frontend && npm install
```

### Run

Open a new terminal window and run the back-end server from the `backend` directory:

```text
npm run start
```

Open another terminal window and run from `frontend` directory:

```text
npm run dev
```

You should see the following output

```
> dev
> next dev

ready - started server on 0.0.0.0:3000, url: http://localhost:3000
event - compiled successfully in 1743 ms (189 modules)
wait  - compiling /_error...
event - compiled successfully in 98 ms (190 modules)
wait  - compiling /...
event - compiled successfully in 493 ms (511 modules)
```

Now go to `http://localhost:3000`.

## Testing

Tests available under the `backend/test` folder. Run `npm run test`.
