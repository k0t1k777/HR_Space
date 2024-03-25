import './Subtitle.css';

interface SubtitleProps {
  subtitle: string;
  subtitleText?: string;
  paddingTop?: string;
  clue?: string;
}

export default function SubTitle({
  subtitle,
  subtitleText,
  paddingTop,
  clue,
}: SubtitleProps) {
  return (
    <>
      <div className='subtitle__container'>
        <h3
          className='subtitle'
          style={{ paddingTop: paddingTop ? paddingTop : '24px' }}
        >
          {subtitle}
        </h3>
        <button className={clue ? clue : 'subtitle__clue_display_none'}></button>
      </div>
      {subtitleText && <p className='subtitle__text'>{subtitleText}</p>}
    </>
  );
}
