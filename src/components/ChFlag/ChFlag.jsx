import { Noto_Color_Emoji } from 'next/font/google'
import clsx from 'clsx'

const notoColorEmoji = Noto_Color_Emoji({ weight: '400', subsets: ['emoji'], variable: '--font-emoji' })

const ChFlag = ({ className }) => {
  return <span className={clsx(notoColorEmoji.className, className)}>🇨🇳</span>
}

export default ChFlag
