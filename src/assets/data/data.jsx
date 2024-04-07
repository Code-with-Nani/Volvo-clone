import img1 from "../images/img1.avif";
import img2 from "../images/img2.avif";
import img3 from "../images/img3.avif";
import img4 from "../images/img4.avif";
import img5 from "../images/img5.avif";
import img6 from "../images/img6.avif";
import img7 from "../images/img7.avif";
import img8 from "../images/img8.avif";
import img9 from "../images/img9.avif";

export const arr = [
  { src: img1, heading: "Cars", para: "The new volvo ex90" },
  { src: img2, heading: "trucks", para: "driving progress" },
  { src: img3, heading: "construction", para: "building tomorrow" },
  { src: img4, heading: "Volvo penta", para: "Industrial application" },
  { src: img5, heading: "Volvo penta", para: "Marine application" },
  { src: img6, heading: "Autonomous", para: "Creating future" },
  { src: img7, heading: "Defence", para: "Logistic solution" },
  { src: img8, heading: "Cars", para: "The new volvo ex90" },
  { src: img9, heading: "Financial", para: "Financial solutions" },
];

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const items = [
  "About Volvo Group",
  "Future of transportation",
  "Careers",
  "News & media",
  "Contact us",
];

export const list = [
  "Our cars",
  "About Volvo Cars",
  "Sustainability",
  "Careers",
  "Newsroom",
  "Contact us",
  "Support",
];

export const nav1 = [
  "Cars",
  "Trucks",
  "Buses",
  "Construction",
  "Volvo Penta",
  "Defense",
  "Autonomous",
  "Energy",
  "Financial",
];
export const nav2 = ["Volvo Group", "Volvo Cars", "WORLD OF VOLVO"];
