# Digital Profile API

Backend-приложение цифровой визитки разработчика.

Проект создан в рамках тестового задания на позицию TypeScript Backend Developer.

Приложение предоставляет GraphQL API, через который можно получить информацию о разработчике:

- профиль;
- навыки;
- опыт работы;
- достижения;
- проекты и используемый стек.

## Live Demo

API:

https://digital-profile-api.vercel.app/

GraphQL Sandbox:

https://digital-profile-api.vercel.app/graphql

## Стек технологий

Backend:

- Node.js
- TypeScript
- NestJS
- GraphQL
- Apollo Server / Apollo Sandbox
- Prisma ORM

Database:

- PostgreSQL
- Neon

Infrastructure:

- Vercel
- Docker
- Git
- GitHub

## Архитектура

Приложение построено по следующей схеме:

```text
Apollo Sandbox / GraphQL Client
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
        PostgreSQL
              |
              ↓
             Neon
```

Ответственность разделена следующим образом:

### Resolver

Отвечает за обработку GraphQL-запросов и передачу выполнения в сервисный слой.

### Service

Содержит бизнес-логику приложения и взаимодействует с Prisma.

### Prisma

Используется как ORM для работы с PostgreSQL, миграциями и связями между сущностями.

### PostgreSQL

Хранит данные профиля, навыков, опыта, достижений и проектов.

Production-база размещена в Neon.

## Структура проекта

```text
src/
├── profile/
│   ├── profile.module.ts
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
├── app.controller.ts
├── app.service.ts
├── app.module.ts
└── main.ts

prisma/
├── schema.prisma
├── seed.ts
└── migrations/
```

## Установка

Клонировать проект:

```bash
git clone https://github.com/qwirlyx/digital-profile-api.git
```

Перейти в директорию проекта:

```bash
cd digital-profile-api
```

Установить зависимости:

```bash
npm install
```

## Настройка базы данных

Проект использует PostgreSQL.

Создайте файл `.env`:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?schema=public"
PORT=3000
```

Для подключения к Neon используется строка подключения PostgreSQL, полученная в панели Neon.

Пример:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST/DATABASE?sslmode=require"
PORT=3000
```

Файл `.env` не хранится в репозитории.

## Prisma

Сгенерировать Prisma Client:

```bash
npx prisma generate
```

Применить существующие миграции:

```bash
npx prisma migrate deploy
```

Для локальной разработки и создания новых миграций:

```bash
npx prisma migrate dev
```

Заполнить базу начальными данными:

```bash
npm run prisma:seed
```

## Запуск приложения

Режим разработки:

```bash
npm run start:dev
```

Production-сборка:

```bash
npm run build
npm run start:prod
```

После запуска API доступен по адресу:

```text
http://localhost:3000/
```

GraphQL:

```text
http://localhost:3000/graphql
```

## API Status

При запросе:

```text
GET /
```

API возвращает информацию о состоянии приложения:

```json
{
  "name": "Digital Profile API",
  "status": "ok",
  "description": "GraphQL API with developer profile data",
  "graphql": "/graphql",
  "database": "PostgreSQL"
}
```

## GraphQL

Основной GraphQL endpoint:

```text
/graphql
```

Для публичной демонстрации включен GraphQL introspection, поэтому схему API можно изучить непосредственно через Apollo Sandbox.

Пример запроса:

```graphql
query {
  profile {
    name
    description
    github
    telegram

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
      description
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
        },
        {
          "name": "NestJS"
        },
        {
          "name": "PostgreSQL"
        }
      ],
      "projects": [
        {
          "name": "Max-Raffle-Bot",
          "role": "Fullstack Developer",
          "stack": "PHP, JavaScript, REST API, Telegram API, VK API"
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

Каждый навык связан с Profile.

### Experience

Опыт работы:

- компания;
- должность;
- период;
- достижения.

### Achievement

Отдельные достижения, связанные с записью Experience.

### Project

Проекты разработчика:

- название;
- описание;
- роль;
- стек;
- ссылка на репозиторий.

## Связи сущностей

```text
Profile
├── Skill[]
├── Experience[]
│   └── Achievement[]
└── Project[]
```

Для связанных сущностей используются внешние ключи PostgreSQL и каскадное удаление.

## Seed

При выполнении:

```bash
npm run prisma:seed
```

создаются начальные данные:

- профиль;
- опыт работы;
- навыки;
- проекты;
- достижения.

Seed используется для быстрого наполнения новой базы данных демонстрационными данными.

## Portfolio Projects

### Max-Raffle-Bot

Role:

Fullstack Developer

Stack:

PHP, JavaScript, REST API, Telegram API, VK API

Description:

Мультиплатформенный сервис автоматизации розыгрышей и промо-механик.

Repository:

https://github.com/qwirlyx/Max-Raffle-Bot-

### Response Rate Service

Role:

Backend Developer

Stack:

PHP, MySQL, REST API, Webhooks, Cron

Description:

Сервис аналитики рабочих обсуждений и контроля ответов через Basecamp API.

Repository:

https://github.com/qwirlyx/Response-Rate-Service

### Basecamp Tag Tracker

Role:

Backend Developer

Stack:

PHP, REST API, MySQL

Description:

Сервис синхронизации и отслеживания данных Basecamp.

Repository:

https://github.com/qwirlyx/Basecamp-Tag-Tracker

### Convertor Files

Role:

Fullstack Developer

Stack:

PHP, Python, FFmpeg

Description:

Сервис конвертации и обработки файлов различных форматов.

Repository:

https://github.com/qwirlyx/Convertor-files

### Game Jumping Hink

Role:

Frontend / Fullstack Developer

Stack:

JavaScript, PHP, HTML, CSS

Description:

Веб-игра с игровой механикой, пользовательским интерфейсом и серверной частью.

Repository:

https://github.com/qwirlyx/Game-jumping-hink

### AI Agent

Role:

AI Engineer / Backend Developer

Stack:

Python, LLM API, REST API

Description:

Экспериментальный AI-агент с LLM API и интеграцией внешних сервисов.

Repository:

https://github.com/qwirlyx/AI-Agent-

## Docker

В проекте присутствуют `Dockerfile` и `docker-compose.yml`.

Docker Compose поднимает:

- PostgreSQL;
- backend-приложение.

Запуск PostgreSQL:

```bash
docker compose up -d db
```

После запуска базы можно применить миграции и seed:

```bash
npx prisma migrate deploy
npm run prisma:seed
```

Запуск приложения:

```bash
docker compose up --build
```

## Deployment

Production backend развернут на Vercel:

https://digital-profile-api.vercel.app/

GraphQL Sandbox:

https://digital-profile-api.vercel.app/graphql

PostgreSQL размещен в Neon.

Production `DATABASE_URL` хранится в Environment Variables Vercel и не публикуется в GitHub.

## Repository

https://github.com/qwirlyx/digital-profile-api

## Автор

Иван Шевченко

GitHub:

https://github.com/qwirlyx

Telegram:

https://t.me/shevchenk009