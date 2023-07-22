import { useMemo, useState } from "react";
import Taro from "@tarojs/taro";
import { RichText, View } from "@tarojs/components";
import api from "@/utils/api";
import { useAsyncEffect, prettyHTML } from "@/utils/index";
import { IThread } from "@/types/thread";

import "./index.scss";

const ThreadDetail = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [replies, setReplies] = useState<IThread[]>([]);
  const [content, setContent] = useState<string>("hello");

  useAsyncEffect(async () => {
    try {
      const id = 12;
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

  const contentEl = useMemo(
    () =>
      loading ? (
        "loading..."
      ) : (
        <View>
          <View className='main-content'>
            <RichText nodes={content} />
          </View>
          <View className='replies'>replieEl</View>
        </View>
      ),
    [loading, content]
  );

  return <View className='detail'>{contentEl}</View>;
};

export default ThreadDetail;
