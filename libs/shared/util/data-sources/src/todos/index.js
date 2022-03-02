export const arrStatus = [
  { label: 'in progress', value: 'purple' },
  { label: 'complete', value: 'green' },
  { label: 'pending', value: 'gold' },
  { label: 'not start', value: 'red' },
];

export const todos = [];

for (let i = 0; i < 5; i += 1) {
  todos.push({
    id: i + 1,
    status: arrStatus[Math.floor(Math.random() * arrStatus.length)],
    title: `Todo item - ${i + 1}`,
  });
}
