/** Portfolio will contain all of my professional information. It will consist
 * of several sub components:
 *
 *  Home: The first thing people see when they land on my website
 *  About: A short bit about myself, touching on my career experience
 *  Work: More information about my work experience and projects
 *  Contact: A warm response for those who made it to the end.
 */

import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Work from "./Work";

export default function Portfolio() {
  return (
    <>
      <Home />
      <About />
      <Work />
      <Contact />
    </>
  );
}
