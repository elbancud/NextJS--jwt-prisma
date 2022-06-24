## About the Project

Nothing special here. Prisma implementation and a boilderplate (somehow). : V

## Tags

- JWT - Prisma - Axios - ANTDesign - Typescript - Redux - Next JS

## Technology integrated

```
FRONTEND
[x] - Redux
[x] - Next JS
[x] - Typescript

STYLING
[x] - UI Design - Tailwind
[x] - Admin Dashboard - ANTDesign

BACKEND
[x] - api integration

AUTH
[x] - JWT
[x] - Axios
[x] - Eslint
[x] - Prisma
[x] - uuidv4
```

## Prisma config

```
to iniitalize prisma client
> npx prisma init

to migrate db & schema
> npx prisma db push
> npx prisma migrate -dev

to generate prisma client with import and instantiation
> npx prisma generate

```

## Bells & Whistles

```
- mysql | Linux
    - use mysql_upgrade
    > sudo /opt/lampp/bin/mysql_upgrade
    - .env
        - make sure to start DATABASE_URL with "mysql://"
        - make sure same port

- Error | Field does not exist on enclosing type
    >>> Fix
        - restart the server
        - regenerate & remigrate schema
- Performance
    - Memoization
        - In the admin authentication, memoization basically means to store the last input and from there make a validation then perform a certain function. In this way, there would be a performance optimization since we are returning last output rather than re performing the function.
        - href: https://whatthefuck.is/memoization
```
