import './WorkCard.css';

const WorkCard = (props) => {
    const {img,text,tone} = props.card;
  return (
    <div className={`work-card d-flex flex-column align-items-center ${tone}`}>
      <img src={img} alt="" className="img-fluid" />
      <p className="text-center mt-4 fw-medium">{text}</p>
    </div>
  );
};

export default WorkCard;
