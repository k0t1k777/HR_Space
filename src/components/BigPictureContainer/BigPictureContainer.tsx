import "./BigPictureContainer.css";
import BigPicture from "../BigPicture/BigPicture";
import ImgFill from "../../assets/imgFill.svg";
import ImgPay from "../../assets/imgPay.svg";
import ImgPublish from "../../assets/imgPublish.svg";
import lineOne from "../../assets/line-1.svg";
import lineTwo from "../../assets/line-2.svg"


export default function BigPictureContainer() {
  return (
    <aside className="big-picture-container__items">
      <BigPicture changeColor="bigPicture__title_color_black" title="Заполните заявку"  icon={ImgFill} numb="1." />
      <img className="big-picture-container__line" src={lineOne} alt="image" />
      <BigPicture title="Пополните счёт" icon={ImgPay} numb="2." />
      <img className="big-picture-container__line line_position_bottom" src={lineTwo} alt="image" />
      <BigPicture title="Опубликуйте заявку" icon={ImgPublish} numb="3." />
    </aside>
  );
}
