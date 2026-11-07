
const searchIndex = [
 {title:"Home",url:"index.html",desc:"Homepage, university, degree, and portfolio overview",text:"Amara Sumi D. Erorita University of the Cordilleras BS Information Technology Network and Security Baguio City Philippines"},
 {title:"About Me",url:"about.html",desc:"Introduction and personal goals",text:"I am a first-year BS Information Technology student at the University of the Cordilleras, specializing in Network and Security. I am interested in cybersecurity and digital forensics, and in building a versatile foundation in technology. My goals are to strengthen my technical abilities, become adaptable across disciplines, keep learning, and contribute to meaningful work."},
 {title:"Skills",url:"skills.html",desc:"Programming, technical tools, and developing competencies",text:"Java Python JavaScript C++ GIS GSIS Capstone AutoCAD research writing public speaking organizing leadership problem solving communication teamwork"},
 {title:"On the Bench",url:"on-the-bench.html",desc:"Watershed mapping case study",text:"Irisan watershed mapping GIS GSIS data gathering laptop processing constraints resourcefulness technical problem solving"},
 {title:"Journey",url:"journey.html",desc:"Educational background",text:"Elpidio Quirino Elementary School SPED Center Baguio Philippine Science High School University of the Cordilleras"},
 {title:"Experience",url:"experience.html",desc:"Organizations, leadership, volunteering, research, and projects",text:"ARKIW Amnesty Philippines Administrative Officer AWS Cloud Computing Red Cross Agham Youth International CFSPI Baguio Project Ubbog watershed research rainfall prediction"},
 {title:"Contact",url:"contact.html",desc:"Email, Facebook, GitHub, and location",text:"amarasumierorita@gmail.com Facebook GitHub Baguio City Philippines"}
];
document.querySelectorAll("[data-search]").forEach(form=>{
 const input=form.querySelector("input"); const results=form.querySelector(".search-results");
 const render=(query)=>{
  const q=query.trim().toLowerCase();
  if(!q){results.classList.remove("open");results.innerHTML="";return;}
  const found=searchIndex.filter(item=>(item.title+" "+item.desc+" "+item.text).toLowerCase().includes(q));
  results.innerHTML=found.length?found.map(item=>`<a class="search-result" href="${item.url}"><strong>${item.title}</strong><small>${item.desc}</small></a>`).join(""):`<div class="search-empty">No matching pages found. Try another keyword.</div>`;
  results.classList.add("open");
 };
 input.addEventListener("input",()=>render(input.value));
 form.addEventListener("submit",e=>{e.preventDefault();render(input.value);});
 document.addEventListener("click",e=>{if(!form.contains(e.target))results.classList.remove("open");});
 input.addEventListener("keydown",e=>{if(e.key==="Escape")results.classList.remove("open");});
});
const star=document.querySelector(".cursor-star");
if(star && window.matchMedia("(pointer:fine)").matches){
 let last=0;
 document.addEventListener("mousemove",e=>{
  star.style.left=e.clientX+"px";star.style.top=e.clientY+"px";
  if(!document.body.classList.contains("cursor-ready"))document.body.classList.add("cursor-ready");
 });
 document.addEventListener("mouseleave",()=>document.body.classList.remove("cursor-ready"));
 document.addEventListener("mouseenter",()=>document.body.classList.add("cursor-ready"));
}
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
