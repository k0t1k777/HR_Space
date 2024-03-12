import "./BigPictureContainer.css";
import BigPicture from "../BigPicture/BigPicture";
import ImageOne from "../../assets/business_deal.svg";
import ImageTwo from "../../assets/filling_survey.svg";
import ImageThree from "../../assets/payment_processed.svg";

export default function BigPictureContainer() {
  return (
    <div className="big-picture-container__items">
      <BigPicture title="Заполните заявку" icon={ImageOne} />
      <BigPicture title="Пополните счет" icon={ImageTwo} />
      <BigPicture
        title="Разместите заявку и выберите рекрутера"
        icon={ImageThree}
      />
    </div>
  );
}
