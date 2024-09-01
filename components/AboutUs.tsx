import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full py-20 px-10 md:px-20 flex justify-center">
      <div className="w-full xl:w-3/4">
        <h2 className="text-5xl font-bold text-center tracking-tight text-red-500">About Us</h2>
        <div className="mt-10">
          <div>
            <h3 className="text-4xl font-bold text-red-500">Our Mission</h3>
            <p className="text-lg mt-3">
              At <span className="font-bold text-red-500">All Tax Solutions</span>, our mission is to provide personalized, accurate, and efficient tax filing services tailored to meet the unique
              needs of each client. We understand that tax season can be overwhelming, and our goal is to take the stress out of the process by offering expert guidance and support every step of the
              way. Whether you’re an individual taxpayer, a small business owner, or an independent contractor, we are here to ensure you meet all tax obligations while maximizing your financial
              benefits.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-4xl font-bold text-red-500">Our Story</h3>
            <p className="text-lg mt-3">
              <span className="font-bold text-red-500">All Tax Solutions</span> was founded in 2024 by <span className="font-bold text-red-500">Umang Vishnoi</span>, a seasoned tax professional with
              over 5 years of experience in accounting and tax services. After working with numerous clients and witnessing the confusion and anxiety that tax season often brings,{" "}
              <span className="font-bold text-red-500">Umang</span> realized there was a need for a more personalized, client-focused approach to tax filing. This led to the creation of{" "}
              <span className="font-bold text-red-500">All Tax Solutions</span>, a firm dedicated to simplifying the tax process and delivering outstanding service.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-4xl font-bold text-red-500">Why Choose Us</h3>
            <div className="text-lg mt-3">
              <p>
                With <span className="font-bold text-red-500">over 5 years</span> of experience, a <span className="font-bold text-red-500">100% client satisfaction</span> rate, and{" "}
              </p>
              <span className="font-bold text-red-500">personalized service</span>, we stand out as your best choice for tax filing services. Following are some of your features:
              <div className="flex flex-col mt-4 gap-2">
                <div className="flex gap-2">
                  <span className="text-3xl text-red-500 -mt-1.5">&#x2022;</span>
                  <p>We treat every client as a priority. You won’t find one-size-fits-all solutions here; instead, we tailor our services to fit your unique tax situation.</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-3xl text-red-500 -mt-1.5">&#x2022;</span>
                  <p>Taxes aren’t just a once-a-year concern. We’re here to support you with tax planning, audit assistance, and financial advice throughout the year.</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-3xl text-red-500 -mt-1.5">&#x2022;</span>
                  <p>
                    We offer flexible appointment options, including in-person, virtual, and phone consultations, making it easy to get the help you need, no matter where you are. Our secure online
                    portal allows for easy document submission and communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
