import React, { useEffect } from "react";

const Mouse = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    // console.log(cursor);
    window.addEventListener("mousemove", (e) => {
      //   console.log(e);
      cursor.style.top = e.y + "px";
      cursor.style.left = e.x + "px";
    });

    document.querySelectorAll(".hover").forEach((link) => {
      //   console.log(link);
      link.addEventListener("mouseover", () => {
        cursor.classList.add("hovered");
      });
      link.addEventListener("mouseleave", () => {
        cursor.style.transition = ".3 ease-out";
        cursor.classList.remove("hovered");
      });
    });
  }, []);
  return <span className="cursor"></span>;
};

export default Mouse;
