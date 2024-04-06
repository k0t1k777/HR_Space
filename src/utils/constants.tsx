import ImgFill from '../assets/imgFill.svg';
import ImgPay from '../assets/imgPay.svg';
import ImgPublish from '../assets/imgPublish.svg';

export const nameError = 'Поле обязательно для заполнения';

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

export const buttonsData = {
  next: 'Продолжить',
  send: 'Отправить',
  back: 'Назад',
};

export const InfoToolTipData = {
  send: 'Заявка отправлена',
  save: 'Сохранено в черновике',
};

export const userData = {
  name: 'Виталий Крымов',
  id: '#45732',
};

export const statusBarData = {
  button: 'Сохранить черновик',
  save: 'Данные сохранены в черновик',
  task: 'Новая заявка',
};

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
  subTitleEducation: 'Образование',
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

export const StepSevenData = {
  subTitleExpectations: 'Вы ожидаете, что рекрутер',
};

export const StepEightData = {
  subTitleRange: 'Количество кандидатов для поиска',
  subTitleDate: 'Дата выхода сотрудника',
  subTitleCountCandidates: 'Количество рекрутеров',
};

export const StepSixNine = {
  subTitlePayments: 'Выплата',
  subTitleAward: 'Вознаграждение за сотрудника',
  placeholderAward: '50000',
};

export const data = {
  specialization: [
    'Бэкендер',
    'Дворник',
    'Девопс',
    'Дегустатор',
    'Дизайнер',
    'Курьер',
    'Сантехник',
    'Слесарь',
    'Фронтендер',
  ],
  towns: [
    'Екатеринбург',
    'Калуга',
    'Краснодар',
    'Лион',
    'Минск',
    'Москва',
    'Мурманск',
    'Санкт-Петербург',
    'Сочи',
    'Чебоксары',
    'Ысеть',
  ],
  experience: ['1-3 года', '3-6 лет', 'Неважно', 'Нет опыта', 'более 6 лет'],
  education: [
    'Без образования',
    'Высшее',
    'Высшее (бакалавр)',
    'Среднее',
    'Среднее специальное',
  ],
  skills: [
    'CJM',
    'Figma',
    'JTBD',
    'Wireframe',
    'Интервью',
    'Исследования',
    'аккуратность',
    'джава',
    'кодить',
    'колотить',
    'молчать',
    'петь',
    'пилить',
    'презентовать',
    'скорость',
  ],
  languages: [
    'Английский',
    'Велийский',
    'Испанский',
    'Китайский',
    'Немецкий',
    'Польский',
    'Французский',
    'Чешский',
    'Японский',
  ],
  languages_levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  registration: ['ГПХ и по совместительству', 'ТК РФ'],
  occupation: [
    'Волонтерство',
    'Полная занятость',
    'Проектная работа',
    'Стажировка',
    'Частичная занятость',
  ],
  timetable: [
    'Вахтовый метод',
    'Гибкий график',
    'Полный день',
    'Сменный график',
    'Удаленная работа',
  ],
  mission: ['Да', 'Нет'],
  bonus: ['Да', 'Нет'],
  expectations: [
    'Запросит рекомендации с предыдущих мест работы',
    'Найдет и предоставит релевантное резюме',
    'Организует собеседование с заказчиком',
    'Отправит кандидату анкету службы безопасности',
    'Отправит кандидату тестовое задание',
    'Отправит финалисту приглашение на работу',
    'Проведет с кандидатом интервью',
  ],
  recruiter_count: ['1', '2', '3'],
  candidates_count: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  payments: [
    '100% после выхода сотрудника',
    '50/50 после выхода сотрудника после гарантийного срока',
    '100% после гарантийного срока',
  ],
};

export const defaultDate = () => {
  const date = new Date();
  const currentDay =
    date.getDate().toString().length > 1
      ? date.getDate()
      : '0' + date.getDate();
  const currentMonth =
    date.getMonth().toString().length > 1
      ? Number(date.getMonth() + 1)
      : '0' + Number(date.getMonth() + 1);
  const currentYear = date.getFullYear();
  return `${currentYear}-${currentMonth}-${currentDay}`;
};
