import { View, Text } from "@tarojs/components";
import { FC } from "react";
import { IThread } from "src/types/thread";
import { Thread } from './thread'

type Props = {
  loading: boolean;
  threads: IThread[];
};

const ThreadList: FC<Props> = ({ loading, threads }) => {
  if (loading) {
    return "loading...";
  }

  const element = threads.map((thread) => {
    return (
      <Thread
        key={thread.id}
        {...thread}
      />
    );
  });

  return <View className='thread-list'>{element}</View>;
};

export { ThreadList }