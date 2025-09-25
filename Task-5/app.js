const projects = [
  {
    title: "E-commerce Site",
    description: "A full-stack e-commerce platform with shopping cart and payment integration.",
    image: "https://via.placeholder.com/280x150?text=E-commerce+Site"
  },
  {
    title: "Blog Platform",
    description: "A dynamic blog platform with user authentication and content management.",
    image: "https://via.placeholder.com/280x150?text=Blog+Platform"
  },
  {
    title: "Portfolio Website",
    description: "An advanced portfolio to showcase projects with animations and interactive features.",
    image: "https://via.placeholder.com/280x150?text=Portfolio+Website"
  }
];

const projectList = document.getElementById('project-list');

projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'project-card';

  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" loading="lazy" />
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  `;

  projectList.appendChild(card);
});
