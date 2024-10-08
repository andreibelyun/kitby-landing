import review1 from './assets/review1.jpg'
import review2 from './assets/review2.jpg'

export const REVIEWS = [
  {
    id: 'review1',
    photo: review1.src,
    author: {
      name: 'Марина Блюдник',
      job: 'Индивидуальный предприниматель'
    },
    text: (
      <>
        <p>“Уважаемые, Ольга и все, кто принимал участие в нашей первой закупке!</p>
        <p>
          Хочу от всего сердца поблагодарить компанию ООО «КитБай» и оставить отзыв о первой моей закупке товара из
          Китая. Давно хотелось попробовать самой привезти товар из Китая. Листая инстаграм наткнулась на страничку
          @olgaguivik поставка товара из Китая под ключ. Привлекло то, что девушка из Беларуси г. Минск. Сначала хотела
          просто узнать, сколько примерно будут стоить конкретные позиции интересующего меня товара. Выслала фото и
          параметры. Ольга оперативно ответила на все интересующие меня вопросы (сроки, стоимость, оплата) подробно
          описала процедуру доставки товара в РБ.
        </p>
        <p>
          Практически сразу я заключила договор, после чего мы приступили к оформлению моего заказа. На протяжении всего
          времени доставки Ольга держала меня в курсе всех событий. Мой заказ приехал даже раньше предполагаемого
          изначально срока и чуточку получилось сэкономить на доставке. Сотрудничеством с ООО «КитБай» очень довольна и
          благодарна Ольге и её команде за хорошую, слаженную работу.
        </p>
        <p>Следующая закупка товара, только с Вами.”</p>
      </>
    ),
    date: '18.07.2024'
  },
  {
    id: 'review2',
    photo: review2.src,
    author: {
      name: 'Вероника Светлова',
      job: 'Индивидуальный предприниматель'
    },
    text: (
      <>
        <p>“Уважаемые, Ольга и все, кто принимал участие в нашей первой закупке!</p>
        <p>Хочу поникать положительный отзыв компании ООО «КитБай», а в частности Ольге Гуйвик.</p>
        <p>
          Не первой встрече я сразу увидела специалиста со знанием своего дела и полностью доверилась ей, так как я
          только начинающий предприниматель и много не знаю про Китай: где искать, какой завод. выбрать.
        </p>
        <p>
          Все работу сделала Ольга со своей командой. Огромное спасибо им за это, за своевременное направление : когда
          сходить в банк, когде распечатать. За меня все растаможили, только приезжай и увози с таможни. Супер! а ними
          было очень легко. Рекомендую! Команда на своем месте.”
        </p>
      </>
    ),
    date: '01.07.2024'
  }
]
