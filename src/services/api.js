export function loadLists() {
  return [
    {
      title: 'tasks',
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'study Redux',
          labels: ['#ff5555'],
          user: 'https://avatars2.githubusercontent.com/u/38539443?v=4'
        },
        {
          id: 2,
          content: 'clone Airbnb application',
          labels: ['#ff5555'],
          user: 'https://avatars2.githubusercontent.com/u/38539443?v=4'
        },
        {
          id: 3,
          content: 'study Gastby',
          labels: ['#ff5555'],
          user: 'https://avatars2.githubusercontent.com/u/38539443?v=4'
        },
        {
          id: 4,
          content: 'clone Uber application',
          labels: ['#6272a4'],
          user: 'https://avatars2.githubusercontent.com/u/38539443?v=4'
        },
        {
          id: 5,
          content: 'buy Xbox Series X',
          labels: ['#6272a4'],
          user: 'https://avatars2.githubusercontent.com/u/38539443?v=4'
        }
      ]
    },
    {
      title: 'in progress',
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'study ReactJs',
          labels: [],
          user: 'https://avatars2.githubusercontent.com/u/38539443?v=4'
        }
      ]
    },
    {
      title: 'stopped',
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'play video game',
          labels: ['#ff5555'],
          user: 'https://avatars2.githubusercontent.com/u/38539443?v=4'
        },
        {
          id: 8,
          content: 'study MongoDB',
          labels: ['#6272a4'],
          user: 'https://avatars2.githubusercontent.com/u/38539443?v=4'
        },
        {
          id: 9,
          content: 'clear GitHub',
          labels: [],
          user: 'https://avatars2.githubusercontent.com/u/38539443?v=4'
        }
      ]
    },
    {
      title: 'done',
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'clone Instagram application',
          labels: [],
          user: 'https://avatars2.githubusercontent.com/u/38539443?v=4'
        },
        {
          id: 12,
          content: 'update LinkedIn',
          labels: ['#6272a4'],
          user: 'https://avatars2.githubusercontent.com/u/38539443?v=4'
        },
        {
          id: 13,
          content: 'study styled-components',
          labels: ['#ff5555'],
          user: 'https://avatars2.githubusercontent.com/u/38539443?v=4'
        }
      ]
    }
  ];
}
