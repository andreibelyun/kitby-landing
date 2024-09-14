import st from './WhyUs.module.scss'
import Icon1 from './assets/Icon1'
import Icon2 from './assets/Icon2'
import Icon3 from './assets/Icon3'
import Icon4 from './assets/Icon4'
import Icon5 from './assets/Icon5'
import Icon6 from './assets/Icon6'
import ButtonsGroup from '@/components/ButtonsGroup/ButtonsGroup'

const ADVANTAGES = [
  {
    id: 'adv1',
    icon: <Icon1 />,
    content: (
      <>
        Опыт работы: в нашем портфеле
        <span className={st.highlight}> сотни официальных поставок</span> различных категорий товаров: от одежды и
        электроники до крупногабаритного
        <br />
        оборудования.
      </>
    )
  },
  {
    id: 'adv2',
    icon: <Icon2 />,
    content: (
      <>
        Широкая сеть партнеров: <span className={st.highlight}>налаженные связи с надежными</span> китайскими
        поставщиками и логистическими компаниями.
      </>
    )
  },
  {
    id: 'adv3',
    icon: <Icon3 />,
    content: (
      <>
        Гибкие и прогрессивные:
        <br />
        мы <span className={st.highlight}>не боимся работать</span>
        <br />
        даже с самыми
        <br />
        безумными идеями.
      </>
    )
  },
  {
    id: 'adv4',
    icon: <Icon4 />,
    content: (
      <>
        Гарантия
        <br />
        конфиденциальности:
        <br />
        обеспечиваем{' '}
        <span className={st.highlight}>
          полную
          <br />
          защиту данных
        </span>{' '}
        о вашей
        <br />
        компании и совершаемой
        <br />
        сделке.
      </>
    )
  },
  {
    id: 'adv5',
    icon: <Icon5 />,
    content: (
      <>
        <span className={st.highlight}>Многопрофильная экспертиза</span>: наша команда объединяет специалистов из
        различных областей для комплексного решения ваших задач.
      </>
    )
  },
  {
    id: 'adv6',
    icon: <Icon6 />,
    content: (
      <>
        <span className={st.highlight}>Прозрачность процессов</span>: заключаем все договора с подрядчиками от лица
        вашей компании, нет скрытых платежей. Держим в курсе всего процесса поставки.
      </>
    )
  }
]

const WhyUs = () => {
  return (
    <section className={st.container}>
      <h2 className={st.title}>Почему KITBY.by? </h2>
      <p className={st.caption}>
        <span className={st.highlight}>МИССИЯ</span>&nbsp;– закрываем ваши потребности в поиске, приобретении и доставке
        любых
        <br />
        товаров из Китая, оптимизируя ваши финансовые и временные затраты.
        <br />
        Мы работаем, чтобы вы зарабатывали!{' '}
      </p>

      <div className={st.main}>
        <h3 className={st.whyUsQuestion}>Почему нужно работать с нами?</h3>

        <ul className={st.advantagesList}>
          {ADVANTAGES.map(({ id, icon, content }) => (
            <li key={id} className={st.advantage}>
              {icon}
              <p>{content}</p>
            </li>
          ))}
        </ul>

        <ButtonsGroup withoutLeaveFreeEstimateReqBtn />
      </div>
    </section>
  )
}

export default WhyUs
