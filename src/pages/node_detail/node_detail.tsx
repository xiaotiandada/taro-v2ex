import Taro from '@tarojs/taro'
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

  useLayoutEffect(() => {
    // const { full_name } = this.$router.params
    const full_name = '%E7%A8%8B%E5%BA%8F%E5%91%98'
    Taro.setNavigationBarTitle({
      title: decodeURI(full_name)
    })
  }, [])

  useAsyncEffect(async () => {
    // short_name=programmer&full_name=%E7%A8%8B%E5%BA%8F%E5%91%98
    // const { short_name } = this.$router.params
    const short_name = 'programmer'
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
