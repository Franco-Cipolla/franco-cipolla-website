import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from "./gsapSetup";
import {
  FaExclamationTriangle,
  FaCheckCircle,
  FaUserTimes,
  FaPhone,
  FaMobileAlt,
  FaClock
} from 'react-icons/fa';
import CTA1 from "./CTA1";

gsap.registerPlugin(ScrollTrigger);


const ProblemSolution = () => {

  const sectionRef = useRef(null);
  const problemRef = useRef(null);
  const solutionRef = useRef(null);


  useEffect(() => {

    gsap.fromTo(
      [problemRef.current, solutionRef.current],
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );

  }, []);



 const problems = [
  {
    icon: <FaUserTimes />,
    title: "Besucher verstehen Ihr Angebot nicht",
    text: "Unklare Websites verlieren Interessenten an die Konkurrenz."
  },
  {
    icon: <FaPhone />,
    title: "Interesse entsteht, aber keine Anfrage",
    text: "Besucher finden Informationen, aber keinen Grund zu handeln."
  },
  {
    icon: <FaMobileAlt />,
    title: "Keine planbare Kundengewinnung",
    text: "Sie bleiben abhängig von Empfehlungen und Zufall."
  },
  {
    icon: <FaClock />,
    title: "Der erste Eindruck kostet Vertrauen",
    text: "Eine alte Website lässt potenzielle Kunden zweifeln."
  }
];


const solutions = [
  {
    icon: <FaCheckCircle />,
    title: "Ihr Angebot wird sofort verstanden",
    text: "Interessenten wissen direkt, warum sie Sie wählen sollten."
  },
  {
    icon: <FaCheckCircle />,
    title: "Mehr qualifizierte Anfragen",
    text: "Ihre Website führt Interessenten gezielt zum Kontakt."
  },
  {
    icon: <FaCheckCircle />,
    title: "Mehr Unabhängigkeit",
    text: "Ihre Website gewinnt neue Kunden ohne Empfehlungen."
  },
  {
    icon: <FaCheckCircle />,
    title: "Moderner Auftritt auf jedem Gerät",
    text: "Schnell, professionell und optimiert für Anfragen."
  }
];


  return (

    <section
      ref={sectionRef}
      className="
        w-full
        mt-5
        py-16
        sm:py-20
        md:py-24
        xl:py-28
        px-6
        mx-auto
        max-w-[1100px]
      "
    >


      <div className="text-center mb-12">

        <h2
          className="
            text-3xl
            md:text-4xl
            font-bold
            leading-tight
            mb-4
            text-[#000814]
          "
        >
          Ihre Website kostet Sie täglich neue Kunden.
        </h2>


        <p
          className="
            text-lg
            text-[#000814]
            max-w-2xl
            mx-auto
          "
        >
          Viele lokale Websites sind online, sehen gut aus, bringen aber nur wenige Anfragen.
        </p>

      </div>



      <div className="
        grid
        lg:grid-cols-2
        gap-10
        items-stretch
      ">



        {/* Problem */}

        <div
          ref={problemRef}
          className="
            flex
            flex-col
            space-y-6
          "
        >

          <div className="
            text-center
            lg:text-left
            mb-4
          ">

            <div className="
              flex
              items-center
              justify-center
              lg:justify-start
              mb-2
            ">

              <FaExclamationTriangle
                className="
                  text-[#64748b]
                  text-2xl
                  mr-2
                "
              />

              <h3
                className="
                  text-2xl
                  font-bold
                  text-[#001D3D]
                "
              >
                Das Problem
              </h3>

            </div>


            <p className="text-base text-[#000814]">
              Ohne eine strategische Website verlieren Sie planbar Kunden und Chancen.
            </p>


          </div>




          <div className="
            space-y-4
            flex-grow
          ">


            {problems.map((p,i)=>(

              <div
                key={i}
                className="
                  flex
                  items-start
                  p-4
                  bg-[#001D3D]/5
                  border
                  border-[#001D3D]/10
                  rounded-xl
                  shadow-sm
                "
              >

                <div
                  className="
                    flex-shrink-0
                    w-8
                    h-8
                    flex
                    items-center
                    justify-center
                    text-lg
                    mr-3
                    text-[#64748b]
                  "
                >
                  {p.icon}
                </div>


                <div>

                  <h4
                    className="
                      font-bold
                      text-[#001D3D]
                      mb-1
                    "
                  >
                    {p.title}
                  </h4>


                  <p className="text-[#000814] text-sm">
                    {p.text}
                  </p>

                </div>

              </div>

            ))}


          </div>




          <div
  className="
    p-5
    bg-[#001D3D]/10
    rounded-xl
    text-center
  "
>
  <p
    className="
      text-[#001D3D]
      font-bold
      text-base
    "
  >
    Ohne eine klare Website verlieren Sie täglich potenzielle Kunden.
  </p>

</div>


        </div>







        {/* Solution */}


        <div
          ref={solutionRef}
          className="
            flex
            flex-col
            space-y-6
          "
        >


          <div className="
            text-center
            lg:text-left
            mb-4
          ">


            <div className="
              flex
              items-center
              justify-center
              lg:justify-start
              mb-2
            ">


              <FaCheckCircle
                className="
                  text-[#00A6FB]
                  text-2xl
                  mr-2
                "
              />


              <h3
                className="
                  text-2xl
                  font-bold
                  text-[#003566]
                "
              >
                Die Lösung
              </h3>


            </div>



            <p className="text-base text-[#000814]">
              Eine Website, die messbar neue Kundenanfragen generiert. Ohne Stress und Aufwand.
            </p>


          </div>





          <div className="space-y-4 flex-grow">


            {solutions.map((s,i)=>(


              <div
                key={i}
                className="
                  flex
                  items-start
                  p-4
                  bg-[#00A6FB]/5
                  border
                  border-[#00A6FB]/20
                  rounded-xl
                  shadow-sm
                "
              >


                <div
                  className="
                    flex-shrink-0
                    w-8
                    h-8
                    flex
                    items-center
                    justify-center
                    text-xl
                    mr-3
                    text-[#00A6FB]
                  "
                >

                  {s.icon}

                </div>



                <div>

                  <h4
                    className="
                      font-bold
                      text-[#003566]
                      mb-1
                    "
                  >
                    {s.title}
                  </h4>


                  <p className="text-[#000814] text-sm">
                    {s.text}
                  </p>


                </div>


              </div>


            ))}


          </div>





          <div
  className="
    p-5
    bg-[#00A6FB]/10
    rounded-xl
    text-center
  "
>
  <p
    className="
      text-[#003566]
      font-bold
      text-base
    "
  >
    Ihre Website wird zum digitalen Verkäufer Ihres Betriebs.

    <span
      className="
        block
        mt-1
        text-sm
        font-normal
        text-[#003566]
      "
    >
      Besucher verstehen Ihr Angebot und wissen genau, wie sie Sie erreichen.
    </span>

  </p>

</div>


        </div>


      </div>





      <div
        className="
          w-full
          mt-10
          flex
          justify-center
        "
      >

        <CTA1
          bg="bg-[#001D3D]"
          text2="text-white"
          hover="text-white"
        />

      </div>



      <div className="text-center mt-8">

        <p
          className="
            text-[15px]
            text-[#000814]
            max-w-xl
            mx-auto
          "
        >
          Lassen Sie uns gemeinsam Ihre Website zum Kundenmagnet machen.
        </p>

      </div>


    </section>

  );
};


export default ProblemSolution;
