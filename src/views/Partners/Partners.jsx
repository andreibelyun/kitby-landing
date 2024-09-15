import st from './Partners.module.scss'
import Image from 'next/image'
import logoZvonko from './assets/zvonko.png'
import logoManka from './assets/manka.png'
import logoBeluvelirtorg from './assets/beluvelirtorg.png'

const Partners = () => {
  return (
    <div className={st.container}>
      <Image width={270} height={74} src={logoZvonko.src} alt='Логотип Zvonko' />
      <Image width={258} height={95} src={logoManka} alt='Логотип Manka' />
      <Image width={440} height={56} src={logoBeluvelirtorg} alt='Логотип Белювелирторг' className={st.bottomRow} />
    </div>
  )
}

export default Partners
