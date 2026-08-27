# Digital Profile API

Backend-приложение цифровой визитки разработчика.

Проект создан в рамках тестового задания на позицию TypeScript Backend Developer.

Приложение предоставляет GraphQL API, через который можно получить информацию о разработчике:
- профиль;
- навыки;
- опыт работы;
- достижения;
- проекты и используемый стек.

## Стек технологий

Backend:
- Node.js
- TypeScript
- NestJS
- GraphQL
- Apollo Sandbox
- Prisma ORM

Database:
- SQLite (локальная разработка)

Infrastructure:
- Docker
- Git

## Архитектура

Приложение построено по следующей схеме:

```
Apollo Sandbox
        |
        ↓
GraphQL Resolver
        |
        ↓
Service Layer
        |
        ↓
Prisma ORM
        |
        ↓
SQLite Database
```

Ответственность разделена следующим образом:

### Resolver

Отвечает за обработку GraphQL-запросов.

### Service

Содержит бизнес-логику и взаимодействует с Prisma.

### Prisma

Отвечает за работу с базой данных и связями между сущностями.

## Структура проекта

```
src/
├── profile/
│   ├── profile.resolver.ts
│   ├── profile.service.ts
│   ├── profile.type.ts
│   ├── skill.type.ts
│   ├── experience.type.ts
│   ├── achievement.type.ts
│   └── project.type.ts
│
├── prisma/
│   ├── prisma.module.ts
│   └── prisma.service.ts
│
└── app.module.ts

prisma/
├── schema.prisma
├── seed.ts
└── migrations/
```

## Установка

Клонировать проект:

```bash
git clone <repository-url>
```

Перейти в директорию:

```bash
cd backend
```

Установить зависимости:

```bash
npm install
```

## Настройка базы данных

Создать файл `.env`:

```env
DATABASE_URL="file:./dev.db"
```

Применить миграции:

```bash
npx prisma migrate dev
```

Заполнить базу тестовыми данными:

```bash
npx prisma db seed
```

## Запуск приложения

Режим разработки:

```bash
npm run start:dev
```

После запуска GraphQL API доступен:

```
http://localhost:3000/graphql
```

## GraphQL пример

Запрос:

```graphql
query {
  profile {
    name
    description

    skills {
      name
    }

    experience {
      company
      position
      period

      achievements {
        description
      }
    }

    projects {
      name
      role
      stack
      url
    }
  }
}
```

Пример ответа:

```json
{
  "data": {
    "profile": {
      "name": "Иван Шевченко",
      "skills": [
        {
          "name": "TypeScript"
        }
      ],
      "projects": [
        {
          "name": "Max-Raffle-Bot",
          "role": "Fullstack Developer",
          "stack": "PHP, JavaScript, REST API"
        }
      ]
    }
  }
}
```

## Database Model

Основные сущности:

### Profile

Основная информация о разработчике.

Связи:

- Skills
- Experience
- Projects

### Skill

Навыки разработчика.

### Experience

Опыт работы:

- компания;
- должность;
- период;
- достижения.

### Project

Проекты:

- название;
- описание;
- роль;
- стек;
- ссылка на репозиторий.

## Seed

При выполнении:

```bash
npx prisma db seed
```

создаются данные профиля:

- опыт работы;
- навыки;
- проекты;
- достижения.

## Docker

Проект содержит Docker-конфигурацию для запуска приложения в контейнере.

Сборка:

```bash
docker build -t digital-profile-api .
```

Запуск:

```bash
docker run -p 3000:3000 digital-profile-api
```

## Автор

Иван Шевченко

GitHub:

https://github.com/qwirlyx

Telegram:

https://t.me/shevchenk009