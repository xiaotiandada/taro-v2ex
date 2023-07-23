import Taro, { useRouter } from '@tarojs/taro'
import { useLayoutEffect, useState } from 'react'
import { View } from '@tarojs/components'
import { IThread } from '@/types/thread'
import { ThreadList } from '@/components/thread_list'
import api from '@/utils/api'
import { useAsyncEffect } from '@/utils/index'

import './index.scss'

function NodeDetail () {
  const [ loading, setLoading ] = useState(true)
  const [ threads, setThreads ] = useState<IThread[]>([])
  const [$instance] = useState(Taro.getCurrentInstance())

  useLayoutEffect(() => {
    const full_name = $instance.router?.params.full_name
    if (!full_name) return
    
    Taro.setNavigationBarTitle({
      title: decodeURI(full_name)
    })
  }, [$instance])

  useAsyncEffect(async () => {
    const short_name = $instance.router?.params.short_name
    if (!short_name) {
      Taro.showToast({
        title: '载入远程数据错误'
      })
      return
    }

    try {
      const { data: { id } } = await Taro.request({
        url: api.getNodeInfo({
          name: short_name
        })
      })
      const res = await Taro.request<IThread[]>({
        url: api.getTopics({
          node_id: id
        })
      })
      setLoading(false)
      setThreads(res.data)
    } catch (error) {
      Taro.showToast({
        title: '载入远程数据错误'
      })
    }
  }, [])

  return (
    <View className='index'>
      <ThreadList
        threads={threads}
        loading={loading}
      />
    </View>
  )
}

export default NodeDetail
