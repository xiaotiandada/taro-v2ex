import { FC } from "react";
import { View } from "@tarojs/components";
import { IThread } from "src/types/thread";
import { Thread } from "./thread";
import { Loading } from "./loading";

interface IProps {
  loading: boolean;
  threads: IThread[];
};

const ThreadList: FC<IProps> = ({ loading, threads }) => {
  if (loading) {
    return <Loading />;
  }

  const element = threads.map((thread) => {
    return (
      <Thread
        key={thread.id}
        node={thread.node}
        title={thread.title}
        last_modified={thread.last_modified}
        replies={thread.replies}
        tid={thread.id}
        member={thread.member}
      />
    );
  });

  return <View className='thread-list'>{element}</View>;
};

export { ThreadList };
