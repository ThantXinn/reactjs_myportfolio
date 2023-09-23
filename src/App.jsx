import React from "react";
import Nav from "./components/Nav";
import SociaLinks from "./components/SociaLinks";
import { About, Home } from "./sections";

const App = () => {
  return(
    <main className="relative dark:bg-slate-900 dark:text-slate-50 duration-300">
      <Nav/>
      <section className="flex padding max-lg:flex-col">
        <Home />
      </section>
      <section>
        <About />
      </section>
      <section>
        Contact
      </section>
      <section className="flex">
        Projects
      </section>
      <SociaLinks/>
    </main>
  )
}

export default App;