import WorkCard from "../WorkCard/WorkCard";

const Works = () => {
  const cards = [
    {
      id: 1,
      img: "images/work-1.png",
      text: "Select Your Role and Sign Up",
      tone: "dark",
    },
    {
      id: 2,
      img: "images/work-2.png",
      text: "Buyers Post Your Requirements",
      tone: "light",
    },
    {
      id: 3,
      img: "images/work-3.png",
      text: " Review, Select, and Contact the Best Suppliers",
      tone: "dark",
    },
    {
      id: 4,
      img: "images/work-4.png",
      text: "Suppliers Complete your profile and get notified for opportunities",
      tone: "light",
    },
    {
      id: 5,
      img: "images/work-5.png",
      text: "Contact to Buyers and Share your Quote for the service",
      tone: "dark",
    },
    {
      id: 6,
      img: "images/work-6.png",
      text: "Both the Parties can Connect and Make Business Leave a Feedback",
      tone: "light",
    },
  ];
  return (
    <section className="works-section section-padding">
      <div className="container-xxl">
        <div className="d-flex flex-column align-items-center">
        <h2 className="text-center">How it works?</h2>
        <p className="mt-3 text-center head-p">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </p>
        </div>

        <div className="row mt-5">
          {cards.map((card) => {
            return (
              <div className="col-lg-4 p-0 m-0">
                <WorkCard card={card} key={card.id} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
