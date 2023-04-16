import { IMoviesType } from "../types";
import superForius from "../../../backend/images/superForius/superForius.webp";
import hesAllthat from "../../../backend/images/hesAllthat/hesAllthat.webp";

const moviesModel: IMoviesType[] = [
  {
    id: 1,
    name: "Суперфорсаж",
    full_name:
      "Суперфорсаж / Superfast! (2014) / Улетная пародия на «Форсаж» от авторов «Знакомства со спартанцами»",
    year_time: "2014 1час. 35мин. 16+",
    country: "США",
    rating: 4.7,
    description:
      "Если бы «Форсаж» был комедией: смешная и хулиганская пародия на франшизу от авторов «Очень страшного кино»",
    audio_tracks: "Русский, Английский",
    starring:
      "Алекс Ашбаух Дэйл Павински Лили Мирожник Андреа Наведо  Дэниэл Буко  Дио Джонсон  Шантель Вислэвски Джозеф Джулиан Сория Гонсало Менендес Омар Чапарро",
    img: superForius,
    trailer: "s_38ls0SCM8",
  },
  {
    id: 2,
    name: "Это всё он (2021)",
    full_name: "Это всё он (2021)",
    year_time: "2021 1час. 18мин. 17+",
    country: "США",
    rating: 6.2,
    description:
      "Популярная девушка-имиджмейкер на спор берется превратить невзрачного одноклассника в короля выпускного бала.",
    audio_tracks: "Русский, Английский",
    starring:
      "Эддисон Рэй Тэннер Бьюкэнэн Энни Джейкоб Мэдисон Петтис Рэйчел Ли Кук Мэттью Лиллард Пейтон Мейер Изабелла Крамп Мира Моллой Кортни Кардашьян",
    img: hesAllthat,
    trailer: "iu6xY12xq5A",
  },
];

export default moviesModel;
