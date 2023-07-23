import { FC, useCallback, useMemo } from "react";
import { View, Text, Image } from '@tarojs/components'
import { IMember, INode } from "src/types/thread";
import Taro from "@tarojs/taro";
import { useAppDispatch } from "@/store/hooks";

import { setCurrentThread } from "@/store/thread/threadSlice";

import './thread.scss'

export interface IThreadProps {
  title: string,
  member: IMember,
  node: INode,
  last_modified: number,
  tid: number,
  replies: number,
  key?: number,
  not_navi?: boolean // 不导航到 detail
}

const Thread: FC<IThreadProps> = ({ title, member, last_modified, replies, node, tid, key, not_navi }) => {
  const time = useMemo(() => '......', [])
  const dispatch = useAppDispatch();
  const usernameCls = useMemo(() => `author ${not_navi ? 'bold' : ''}`, [])

  const handleNavigate = useCallback(() => {
    // 这里必须显式指名 this.props 包含 tid
    // 或设置 defaultProps
    if (not_navi) {
      return
    }
    dispatch(setCurrentThread({ title, member, last_modified, replies, node, tid, key, not_navi }))
    Taro.navigateTo({
      url: '/pages/thread_detail/thread_detail'
    })
  }, [dispatch, key, last_modified, member, node, not_navi, replies, tid, title])

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