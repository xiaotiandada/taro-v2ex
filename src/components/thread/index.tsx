import { FC, useCallback, useMemo } from "react";
import { format } from "timeago.js";
import { View, Text, Image } from "@tarojs/components";
import { IMember, INode } from "src/types/thread";
import Taro from "@tarojs/taro";
import { useAppDispatch } from "@/store/hooks";

import { setCurrentThread } from "@/store/thread/threadSlice";

import styles from "./index.module.scss";

export interface IThreadProps {
  title: string;
  member: IMember;
  node: INode;
  last_modified: number;
  tid: number;
  replies: number;
  key?: number;
  not_navi?: boolean; // 不导航到 detail
}

const Thread: FC<IThreadProps> = ({
  title,
  member,
  last_modified,
  replies,
  node,
  tid,
  key,
  not_navi,
}) => {
  const dispatch = useAppDispatch();
  const time = useMemo(
    () => format(last_modified * 1000, "zh"),
    [last_modified]
  );
  const usernameCls = useMemo(
    () => `author ${not_navi ? "bold" : ""}`,
    [not_navi]
  );

  const handleNavigate = useCallback(() => {
    // 这里必须显式指名 this.props 包含 tid
    // 或设置 defaultProps
    if (not_navi) {
      return;
    }
    dispatch(
      setCurrentThread({
        title,
        member,
        last_modified,
        replies,
        node,
        tid,
        key,
        not_navi,
      })
    );
    Taro.navigateTo({
      url: "/pages/thread_detail/thread_detail",
    });
  }, [
    dispatch,
    key,
    last_modified,
    member,
    node,
    not_navi,
    replies,
    tid,
    title,
  ]);

  return (
    <View className={styles.thread} onClick={handleNavigate}>
      <View className={styles.info}>
        <View>
          <Image src={member.avatar_large} className={styles.avatar} />
        </View>
        <View className={styles.middle}>
          <View className={usernameCls}>{member.username}</View>
          <View className={styles.replies}>
            <Text className={styles.mr10}>{time}</Text>
            <Text>评论 {replies}</Text>
          </View>
        </View>
        <View className={styles.node}>
          <Text className={styles.tag}>{node.title}</Text>
        </View>
      </View>
      <Text className={styles.title}>{title}</Text>
    </View>
  );
};

export { Thread };
