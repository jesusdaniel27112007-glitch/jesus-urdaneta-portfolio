
// Projects data
const projects = [
  {title:'Portfolio Landing Page', desc:'Landing moderno con animaciones CSS y layout responsive.', repo:'https://github.com/jesusdaniel27112007/portfolio-landing'},
  {title:'To-Do App', desc:'Aplicación de tareas con almacenamiento en localStorage y filtros.', repo:'https://github.com/jesusdaniel27112007/todo-app'},
  {title:'Weather App', desc:'Mini app que consume una API de clima para mostrar datos actuales.', repo:'https://github.com/jesusdaniel27112007/weather-app'},
  {title:'Quiz Game', desc:'Juego de preguntas con temporizador y puntaje.', repo:'https://github.com/jesusdaniel27112007/quiz-game'}
];

const grid = document.getElementById('projectsGrid');
projects.forEach(p=>{
  const el = document.createElement('div');
  el.className='project-card';
  el.innerHTML = `<div class="title">${p.title}</div><div class="desc">${p.desc}</div><div class="meta"><a class="btn" href="${p.repo}" target="_blank">Ver en GitHub</a></div>`;
  grid.appendChild(el);
  el.addEventListener('click', (e)=>{
    if(e.target.tagName !== 'A'){
      window.open(p.repo, '_blank');
    }
  });
});

// Animate skill bars
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.fill').forEach(f=>{
    const val = f.getAttribute('data-value');
    setTimeout(()=> f.style.width = val + '%', 300);
  });
});
