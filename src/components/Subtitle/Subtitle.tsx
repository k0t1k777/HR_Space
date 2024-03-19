import './Subtitle.css';

interface SubtitleProps {
  subtitle: string;
  subtitleText?: string;
  paddingTop?: string;
}

export default function SubTitle({
  subtitle,
  subtitleText,
  paddingTop,
}: SubtitleProps) {
  return (
    <>
      <h3
        className='subtitle'
        style={{ paddingTop: paddingTop ? paddingTop : '24px' }}
      >
        {subtitle}
      </h3>
      {subtitleText && <p className='subtitle__text'>{subtitleText}</p>}
    </>
  );
}
