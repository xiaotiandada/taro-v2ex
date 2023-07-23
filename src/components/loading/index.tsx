import { FC, ReactNode } from 'react'
import { View, Image } from '@tarojs/components'
import url from '@/resource/spiner.gif'

import styles from './index.module.scss'


const Loading: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <View className={styles.loading}>
      <Image src={url} className={styles.img} />
      {children}
  </View>
  )
}

export { Loading }
