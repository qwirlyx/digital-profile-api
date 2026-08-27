import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.profile.upsert({
    where: {
      id: 'ivan-shevchenko',
    },
    update: {},
    create: {
      id: 'ivan-shevchenko',
      name: 'Иван Шевченко',
      description:
        'Backend / Fullstack разработчик. Разрабатываю внутренние сервисы, интеграции, автоматизации и AI-инструменты.',
      github: 'https://github.com/qwirlyx',
      telegram: 'https://t.me/shevchenk009',

      skills: {
        create: [
          { name: 'TypeScript' },
          { name: 'JavaScript' },
          { name: 'Node.js' },
          { name: 'PHP' },
          { name: 'Python' },
          { name: 'SQL' },
          { name: 'PostgreSQL' },
          { name: 'MySQL' },
          { name: 'REST API' },
          { name: 'Git' },
          { name: 'Docker' },
        ],
      },

      experience: {
        create: [
          {
            company: 'Старик Хинкалыч',
            position: 'Fullstack Developer',
            period: '2025–2026',
            achievements: {
                create: [
                    {
                    description:
                        'Разрабатывал внутренние сервисы автоматизации бизнес-процессов: CRM, интеграции и административные инструменты.',
                    },
                    {
                    description:
                        'Создавал REST API, webhooks и интеграции с внешними сервисами Telegram, VK, MAX и Basecamp.',
                    },
                    {
                    description:
                        'Разрабатывал AI-инструменты и агентные системы для работы с корпоративными данными.',
                    },
                ],
            },
          },
          {
            company: 'DevSolutions',
            position: 'Web Developer',
            period: '2024–2025',
            achievements: {
                create: [
                    {
                    description:
                        'Разрабатывал и поддерживал веб-приложения, серверную бизнес-логику и интеграции.',
                    },
                ],
            },
          },
        ],
      },

      projects: {
        create: [
            {
            name: 'AI-агент для Basecamp',
            description:
                'Внутренний AI-агент с архитектурой router/planner/executor, LLM API и интеграцией с Basecamp API.',
            url:
                'https://github.com/qwirlyx',
            },
            {
            name: 'Система внутренних сервисов',
            description:
                'CRM, сервисы автоматизации, мониторинг, интеграции и административные инструменты.',
            url:
                'https://github.com/qwirlyx',
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