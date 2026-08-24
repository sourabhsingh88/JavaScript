// Get an array of just user email addresses 
const users = [
  { id: 1, email: "user1@example.com" },
  { id: 2, email: "user2@example.com" },
  { id: 3, email: "user3@example.com" }
];


const email = []

for (let i = 0; i < users.length; i++) {
  email.push(users[i].email);
}

const emails = users.map((users) => users.email)

console.log(emails)