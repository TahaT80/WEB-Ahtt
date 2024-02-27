import {useEffect, useState} from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scense/navbar";
import GropDot from "./scense/GropDot";
import Landing from "./scense/Landing";
import LineGradient from "./componnent/LineGradient";
import MySkills from "./scense/MySkills";
import Projects from "./scense/Projects";
import Testimonials from "./scense/Testimonials";
import Contact from "./scense/Contact";
import Footer from "./scense/Footer";
function App() {
    const [selectPage , setselectPage] = useState('home')
    const [isTopOfPage , setisTopOfPage] = useState(true)
    const isDesktop = useMediaQuery("(min-width: 1060px)");

    useEffect(() => {
        const handelscroll = ()=>{
            if (window.scrollY === 0) {
                setisTopOfPage(true)
            }
            if (window.scrollY !== 0) {
                setisTopOfPage(false)
            }
        };
        window.addEventListener("scroll",handelscroll);
        return ()=>window.removeEventListener("scroll",handelscroll);
    }, []);

  return (
      <div className={'app bg-deep-blue'}>
          <Navbar
              isDesktop={isDesktop}
              selectedPage={selectPage}
              setSelectedPage={setselectPage}
              isTopOfPage={isTopOfPage}
          />

          <div className={''}>
              {isDesktop && (
                  <GropDot
                      selectedPage={selectPage}
                      setSelectedPage={setselectPage}/>
              )}
          </div>
          <Landing
              selectedPage={selectPage}
              setSelectedPage={setselectPage}/>
          <LineGradient/>
          <div className={'w-5/6 mx-auto md:h-full'}>
              <MySkills></MySkills>
          </div>
          <LineGradient/>
          <div className={'w-5/6 mx-auto'}>
              <Projects></Projects>
          </div>
          <LineGradient/>
          <div className={'w-5/6 mx-auto'}>
              <Testimonials></Testimonials>
          </div>
          <LineGradient/>
          <div className={'w-5/6 mx-auto'}>
              <Contact></Contact>
          </div>
          <LineGradient/>
          <div>
              <Footer></Footer>
          </div>
      </div>
  );
}

export default App;
