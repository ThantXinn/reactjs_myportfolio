import React from "react";
import Nav from "./components/Nav";
import SociaLinks from "./components/SociaLinks";
import { About, Contact, Home } from "./sections";
import Project from "./sections/Project";

const App = () => {
  return(
    <main className="relative w-full bg-[##FFFFFF] dark:bg-slate-900 dark:text-slate-50">
      <Nav/>
      <section className="flex padding-x max-lg:flex-col">
        <Home />
      </section>
      <section className="flex padding-x max-lg:px-3">
        <About />
      </section>
      <section className="flex padding-x max-lg:px-3">
        <Project />
      </section>
      <section className="flex">
        <Contact/>
      </section>
      <SociaLinks/>
    </main>
  )
}

export default App;