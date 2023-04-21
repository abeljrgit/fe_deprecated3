# Front-end Boilerplate

Front-end boilerplate using React.js, Redux, Material UI, and many more. This a culmination of my experience and what I think is better both in short-term and long-term web app development. This boilerplate is scalable and maintainable in the long run due to the usage of redux as a central state management and implementation presentation-domain-data architecture.

## Features

- Vite.js for overall bundling.
- React.js library for web app development.
- Redux(classic) and thunk for centralized state management.
- React-router for routing.
- Prop-types for defining types in react components.
- UI libraries like Material UI, carousel, spinners, etc.
- Axios for api consumptions.
- UUID for unique id generator.

## Run Locally

Download the repository

Go to the project directory

Install dependencies(npm):

```bash
  npm install
```

Start the vite development server(npm):

```bash
  npm run dev
```

Build your work(npm, target ES6)

Production

```bash
  npm run build
```

UAT

```bash
  npm run build:uat
```

STAGING

```bash
  npm run build:staging
```

Test your work(npm, vitest)

```bash
  npm run test
```

## Folder Structure

Implemented presentation-domain-data architecture.

    src
    ├── data
    |   ├── api
    |   └── storage
    ├── domain
    |   ├── actions
    |   ├── reducers
    |   ├── actionTypes.js
    |   └── store.js
    └── presentation
        ├── assets
        ├── components
        ├── helpers
        ├── modules
        └── routes

## Documentation

[Vite.JS](https://vitejs.dev/guide/)  
[Vitest](https://vitest.dev/guide/)  
[React.JS](https://react.dev/)  
[React-router](https://reactrouter.com/en/main)  
[React-redux](https://react-redux.js.org/introduction/getting-started)  
[Material UI](https://mui.com/material-ui/getting-started/overview/)  
[Axios](https://axios-http.com/docs/intro)  
[Lodash](https://lodash.com/docs/4.17.15)  
[Prop-types](https://github.com/facebook/prop-types)  
[React-Material-UI-Carousel](https://learus.github.io/react-material-ui-carousel/)  
[React-spinners](https://www.davidhu.io/react-spinners/)  
[Recharts](https://recharts.org/)  
[UUID](https://github.com/uuidjs/uuid#readme)

## Authors

- [@abeljrgit](https://github.com/abeljrgit)
- [/in/abellugtujr](https://www.linkedin.com/in/abellugtujr/)
