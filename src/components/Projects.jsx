import { useState } from "react";

import projects from "../data/projects";
import certificates from "../data/certificates";

import ProjectCard from "./ProjectCard";

import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiPhp,
  SiLaravel,
  SiNextdotjs,
  SiJavascript,
  SiMysql
} from "react-icons/si";


const techStack = [
  { name: "React.js", icon: SiReact, color: "text-cyan-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
  { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-300" },
];


// Project Categories

const categories = [
  {
    id: "software",
    title: "Software Engineering",
    image: "SEimages.png",
    description:
      "Full Stack and frontend applications built with modern technologies like React, JavaScript, Django and databases.",
  },

  {
    id: "uiux",
    title: "UI / UX Design",
    image: "UXimages.png",
    description:
      "User-centered designs, prototypes, research, wireframes and digital product experiences.",
  },

  {
    id: "marketing",
    title: "Digital Marketing",
    image:"DMimages.png",
    description:
      "Marketing campaigns, branding strategies, audience research and social media growth.",
  },
];


function Projects() {

  const [activeTab, setActiveTab] = useState("projects");

  const [selectedCert, setSelectedCert] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState(null);



  const tabs = [
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "techstack", label: "Tech Stack" },
  ];



  return (

<section 
id="projects"
className="bg-slate-950 text-white py-16 sm:py-20 relative"
>


<div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">


<h2 className="text-3xl sm:text-4xl font-bold mb-3">
Portfolio Showcase
</h2>


<p className="text-gray-400 mb-8 sm:mb-10">
Explore my journey through projects, certifications, and technical expertise.
</p>



{/* Tabs */}

<div className="inline-flex flex-wrap justify-center bg-slate-900 border border-slate-800 rounded-full p-1 mb-8 sm:mb-12">


{
tabs.map((tab)=>(
<button

key={tab.id}

onClick={()=>{

setActiveTab(tab.id);
setSelectedCategory(null);

}}

className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition ${
activeTab === tab.id

? "bg-blue-600 text-white"

: "text-gray-400 hover:text-white"

}`}

>

{tab.label}

</button>
))

}


</div>





{/* PROJECTS TAB */}

{
activeTab === "projects" && (

<>


{

!selectedCategory ? (



<div className="grid grid-cols-1 md:grid-cols-3 gap-8">


{
categories.map((category)=>{


const projectCount = projects.filter(
(project)=>project.category === category.id
).length;



return (

<div

key={category.id}

className="
bg-slate-900
border
border-slate-800
rounded-3xl
p-8
text-left
hover:border-blue-500
hover:-translate-y-2
transition
duration-300
shadow-lg
"

>


<div className="text-6xl mb-6">
{category.icon}
</div>



<h3 className="text-2xl font-bold mb-3">
{category.title}
</h3>



<p className="text-gray-400 text-sm leading-relaxed mb-6">
{category.description}
</p>



<p className="text-blue-400 font-semibold mb-6">
{projectCount} Projects
</p>



<button

onClick={()=>setSelectedCategory(category.id)}

className="
bg-blue-600
hover:bg-blue-700
px-6
py-3
rounded-full
transition
font-medium
"

>

View Collection 

</button>



</div>

)

})

}


</div>



) : (



<>


<button

onClick={()=>setSelectedCategory(null)}

className="
mb-8
text-blue-400
hover:text-blue-300
transition
"

>

  Back to Categories

</button>



<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">


{
projects

.filter(
(project)=>project.category === selectedCategory
)

.map((project)=>(

<ProjectCard

key={project.id}

project={project}

/>

))

}


</div>


</>


)

}


</>

)

}







{/* CERTIFICATES */}

{
activeTab === "certificates" && (

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


{
certificates.map((cert)=>(


<div

key={cert.id}

onClick={()=>setSelectedCert(cert)}

className="
bg-slate-900
border
border-slate-800
rounded-xl
overflow-hidden
hover:border-blue-500
transition
cursor-pointer
text-left
"


>


<img

src={cert.image}

alt={cert.title}

className="w-full h-40 object-cover"

/>


<div className="p-4">


<h3 className="font-bold">
{cert.title}
</h3>


<p className="text-gray-400 text-sm mt-1">

{cert.issuer} · {cert.date}

</p>


</div>


</div>


))

}


</div>

)

}







{/* TECH STACK */}

{
activeTab === "techstack" && (

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">


{
techStack.map(({name,icon:Icon,color})=>(


<div

key={name}

className="
bg-slate-900
border
border-slate-800
rounded-xl
p-6
flex
flex-col
items-center
gap-2
hover:border-blue-500
transition
"

>


<Icon className={`w-8 h-8 ${color}`} />


<span className="text-xs text-gray-400">

{name}

</span>


</div>


))

}


</div>

)

}



</div>






{/* CERTIFICATE MODAL */}

{
selectedCert && (

<div

className="
fixed
inset-0
bg-black/90
z-50
flex
items-center
justify-center
p-6
"

onClick={()=>setSelectedCert(null)}

>


<button

className="
absolute
top-6
right-6
text-white
text-3xl
hover:text-blue-400
"

>

✕

</button>



<img

src={selectedCert.image}

alt={selectedCert.title}

className="
max-w-full
max-h-full
rounded-lg
"

onClick={(e)=>e.stopPropagation()}

/>


</div>

)

}


</section>

);

}


export default Projects;