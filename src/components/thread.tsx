import { FC, useCallback, useMemo } from "react";
import { View, Text, Image } from '@tarojs/components'
import { IMember, INode } from "src/types/thread";
import Taro from "@tarojs/taro";

import { Thread_DETAIL_NAVIGATE } from "@/utils/index";

import './thread.scss'

interface IProps {
  title: string,
  member: IMember,
  node: INode,
  last_modified: number,
  tid: number,
  replies: number,
  key?: number,
  not_navi?: boolean // 不导航到 detail
}

const Thread: FC<IProps> = ({ title, member, last_modified, replies, node, tid, key, not_navi }) => {
  const time = useMemo(() => '......', [])
  const usernameCls = `author ${not_navi ? 'bold' : ''}`

  const handleNavigate = useCallback(() => {
    // 这里必须显式指名 this.props 包含 tid
    // 或设置 defaultProps
    if (not_navi) {
      return
    }
    // 懒得用 redux 了
    // eventCenter.trigger(Thread_DETAIL_NAVIGATE, { title, member, last_modified, replies, node, tid, key })
    Taro.navigateTo({
      url: '/pages/thread_detail/thread_detail'
    })
  }, [not_navi])

  return (
    <View className='thread' onClick={handleNavigate}>
      <View className='info'>
        <View>
          <Image src={member.avatar_large} className='avatar' />
        </View>
        <View className='middle'>
          <View className={usernameCls}>{member.username}</View>
          <View className='replies'>
            <Text className='mr10'>{time}</Text>
            <Text>评论 {replies}</Text>
          </View>
        </View>
        <View className='node'>
          <Text className='tag'>{node.title}</Text>
        </View>
      </View>
      <Text className='title'>{title}</Text>
    </View>
  )
}

export { Thread }