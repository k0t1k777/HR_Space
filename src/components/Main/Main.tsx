import BigPicture from "../BigPicture/BigPicture";
import ImageOne from "../../assets/filling-survey.svg"
import ImageTwo from "../../assets/filling-survey.svg"
import ImageThree from "../../assets/filling-survey.svg"

interface MainProps {
  title?: string;
  icon?: ReactNode;
}

export default function Main({ icon }: MainProps) {
  return (
    <main className="main">
      <div className="main__container-bigture">
        <BigPicture icon={ImageOne} /><BigPicture /><BigPicture />
      </div>
    </main>
  );
}
