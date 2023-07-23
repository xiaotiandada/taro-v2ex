import { useMemo, useState } from "react";
import { format } from "timeago.js";
import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import api from "@/utils/api";
import { useAsyncEffect, prettyHTML } from "@/utils/index";
import { IThread } from "@/types/thread";
import { Loading } from "@/components/loading";
import { Thread } from "@/components/thread";
import { useAppSelector } from "@/store/hooks";

import "./index.scss";

const ThreadDetail = () => {
  const currentThread = useAppSelector((state) => state.thread.currentThread);
  const [topic] = useState(currentThread);
  const [loading, setLoading] = useState<boolean>(true);
  const [replies, setReplies] = useState<IThread[]>([]);
  const [content, setContent] = useState<string>("hello");

  useAsyncEffect(async () => {
    try {
      if (!currentThread?.tid) {
        Taro.showToast({
          title: "载入缓存错误",
        });
        return;
      }
      console.log("currentThread", currentThread);

      const id = currentThread.tid;
      const [
        { data },
        {
          data: [{ content_rendered }],
        },
      ] = await Promise.all([
        Taro.request<IThread[]>({
          url: api.getReplies({
            topic_id: id,
          }),
        }),
        Taro.request<IThread[]>({
          url: api.getTopics({
            id,
          }),
        }),
      ]);
      setLoading(false);
      setReplies(data);
      setContent(prettyHTML(content_rendered));
    } catch (error) {
      Taro.showToast({
        title: "载入远程数据错误",
      });
    }
  }, []);

  const replieEl = useMemo(
    () =>
      replies.map((reply, index) => {
        const time = format(reply.last_modified * 1000, "zh");
        return (
          <View className='reply' key={reply.id}>
            <Image src={reply.member.avatar_large} className='avatar' />
            <View className='main'>
              <View className='author'>{reply.member.username}</View>
              <View className='time'>{time}</View>
              <View
                dangerouslySetInnerHTML={{ __html: reply.content }}
                className='content'
              ></View>
              <View className='floor'>{index + 1} 楼</View>
            </View>
          </View>
        );
      }),
    [replies]
  );

  const contentEl = useMemo(
    () =>
      loading ? (
        <Loading />
      ) : (
        <View>
          <View className='main-content'>
            <View
              dangerouslySetInnerHTML={{ __html: content }}
              className='content'
            ></View>
          </View>
          <View className='replies'>{replieEl}</View>
        </View>
      ),
    [loading, content, replieEl]
  );

  return (
    <View className='detail'>
      {topic && (
        <Thread
          node={topic.node}
          title={topic.title}
          last_modified={topic.last_modified}
          replies={topic.replies}
          tid={topic.tid}
          member={topic.member}
          not_navi
        />
      )}

      {contentEl}
    </View>
  );
};

export default ThreadDetail;
