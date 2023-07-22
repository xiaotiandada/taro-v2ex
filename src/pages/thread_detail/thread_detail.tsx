import { useMemo, useState } from "react";
import Taro from "@tarojs/taro";
import { RichText, View, Image } from "@tarojs/components";
import api from "@/utils/api";
import { useAsyncEffect, prettyHTML } from "@/utils/index";
import { IThread } from "@/types/thread";
import { Loading } from "@/components/loading";
import { Thread } from "@/components/thread";

import "./index.scss";

const ThreadDetail = () => {
  const [topic] = useState({
    node: {
      avatar_large:
        "https://cdn.v2ex.com/navatar/c20a/d4d7/12_large.png?m=1650095340",
      name: "qna",
      avatar_normal:
        "https://cdn.v2ex.com/navatar/c20a/d4d7/12_normal.png?m=1650095340",
      title: "问与答",
      url: "https://www.v2ex.com/go/qna",
      topics: 207469,
      footer: "",
      header: "一个更好的世界需要你持续地提出好问题。",
      title_alternative: "Questions and Answers",
      avatar_mini:
        "https://cdn.v2ex.com/navatar/c20a/d4d7/12_mini.png?m=1650095340",
      stars: 3881,
      aliases: [],
      root: false,
      id: 12,
      parent_node_name: "v2ex",
    },
    member: {
      id: 622222,
      username: "rolinbutterfly2",
      url: "https://www.v2ex.com/u/rolinbutterfly2",
      website: null,
      twitter: null,
      psn: null,
      github: null,
      btc: null,
      location: null,
      tagline: null,
      bio: null,
      avatar_mini:
        "https://cdn.v2ex.com/avatar/8511/b25e/622222_mini.png?m=1680507106",
      avatar_normal:
        "https://cdn.v2ex.com/avatar/8511/b25e/622222_normal.png?m=1680507106",
      avatar_large:
        "https://cdn.v2ex.com/avatar/8511/b25e/622222_large.png?m=1680507106",
      avatar_xlarge:
        "https://cdn.v2ex.com/avatar/8511/b25e/622222_xlarge.png?m=1680507106",
      avatar_xxlarge:
        "https://cdn.v2ex.com/avatar/8511/b25e/622222_xlarge.png?m=1680507106",
      avatar_xxxlarge:
        "https://cdn.v2ex.com/avatar/8511/b25e/622222_xlarge.png?m=1680507106",
      created: 1680506362,
      last_modified: 1680507106,
    },
    last_reply_by: "DaFengChe",
    last_touched: 1690046789,
    title: "在我看来，称呼别人“老哥”是一种冒犯的行为",
    url: "https://www.v2ex.com/t/958794",
    created: 1690005466,
    deleted: 0,
    content: "1.年纪差不多，怎么就我老了？ 2.关系又不熟，就直接称兄道弟",
    content_rendered:
      "1.年纪差不多，怎么就我老了？ 2.关系又不熟，就直接称兄道弟",
    last_modified: 1690005466,
    replies: 125,
    id: 958794,
  });
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

  const replieEl = useMemo(
    () =>
      replies.map((reply, index) => {
        // const time = timeagoInst.format(reply.last_modified * 1000, 'zh')
        const time = "";
        return (
          <View className='reply' key={reply.id}>
            <Image src={reply.member.avatar_large} className='avatar' />
            <View className='main'>
              <View className='author'>{reply.member.username}</View>
              <View className='time'>{time}</View>
              <RichText
                nodes={prettyHTML(reply.content_rendered)}
                className='content'
              />
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
            <RichText nodes={content} />
          </View>
          <View className='replies'>{replieEl}</View>
        </View>
      ),
    [loading, content, replieEl]
  );

  return (
    <View className='detail'>
      <Thread
        node={topic.node}
        title={topic.title}
        last_modified={topic.last_modified}
        replies={topic.replies}
        tid={topic.id}
        member={topic.member}
        not_navi
      />
      {contentEl}
    </View>
  );
};

export default ThreadDetail;
