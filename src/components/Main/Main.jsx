import MainCard from "../MainCard/MainCard";
import NameCard from "../NameCard/NameCard";
import NavBar from "../NavBarTab/NavBarTab";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

export default function Main() {
  return (
    <div className="lg:grid grid-cols-2 h-screen">
        <div className="bg-stone-900 flex">
            <div className="max-w-2xl mx-auto">
                <div className="">
                    <NameCard />
                </div>
                <div className="flex h-2/3">
                    <div className="my-auto">
                        <MainCard />
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-stone-950">
            <div>
                <NavBar />
            </div>
            <div>
                <Home />
                <About />
                <Projects />
                <Contact />
            </div>
            
        </div>
    </div>
  )
}
