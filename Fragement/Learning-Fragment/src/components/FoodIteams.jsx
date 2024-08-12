import Iteam from "./Iteams";
const FoodIteams = ({ foodItm }) => {
  return (
    <>
      <ul className="list-group">
        {foodItm.map((iteam) => (
          <Iteam key={iteam} foodIteam={iteam}></Iteam>
        ))}
      </ul>
    </>
  );
};
export default FoodIteams;
