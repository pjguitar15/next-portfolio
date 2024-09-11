"use client";
import HeadingText from "@/components/HeadingText";
import React from "react";
import HorizontalCard from "./HorizontalCard";
import Badge from "@/components/Badge";

const AboutMeSideBySide = () => {
  const calculateAge = () => {
    const birthDate = new Date("1998-05-15");
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Adjust age if birthday hasn't occurred yet this year
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };
  return (
    <div className='container mx-auto px-10 md:px-0'>
      <div className='lg:flex flex-col md:flex-row gap-12'>
        <div className='lg:w-1/2 flex flex-col gap-4'>
          {/* three rows */}
          <HorizontalCard
            title='Design'
            description='Crafting visually captivating and user-centric interfaces that seamlessly blend form and function.'
          />
          <HorizontalCard
            title='Front-end'
            description='Translating creative concepts into dynamic and responsive web experiences through expert use of modern frontend technologies.'
          />
          <HorizontalCard
            title='Clean Code'
            description='Committed to writing elegant and maintainable code that not only functions flawlessly but also simplifies collaboration and future enhancements.'
          />
        </div>
        <div className='pt-10 lg:pt-0 lg:px-10 lg:w-1/2 flex-1'>
          <div>
            <HeadingText
              text='About Me'
              emphasis='Me'
            />
            <p className='text-gray-300 text-md font-normal mt-3 leading-8 mb-9 select-light-green'>
              Hey there! I am Philcob Suzuki Josol, a{" "}
              <span className='font-bold'>{calculateAge()}-year-old </span>
              enthusiast from the vibrant Philippines. My unique heritage is a
              blend of <span className='font-bold'>
                Japanese and Filipino
              </span>{" "}
              cultures, which has given me a diverse perspective and a taste for
              creativity. I also love
              <span className='font-bold'> playing guitar </span>
              and have a deep passion for music.
            </p>
          </div>
          <hr />
          <div className='mt-9'>
            <Badge title='Journey to Software Development' />
            <p className='text-gray-300 text-md font-normal leading-8 mb-9 select-light-green'>
              My path to software development has been a journey of dedication
              and hard work. {`I've`} invested significant time and effort into
              mastering the MERN stack, which has deepened my understanding of
              building full-stack web applications. From learning JavaScript
              fundamentals to integrating MongoDB, Express, React, and Node.js,
              this journey has shaped my passion for creating efficient and
              scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSideBySide;
