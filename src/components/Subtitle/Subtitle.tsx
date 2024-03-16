import './Subtitle.css';

interface SubtitleProps {
  subtitle: string;
  subtitleText?: string;
}

export default function SubTitle({ subtitle, subtitleText }: SubtitleProps) {
  return (
    <>
      <h3 className='subtitle'>{subtitle}</h3>
      <p className='subtitle__text'>{subtitleText}</p>
    </>
  );
}
