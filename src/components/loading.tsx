import { FC, ReactNode } from 'react'
import { View, Image } from '@tarojs/components'
import url from '@/resource/spiner.gif'

import './loading.scss'


const Loading: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <View className='loading'>
      <Image src={url} className='img' />
      {children}
  </View>
  )
}

export { Loading }
