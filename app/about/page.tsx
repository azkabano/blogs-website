/* eslint-disable @next/next/no-img-element */

const About = () => {


  return (
    <>



<section id="about-me" className="py-20">
  <div className="container mx-auto px-6">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="text-5xl font-bold mb-4 transform hover:scale-105 transition-transform duration-500">
        About Me
      </h2>
      <p className="text-lg text-gray-800 mb-6 leading-relaxed">
        Hello, I’m Azka, the creator behind this GIAIC Blog. This platform is my personal space to share my journey, ideas, experiences, and valuable knowledge across different topics—from technology and lifestyle to personal growth. This blog was created as part of my GIAIC assignment, and it&apos;s my mission to inspire and inform through engaging and well-researched content.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="text-center flex justify-center items-center flex-col gap-2 md:text-left">
        <img
          src="/cards/profile.png"
          alt="Azka"
          className="rounded-full mx-auto md:mx-0 shadow-2xl transition-transform transform hover:scale-110 duration-500"
        />
        <h3 className="text-3xl text-center font-semibold mt-6">Azka Bano</h3>
        <p className="text-lg text-center  text-gray-600">Founder & Blogger</p>
      </div>

      <div>
        <h3 className="text-3xl font-semibold mb-6 text-[#00c2cb]">My Mission</h3>
        <p className="text-lg text-gray-800 mb-6">
          My mission is clear: to provide insightful, well-researched, and engaging content that empowers individuals to make informed decisions and improve their lives. Whether it&apos;s in the realm of technology, lifestyle, or personal development, I strive to create a blog that serves as both a resource and an inspiring platform for curious minds.
        </p>
        <p className="text-lg text-gray-800 mb-6">
          I believe that sharing knowledge has the power to shape the future. Through every post, I aim to bring value, spark new ideas, and offer practical advice to help my readers navigate the world. I am deeply passionate about constantly improving the quality of the blog and growing it into a go-to destination for meaningful and thoughtful content.
        </p>
        <div className="flex justify-center md:justify-start">
          <a
            href="#"
            className="bg-[#00c2cb] hover:bg-[#00c2cb] text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            Join Me On This Journey
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default About;
