import { Component, PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
import Taro, { useReady, useDidShow, useDidHide, usePullDownRefresh } from '@tarojs/taro'
import { ThreadList } from '@/components/thread_list'
import './index.scss'

// export default class Index extends Component<PropsWithChildren> {
//   componentDidMount () { }

//   componentWillUnmount () { }

//   componentDidShow () { }

//   componentDidHide () { }

//   render () {
//     return (
//       <View className='index'>
//         <Text>Hello world!</Text>
//       </View>
//     )
//   }
// }


export default function Index() {

  const [loading, setLoading] = useState<boolean>(true)
  const [threads, setThreads] = useState<any[]>([])

  const getData = useCallback(async () => {
    console.log('getData')

    try {
      const res = await Taro.request({
        url: 'https://www.v2ex.com/api/topics/hot.json',
      })

      setThreads(res.data)
      setLoading(false)

      console.log('res', res);
    } catch {
      Taro.showToast({
        title: '载入远程数据错误',
      })
    }
  }, [])

  useReady(() => {
    getData()
  })

  return (
    <View className='index'>
      <ThreadList threads={threads} loading={loading} />
    </View>
  )
}