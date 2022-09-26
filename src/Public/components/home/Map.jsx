import React from "react";

const Map = () => {
  return (
    <div className="mt-10 py-2 flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.955167883341!2d82.4070002641409!3d28.056393466674773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39979292c2512aa1%3A0x323a8aa9482dd316!2sBatsyayan%20Secondary%20Boarding%20School%2C%20Tripur%2022400!5e0!3m2!1sen!2snp!4v1663427365099!5m2!1sen!2snp"
        title="small screen asgard google map"
        className="border-0 md:hidden small-scrn-map w-full h-80"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.955167883341!2d82.4070002641409!3d28.056393466674773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39979292c2512aa1%3A0x323a8aa9482dd316!2sBatsyayan%20Secondary%20Boarding%20School%2C%20Tripur%2022400!5e0!3m2!1sen!2snp!4v1663427365099!5m2!1sen!2snp"
        width="600"
        height="450"
        title="asgard google map small large screen"
        className=" small-large-scrn-map hidden md:block lg:hidden border-0 w-full h-[450px]"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.955167883341!2d82.4070002641409!3d28.056393466674773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39979292c2512aa1%3A0x323a8aa9482dd316!2sBatsyayan%20Secondary%20Boarding%20School%2C%20Tripur%2022400!5e0!3m2!1sen!2snp!4v1663427365099!5m2!1sen!2snp"
        title="asgard-google-map"
        className="border-0 hidden lg:block w-full h-[600px]"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
