
const navbutton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
  navbutton.classList.toggle('show');
  navBar.classList.toggle('show');
});

const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course introduces programming fundamentals using Python.',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Learn basic web design and development with HTML and CSS.',
    technology: ['HTML', 'CSS'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Write and organize code using functions in Python.',
    technology: ['Python'],
    completed: false
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Object-oriented programming using C# with classes and inheritance.',
    technology: ['C#'],
    completed: false
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Create interactive websites with JavaScript.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: false
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Focus on UX, accessibility, performance, and APIs.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: false
  }
];

function renderCards(subject = 'all') {
  const container = document.getElementById('card-container');
  container.innerHTML = '';

  let filtered;
  if (subject === 'all') {
  filtered = courses;
    } else {
  filtered = courses.filter(c => c.subject === subject);
    }
    
  let totalCredits = 0;
  for (let course of filtered) {
  totalCredits += course.credits;
 }
  document.getElementById('credits-count').textContent = totalCredits;

  filtered.forEach(course => {
    const card = document.createElement('div');
    card.classList.add('card');
    if (course.completed) card.classList.add('completed');
    card.dataset.name = course.subject;

    card.innerHTML = `
      <h3>${course.title}</h3>
      <p><strong>Course:</strong> ${course.subject} ${course.number}</p>  
      ${course.completed ? '<span class="badge">✅ Completed</span>' : ''}
    `;
    container.appendChild(card);
  });
}

function setupFiltering() {
  document.querySelectorAll('.filtered-buttons button').forEach(button => {
    button.addEventListener('click', (e) => {
      document.querySelector('.active').classList.remove('active');
      e.target.classList.add('active');
      renderCards(e.target.dataset.name);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderCards();
  setupFiltering();
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('last-modified').textContent = document.lastModified;
});
