import ImgFill from '../assets/imgFill.svg';
import ImgPay from '../assets/imgPay.svg';
import ImgPublish from '../assets/imgPublish.svg';

export interface LanguageOption {
  id: number;
  name: string;
  level: string;
}

export const linksHeader = [
  'Главная',
  'Мои заявки',
  'Поиск по рынку',
  'Счёт',
  'Помощь',
];

export const asideText = [
  {
    title: '1. Заполните заявку',
    image: ImgFill,
  },
  {
    title: '2. Пополните счёт',
    image: ImgPay,
  },
  {
    title: '3. Опубликуйте заявку',
    image: ImgPublish,
  },
];

export const names = [
  'Описание вакансии',
  'Требования',
  'Условия',
  'Сотрудничество',
];

export const options: string[] = [
  'Инженер',
  'Механник',
  'Специальность',
  'Профессия',
];

export const checkCaption = [
  'Найдёт и предоставит релевантное резюме',
  'Проведёт с кандидатом интервью',
  'Организует собеседование с заказчиком',
  'Запросит рекомендации с предыдущих мест работы',
  'Отправит кандидату тестовое задание',
  'Отправит кандидату анкету службы безопасности',
  'Отправит финалисту приглашение на работу',
];

export const expiriense: string[] = [
  '1–3 года',
  '3–6 лет',
  'более 6 лет',
  'Нет опыта',
  'Не важно',
];

export const education: string[] = [
  'Без образования',
  'Среднее',
  'Среднее специальное',
  'Высшее',
];

export const towns: string[] = ['Москва', 'Санкт-Петербург'];

export const skills: string[] = [
  'JTBD',
  'Wireframe',
  'CJM',
  'Figma',
  'Интервью',
  'Исследования',
];

export const languages: LanguageOption[] = [
  {
    id: 1,
    name: 'Русский',
    level: 'A1',
  },
  {
    id: 2,
    name: 'Английский',
    level: 'B1',
  },
  {
    id: 3,
    name: 'Немецкий',
    level: 'B2',
  },
];

export const decoration: string[] = ['ТК РФ', 'ГПХ или совместительству'];

export const occupation: string[] = [
  'Полная занятость',
  'Частичная занятость',
  'Проектная работа',
  'Стажировка',
  'Волонтерство',
];

export const timetable: string[] = [
  'Полный день',
  'Удалённая работа',
  'Гибкий график',
  'Сменный график',
  'Вахтовый метод',
];

export const mission: string[] = ['Да', 'Нет'];

export const bonus: string[] = ['Да', 'Нет'];

export const buttonsData = {
  next: 'Продолжить',
  back: 'Назад',
};

export const userData = {
  name: 'Виталий Крымов',
  id: '#45732',
};

export const statusBarData = {
  button: 'Сохранить черновик',
};

export const numbers = [1, 2, 3];

export const stepOneData = {
  subTitleSpeciality: 'Специальность',
  placeholderSpeciality: 'Сантехник',
  subTitleTown: 'Город (необязательно)',
  placeholderTown: 'Москва',
  subTitleSalary: 'Заработная плата сотрудника',
  placeholderSalary: 'Средняя зарплата в выбранном регионе от 80 000 ₽',
};

export const StepTwoData = {
  subTitleSpeciality: 'Обязанности сотрудника',
  placeholderSpeciality: 'Опишите чем придется заниматься на данной должности',
};

export const StepThreeData = {
  subTitleSkills: 'Ключевые навыки',
  placeholderName: 'Введите название',
  subTitleExperiense: 'Опыт работы',
  placeholderTown: 'Образование',
  subTitleEducation: 'Заработная плата сотрудника',
};

export const StepFourData = {
  subTitleLanguages: 'Иностранный язык (необязательно)',
  placeholderLanguages: 'Английский',
  subTitleExtra: 'Дополнительные требования (необязательно)',
  placeholderExtra: 'Наличие водительский прав, мёд. книжки и др.',
};

export const StepFiveData = {
  subTitleDecoration: 'Оформление',
  subTitleOccupation: 'Тип занятости',
  subTitlTimetable: 'График работы',
};

export const StepSixData = {
  subTitleMission: 'Командировки',
  subTitleBonus: 'Бонусы от работадателя (необязательно)',
  textAreaBonus: 'Перечислите какие бонусы предоставляет ваша компания',
  placeholderBonus: 'ДМС, транспорт, спортзал и тд.',
};

export const dataStepNine = [
  {
    text: 'после выхода сотрудника',
    caption: '100%',
  },
  {
    text: 'после выхода сотрудника после гарантийного срока',
    caption: '50/50',
  },
  {
    text: 'после гарантийного срока',
    caption: '100%',
  },
];
