import gsap, { Power3 } from "gsap";
import { useEffect } from "react";

const AnimatedCard = () => {
  const link =
    "https://plus.unsplash.com/premium_photo-1677152199887-fb16bc954325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyNXxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60";

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: Power3.easeInOut  } });
    tl.pause();
    const imgheight = document.querySelector(
      "#animated_card_image"
    ).clientHeight;

    document.querySelector("#animated_svg").addEventListener("click", () => {
      tl.play();
    });
    document.querySelector("#cross_svg").addEventListener("click", () => {
      tl.reverse(0.8);
    });

    // Screen 1 : button animation
    tl.to("#animated_svg", {
      rotate: 90,
    })
      .to(
        "#animated_svg",
        {
          y: 80,
          scale: 0.8,
        },
        "-=0.2"
      )
      .to(
        "#a_text",
        {
          opacity: 0,
        },
        "-=0.4"
      )
      .to(
        "#animated_card_image",
        {
          height: imgheight + 20,
        },
        "-=1"
      );

    // Screen 1 : Bottom animation
    tl.from(
      "#animated_card_text",
      {
        opacity: 0,
      },
      "-=1"
    )
      .from(
        "#animated_card_text",
        {
          opacity: 0,
          scaleX: 0,
        },
        "-=1"
      )
      .to("#animated_card_text", {
        opacity: 1,
        scaleX: 1,
      });

    // Screen 1 : Text animation
    tl.from("#btm_text", {
      x: -100,
      opacity: 0,
    })
      .to(
        "#btm_text",
        {
          x: 0,
          opacity: 1,
        },
        "+=.1"
      )
      .to(
        "#btm_text",
        {
          x: 250,
          opacity:0
        },
        "+=2"
      );

    // screen 2 transition
    tl.from(
      "#text_inner",
      {
        y: 10000,
      },
      "-=1.2"
    ).to(
      "#text_inner",
      {
        y: 0,
        display: "block",
        duration: 2,
      },
      "-=0.3"
    );
  }, []);
  return (
    <div
      id="animated_card_main"
      className="flex flex-col  select-none justify-center items-center h-screen"
    >
      <div
        id="animated_card_inner"
        className=" bg-white rounded-lg relative top-0 left-0 flex flex-col justify-between gap-32"
      >
        <div id="animated_card_image-wrapper" className="w-72 h-96 px-4">
          <img
            id="animated_card_image"
            className="w-full h-full object-cover rounded-b-lg "
            src={link}
            alt="img"
          />
          <div id="animated_card_svg" className="flex justify-center mt-8 ">
            <span
              id="animated_svg"
              className=" select-none w-10 h-10 rounded-full bg-black text-white font-semibold flex justify-center items-center hover:scale-105"
            >
              <h1 id="a_text">→</h1>
            </span>
          </div>
        </div>
        <div id="animated_card_text">
          <h1 className="h-10   px-2 w-full flex items-center rounded-b-lg bg-black text-white">
            <p id="btm_text">Fetching data....</p>
          </h1>
        </div>
        <h1
          id="text_inner"
          className="h-full absolute top-0 px-2 w-full text-center rounded-lg bg-black text-white hidden"
        >
          <div className="flex justify-end m-1 ">
            <p
              id="cross_svg"
              className="w-6 h-6 bg-white flex justify-center  items-center text-black rounded-full transform ease-in-out text-center hover:scale-105 "
            >
              x
            </p>
          </div>
          <div id="btm_text2">
            <h1 className="text-4xl my-2  font-bold px-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">Pink clouds with purple flowers</h1>
            <p className=" text-justify p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, natus.</p>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default AnimatedCard;
