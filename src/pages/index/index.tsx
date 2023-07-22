import { useState } from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";

import { IThread } from "@/types/thread";
import { useAsyncEffect } from "@/utils/index";
import api from "@/utils/api";

import { ThreadList } from "@/components/thread_list";

import "./index.scss";

export default function Index() {
  const [loading, setLoading] = useState<boolean>(true);
  const [threads, setThreads] = useState<IThread[]>([]);

  useAsyncEffect(async () => {
    try {
      const res = await Taro.request<IThread[]>({
        url: api.getLatestTopic(),
      });
      setLoading(false);
      setThreads(res.data);
    } catch {
      Taro.showToast({
        title: "载入远程数据错误",
      });
    }
  });

  return (
    <View className='index'>
      <ThreadList threads={threads} loading={loading} />
    </View>
  );
}
