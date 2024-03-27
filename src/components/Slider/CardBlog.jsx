import React from "react";

export const CardBlog = ({ blog, animationPaused }) => {
  return (
    <div
      className={`h-hull w-[280px] m-2 flex-shrink-0 cursor-pointer rounded-3xl bg-white hover:scale-[1.05] ${
        animationPaused ? "" : "animate-scroll"
      }`}
    >
      <div className="h-[20px] w-[110px] bg-cover m-5 mb-1">
        <img
          src={
            blog.id === "1"
              ? "https://static.vecteezy.com/system/resources/thumbnails/003/355/389/small/five-5-star-rank-sign-illustration-free-vector.jpg"
              : blog.id === 2
              ? "https://png.pngtree.com/png-clipart/20230823/original/pngtree-four-4-star-rank-sign-vector-illustration-eps10-picture-image_8307895.png"
              : blog.id === 3
              ? "https://static.vecteezy.com/system/resources/thumbnails/003/355/389/small/five-5-star-rank-sign-illustration-free-vector.jpg"
              : blog.id === 4
              ? "https://static.vecteezy.com/system/resources/thumbnails/003/355/389/small/five-5-star-rank-sign-illustration-free-vector.jpg"
              : blog.id === 5
              ? "https://png.pngtree.com/png-clipart/20230823/original/pngtree-four-4-star-rank-sign-vector-illustration-eps10-picture-image_8307895.png"
              : "https://static.vecteezy.com/system/resources/thumbnails/003/355/389/small/five-5-star-rank-sign-illustration-free-vector.jpg"
          }
          alt={`Calificación de ${blog.name}`}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-42 w-full px-5 mb-5">
        <h3 className="uppercase  text-[12px] md:text-[13px] lg:text-[15px]  font-normal tracking-widest ">
          {blog.category}
        </h3>
        <h3 className="font-monts  text-[14px] md:text-[16px]  lg:text-[18px]  leading-tight tracking-normal text-left font-semibold mt-3 ">
          {blog.name}
        </h3>
        <h3 className="font-monts  text-[11px] md:text-[12px] lg:text-[13px]   leading-tight tracking-normal text-left font-normal text-gray-500 mt-1 ">
          {blog.fecha}
        </h3>

        <p className=" whitespace-normal text-[10px] md:text-[12px]  lg:text-[14px]  leading-tight tracking-normal text-left mt-5 ">
          {blog.comentario}
        </p>
      </div>
    </div>
  );
};
