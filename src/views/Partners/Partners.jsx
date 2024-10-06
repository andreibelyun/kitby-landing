import st from './Partners.module.scss'
import Image from 'next/image'
import logoZvonko from './assets/zvonko.png'
import logoManka from './assets/manka.png'
import logoBelUvTorg from './assets/beluvelirtorg.png'

const Partners = () => {
  return (
    <div className={st.container}>
      <Image width={270} height={74} src={logoZvonko.src} alt='Логотип Zvonko' className={st.logoZvonko} />
      <Image width={258} height={95} src={logoManka.src} alt='Логотип Manka' className={st.logoManka} />
      <Image width={440} height={56} src={logoBelUvTorg.src} alt='Логотип Белювелирторг' className={st.logoBelUvTorg} />
    </div>
  )
}

export default Partners
