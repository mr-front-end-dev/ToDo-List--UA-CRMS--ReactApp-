import React from 'react';
import { Clock } from "./Clock";
import { Links, Link, Button } from "./styled";

const Projects = () => (
  <Links>
    <Clock />
    <Link href={"https://mr-front-end-dev.github.io/ToDo-List--EN-CRMS--ReactApp"}><Button>EN</Button></Link>
    <Link href={"https://mr-front-end-dev.github.io/ToDo-List--DE-CRMS--ReactApp"}><Button>DE</Button></Link>
    <Link href={"https://mr-front-end-dev.github.io/ToDo-List--ES-CRMS--ReactApp"}><Button>ES</Button></Link>
    <Link href={"https://mr-front-end-dev.github.io/ToDo-List--FR-CRMS--ReactApp"}><Button>FR</Button></Link>
    <Link href={"https://mr-front-end-dev.github.io/ToDo-List--RU-CRMS--ReactApp"}><Button>RU</Button></Link>
    <Link href={"https://mr-front-end-dev.github.io/ToDo-List--PL-CRMS--ReactApp"}><Button>PL</Button></Link>
    <Link href={"#"}><Button deepSkyBlue>🌓</Button></Link>
  </Links>
)

export default Projects;