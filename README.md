

# Surveychimp

**Surveychimp** är en fiktiv SaaS-tjänst som vi ska jobba med i kursens olika moment. I tjänsten kan en användare skapa Todo-listor och lägga till Todo-items.

Repot består av olika appar (microservices) och kodbibliotek. Det är skapat som monorepo med hjälp av [Nx](https://nx.dev).

## Komma igång

```bash
npm install
```

## Komponenter

### surveychimp-api

Rest-api som används av React-siten.

```bash
npx nx serve trollo-api
```

### survey-spa

React-sajt där man kan logga in och se sina todo-listor

```bash
npx nx serve trollo-spa
```

### trollo-ui

Komponentbibliotek med React-komponenter som kan användas på Reactsajten, Hemsidan eller andra platser. Använder Storybook för att visa upp komponenter.

```bash
npx nx serve trollo-api
```


### trollo-next

Hemsida gjord med NextJS

```bash
npx nx serve trollo-next
```

### trollo-lib

Bibliotek för funktioner, types och annan kod som kan användas i olika appar