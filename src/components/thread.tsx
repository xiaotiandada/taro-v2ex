import { FC, useCallback, useMemo } from "react";
import { View, Text, Navigator, Image } from '@tarojs/components'
import { IThread } from "src/types/thread";
import Taro, { eventCenter } from "@tarojs/taro";

const Thread: FC<IThread> = ({ title, member, last_modified, replies, node, id }) => {
  const time = useMemo(() => '......', [])
  const usernameCls = useMemo(() => `author ${'' ? 'bold' : ''}`, [])

  const handleNavigate = useCallback(() => {
    // eventCenter.trigger(Thread_DETAIL_NAVIGATE, this.props)
    // 跳转到帖子详情
    Taro.navigateTo({
      url: '/pages/thread_detail/thread_detail',
    })
  }, [])

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