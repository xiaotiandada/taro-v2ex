import { FC, memo } from "react";
import { View } from "@tarojs/components";
import { IThread } from "src/types/thread";
import VirtualList from "@tarojs/components/virtual-list";

import { IThreadProps, Thread } from "./thread";
import { Loading } from "./loading";

interface IProps {
  loading: boolean;
  threads: IThread[];
}

const Row = memo(({ index, data }: {
  id: string;
  data: IThreadProps;
  index: number;
}) => {
  const thread = data[index]

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

const ThreadList: FC<IProps> = ({ loading, threads }) => {
  if (loading || !threads.length) {
    return <Loading />;
  }

  const element = <VirtualList
    height={800} /* 列表的高度 */
    width='100%' /* 列表的宽度 */
    item={Row} /* 列表单项组件，这里只能传入一个组件 */
    itemData={threads} /* 渲染列表的数据 */
    itemCount={threads.length} /* 渲染列表的长度 */
    itemSize={100}
  />

  return <View className='thread-list'>{element}</View>;
};

export { ThreadList };
