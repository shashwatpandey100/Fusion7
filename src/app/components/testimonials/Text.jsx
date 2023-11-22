const Text = () => {
  return (
    <section className="w-full z-[0] h-[calc(60vh+200px)] flex flex-col items-center justify-center px-[30px] pt-[100px]">
      <p className="w-full textT text-[6em] md:text-[9em] text-[#e3051a] italic text-center">
        Our testimonials
      </p>
      <img
        src="https://assets-global.website-files.com/642acc59fa552a1328890eb7/644fb4205dc7044588e2bba5_arrow_bottom.svg"
        alt=""
        className="my-[25px]"
      />
      <p className="max-w-[380px] text-[18px] text-[#e3051a] italic textT text-center">
      Discover client experiences in our Testimonials section. Hear firsthand about the impact of our digital design and development solutions on diverse projects.
      </p>
    </section>
  );
};

export default Text;
