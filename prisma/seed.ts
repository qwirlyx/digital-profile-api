import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.profile.deleteMany();

  await prisma.profile.create({
    data: {
      id: 'ivan-shevchenko',

      name: 'Иван Шевченко',

      description:
        'Fullstack Developer. Разрабатываю backend-сервисы, интеграции, автоматизации и AI-инструменты.',

      github:
        'https://github.com/qwirlyx',

      telegram:
        'https://t.me/shevchenk009',

      skills: {
        create: [
          { name: 'TypeScript' },
          { name: 'JavaScript' },
          { name: 'Node.js' },
          { name: 'NestJS' },
          { name: 'PHP' },
          { name: 'Python' },
          { name: 'SQL' },
          { name: 'PostgreSQL' },
          { name: 'MySQL' },
          { name: 'MongoDB' },
          { name: 'REST API' },
          { name: 'GraphQL' },
          { name: 'Git' },
          { name: 'Docker' },
        ],
      },

      experience: {
        create: [
          {
            company: 'Старик Хинкалыч',

            position:
              'Fullstack Developer',

            period:
              '2025–2026',

            achievements: {
              create: [
                {
                  description:
                    'Разработка внутренних сервисов автоматизации бизнес-процессов.',
                },
                {
                  description:
                    'Создание CRM-инструментов и интеграций с внешними системами.',
                },
                {
                  description:
                    'Разработка REST API, webhooks и фоновых процессов.',
                },
                {
                  description:
                    'Создание AI-инструментов для работы с корпоративными данными.',
                },
              ],
            },
          },

          {
            company:
              'DevSolutions',

            position:
              'Web Developer',

            period:
              '2024–2025',

            achievements: {
              create: [
                {
                  description:
                    'Разработка веб-приложений, серверной логики и интеграций.',
                },
              ],
            },
          },
        ],
      },

      projects: {
        create: [
          {
            name:
              'Max-Raffle-Bot',

            description:
              'Мультиплатформенный сервис автоматизации розыгрышей с интеграциями Telegram, VK и MAX.',

            role:
                'Fullstack Developer',  
                            
            stack:
              'PHP, JavaScript, REST API, Telegram API, VK API',

            url:
              'https://github.com/qwirlyx/Max-Raffle-Bot-',
          },

          {
            name:
              'Response Rate Service',

            description:
              'Сервис аналитики ответов и контроля рабочих обсуждений через Basecamp API.',

            role:
            'Backend Developer',

            stack:
              'PHP, MySQL, REST API, Webhooks, Cron',

            url:
              'https://github.com/qwirlyx/Response-Rate-Service',
          },

          {
            name:
              'Basecamp Tag Tracker',

            description:
              'Сервис отслеживания тегов и синхронизации данных из Basecamp.',

            role:
            'Backend Developer',

            stack:
              'PHP, REST API, MySQL',

            url:
              'https://github.com/qwirlyx/Basecamp-Tag-Tracker',
          },

          {
            name:
              'Convertor Files',

            description:
              'Сервис конвертации файлов между различными форматами.',

            role:
            'Fullstack Developer',

            stack:
              'PHP, Python, FFmpeg, File Processing',

            url:
              'https://github.com/qwirlyx/Convertor-files',
          },

          {
            name:
              'Game Jumping Hink',

            description:
              'Веб-игра с игровой механикой, интерфейсом и серверной частью.',

            role:
            'Frontend / Fullstack Developer',

            stack:
              'JavaScript, PHP, HTML, CSS',

            url:
              'https://github.com/qwirlyx/Game-jumping-hink',
          },

          {
            name:
              'AI Agent',

            description:
              'Экспериментальный AI-агент с LLM API и интеграцией внешних сервисов.',

            role:
            'AI Engineer / Backend Developer',

            stack:
              'Python, LLM API, REST API',

            url:
              'https://github.com/qwirlyx/AI-Agent-',
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    console.log('Seed completed');

    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);

    await prisma.$disconnect();

    process.exit(1);
  });