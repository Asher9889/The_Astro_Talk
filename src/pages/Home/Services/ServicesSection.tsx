
const ServicesSection = () => {
  const services = [
    {
      title: "Love/Arrange Marriage",
      description: "Understand your love life or marriage prospects through your kundali.",
    },
    {
      title: "Business or Career in Kundali",
      description: "Get career direction based on planetary positions in your chart.",
    },
    {
      title: "Goverment job / Competitive Exam ",
      description: "Crack government jobs and competitive exams with The Life Astro  your personalized path to success",
    },
  ];

  return (
    <div className="flex justify-center items-center gap-4 py-26">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex-1 bg-gradient-to-br from-[#78350f] to-[#a16207] text-white p-6 rounded-md  shadow-2xl text-center border-1 border-(--color-yellow-border)"
        >
          <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
          <p className="text-sm">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;
