export const thread = {
  data: [
    {
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
    },
    {
      node: {
        avatar_large:
          "https://cdn.v2ex.com/navatar/a3c6/5c29/108_large.png?m=1689070386",
        name: "bb",
        avatar_normal:
          "https://cdn.v2ex.com/navatar/a3c6/5c29/108_normal.png?m=1689070386",
        title: "宽带症候群",
        url: "https://www.v2ex.com/go/bb",
        topics: 13202,
        footer: "",
        header: "网速很重要。比快更快。",
        title_alternative: "Broadband Symptom Complex",
        avatar_mini:
          "https://cdn.v2ex.com/navatar/a3c6/5c29/108_mini.png?m=1689070386",
        stars: 6599,
        aliases: [],
        root: false,
        id: 108,
        parent_node_name: "geek",
      },
      member: {
        id: 356731,
        username: "oblivion",
        url: "https://www.v2ex.com/u/oblivion",
        website: null,
        twitter: null,
        psn: null,
        github: null,
        btc: null,
        location: null,
        tagline: null,
        bio: null,
        avatar_mini:
          "https://cdn.v2ex.com/gravatar/d25c93466969d2d2b2427d8211109337?s=24&d=retro",
        avatar_normal:
          "https://cdn.v2ex.com/gravatar/d25c93466969d2d2b2427d8211109337?s=48&d=retro",
        avatar_large:
          "https://cdn.v2ex.com/gravatar/d25c93466969d2d2b2427d8211109337?s=73&d=retro",
        created: 1539771139,
        last_modified: 1660928990,
      },
      last_reply_by: "erfesq",
      last_touched: 1690043582,
      title: "光猫改桥接后速度降低的问题与运营商和厂商的探讨",
      url: "https://www.v2ex.com/t/958813",
      created: 1690014335,
      deleted: 0,
      content:
        "最近经常看到有人被光猫桥接速度变慢的问题困扰，并且经过这些初步的排查后仍无效果：\r\n1.光猫性能问题：路由可以硬件加速，桥接为 linux bridge 软桥接。\r\n2.拨号设备性能问题（千兆接口的路由器不代表性能有千兆，性能有千兆不代表 PPPoE 性能仍有千兆）\r\n3.中兴光猫的配置方式问题：中兴光猫特有的 FPGA 可编程加速，需要删除原有连接新建一个原生桥接才能硬件加速，路由直接切换桥接为软桥接\r\n\r\n等等常见情况排查过后，还是有遇到了一条线路无论如何都是速度不正常，\r\n联系了运营商，运营商排查多次后联系了 OLT 厂家的技术支持，光猫厂家的技术支持，约了今天上门排查，\r\n经过大约半天的抓包测试调整，\r\n\r\n最终发现是光猫在桥接后不能获取到精确时间导致的，桥接后光猫的 NTP 不工作，为 1970 年开始的默认时间，\r\nPON 类协议天生决定了对时钟要求非常高，时间不对或者时差过大会导致 PON 接口时间窗出现错误，与邻居的光猫在时间片上产生了一些冲突会丢包。\r\n\r\n光猫路由模式情况下可以正常 NTP 获取到精确时间，此时工作正常\r\n桥接后部分地区配置问题不能在 TR069 网络使用 NTP 获取时间，\r\n也无法在 OLT 下学习到时间，就会导致光猫桥接后速度变慢的问题（重传率过高最终导致约半数重传）。\r\n\r\n解决方案：在运营商的配合下为光猫配置了正确的 NTP 服务地址（ TR069 内网 NTP ）后桥接速度正常达标。",
      content_rendered:
        "最近经常看到有人被光猫桥接速度变慢的问题困扰，并且经过这些初步的排查后仍无效果：<br />1.光猫性能问题：路由可以硬件加速，桥接为 linux bridge 软桥接。<br />2.拨号设备性能问题（千兆接口的路由器不代表性能有千兆，性能有千兆不代表 PPPoE 性能仍有千兆）<br />3.中兴光猫的配置方式问题：中兴光猫特有的 FPGA 可编程加速，需要删除原有连接新建一个原生桥接才能硬件加速，路由直接切换桥接为软桥接<br /><br />等等常见情况排查过后，还是有遇到了一条线路无论如何都是速度不正常，<br />联系了运营商，运营商排查多次后联系了 OLT 厂家的技术支持，光猫厂家的技术支持，约了今天上门排查，<br />经过大约半天的抓包测试调整，<br /><br />最终发现是光猫在桥接后不能获取到精确时间导致的，桥接后光猫的 NTP 不工作，为 1970 年开始的默认时间，<br />PON 类协议天生决定了对时钟要求非常高，时间不对或者时差过大会导致 PON 接口时间窗出现错误，与邻居的光猫在时间片上产生了一些冲突会丢包。<br /><br />光猫路由模式情况下可以正常 NTP 获取到精确时间，此时工作正常<br />桥接后部分地区配置问题不能在 TR069 网络使用 NTP 获取时间，<br />也无法在 OLT 下学习到时间，就会导致光猫桥接后速度变慢的问题（重传率过高最终导致约半数重传）。<br /><br />解决方案：在运营商的配合下为光猫配置了正确的 NTP 服务地址（ TR069 内网 NTP ）后桥接速度正常达标。",
      last_modified: 1690014335,
      replies: 45,
      id: 958813,
    },
    {
      node: {
        avatar_large:
          "https://cdn.v2ex.com/navatar/c9f0/f895/8_large.png?m=1630643991",
        name: "iphone",
        avatar_normal:
          "https://cdn.v2ex.com/navatar/c9f0/f895/8_normal.png?m=1630643991",
        title: "iPhone",
        url: "https://www.v2ex.com/go/iphone",
        topics: 10272,
        footer: "这里绝不讨论如何获得 iPhone 盗版软件、iTunes 黑卡之类。",
        header: "Say hello to the future.",
        title_alternative: "iPhone",
        avatar_mini:
          "https://cdn.v2ex.com/navatar/c9f0/f895/8_mini.png?m=1630643991",
        stars: 3150,
        aliases: [],
        root: false,
        id: 8,
        parent_node_name: "apple",
      },
      member: {
        id: 328340,
        username: "IfEles",
        url: "https://www.v2ex.com/u/IfEles",
        website: "",
        twitter: "",
        psn: "",
        github: "",
        btc: "",
        location: "",
        tagline: "",
        bio: "null",
        avatar_mini:
          "https://cdn.v2ex.com/avatar/feb3/85b0/328340_mini.png?m=1656031839",
        avatar_normal:
          "https://cdn.v2ex.com/avatar/feb3/85b0/328340_normal.png?m=1656031839",
        avatar_large:
          "https://cdn.v2ex.com/avatar/feb3/85b0/328340_large.png?m=1656031839",
        created: 1531272359,
        last_modified: 1656031839,
      },
      last_reply_by: "IfEles",
      last_touched: 1690036273,
      title: "iphone12 有必要升级 ios16 吗？",
      url: "https://www.v2ex.com/t/958744",
      created: 1689987843,
      deleted: 0,
      content:
        "目前是 ios15.7.1 ，4g ram 杀后台确实严重，最不能接受的是锁屏唤醒打开相机拍照要卡顿个 1 ～ 2 秒，不知道是 ram 不够导致还是这个版本的 bug",
      content_rendered:
        "<p>目前是 ios15.7.1 ，4g ram 杀后台确实严重，最不能接受的是锁屏唤醒打开相机拍照要卡顿个 1 ～ 2 秒，不知道是 ram 不够导致还是这个版本的 bug</p>\n",
      last_modified: 1689987843,
      replies: 42,
      id: 958744,
    },
    {
      node: {
        avatar_large:
          "https://cdn.v2ex.com/navatar/093f/65e0/59_large.png?m=1615956453",
        name: "random",
        avatar_normal:
          "https://cdn.v2ex.com/navatar/093f/65e0/59_normal.png?m=1615956453",
        title: "随想",
        url: "https://www.v2ex.com/go/random",
        topics: 3560,
        footer: "",
        header: "有的时候，可以停下来找找灵感，然后再继续。",
        title_alternative: "Random",
        avatar_mini:
          "https://cdn.v2ex.com/navatar/093f/65e0/59_mini.png?m=1615956453",
        stars: 1144,
        aliases: [],
        root: false,
        id: 59,
        parent_node_name: "v2ex",
      },
      member: {
        id: 46684,
        username: "dawn009",
        url: "https://www.v2ex.com/u/dawn009",
        website: "",
        twitter: "",
        psn: "",
        github: "",
        btc: "",
        location: "",
        tagline: "",
        bio: "",
        avatar_mini:
          "https://cdn.v2ex.com/avatar/2742/7f5b/46684_mini.png?m=1401146806",
        avatar_normal:
          "https://cdn.v2ex.com/avatar/2742/7f5b/46684_normal.png?m=1401146806",
        avatar_large:
          "https://cdn.v2ex.com/avatar/2742/7f5b/46684_large.png?m=1401146806",
        created: 1381536778,
        last_modified: 1401146806,
      },
      last_reply_by: "1145148964",
      last_touched: 1690043759,
      title: "使用提高医保缴费或降低医保赔偿的方式，来替代对系安全带的强制要求",
      url: "https://www.v2ex.com/t/958837",
      created: 1690019551,
      deleted: 0,
      content:
        "一种关于汽车安全带的观点：使用提高医保缴费或降低医保赔偿的方式，来替代对系安全带的强制要求。\r\n\r\n好处：逻辑自洽，因为不系安全带会增加受伤的风险，因此提高医疗保费是合理的。强制要求系安全带逻辑不能自洽，因为人有权决定自己是否需要冒一些风险来换取便利。有些人对强制要求持抵触态度，认为这侵犯了个人自由。采取医保相关的激励措施可能会更容易获得他们的理解和支持，从而促使更多人自愿遵守安全带使用规定。",
      content_rendered:
        "<p>一种关于汽车安全带的观点：使用提高医保缴费或降低医保赔偿的方式，来替代对系安全带的强制要求。</p>\n<p>好处：逻辑自洽，因为不系安全带会增加受伤的风险，因此提高医疗保费是合理的。强制要求系安全带逻辑不能自洽，因为人有权决定自己是否需要冒一些风险来换取便利。有些人对强制要求持抵触态度，认为这侵犯了个人自由。采取医保相关的激励措施可能会更容易获得他们的理解和支持，从而促使更多人自愿遵守安全带使用规定。</p>\n",
      last_modified: 1690019551,
      replies: 37,
      id: 958837,
    },
    {
      node: {
        avatar_large:
          "https://cdn.v2ex.com/navatar/94f6/d7e0/300_large.png?m=1689070442",
        name: "programmer",
        avatar_normal:
          "https://cdn.v2ex.com/navatar/94f6/d7e0/300_normal.png?m=1689070442",
        title: "程序员",
        url: "https://www.v2ex.com/go/programmer",
        topics: 57494,
        footer: "",
        header: "While code monkeys are not eating bananas, they're coding.",
        title_alternative: "Programmer",
        avatar_mini:
          "https://cdn.v2ex.com/navatar/94f6/d7e0/300_mini.png?m=1689070442",
        stars: 8491,
        aliases: [],
        root: false,
        id: 300,
        parent_node_name: "computer",
      },
      member: {
        id: 499195,
        username: "hui9000",
        url: "https://www.v2ex.com/u/hui9000",
        website: null,
        twitter: null,
        psn: null,
        github: null,
        btc: null,
        location: null,
        tagline: null,
        bio: null,
        avatar_mini:
          "https://cdn.v2ex.com/gravatar/dfd675d7c53e738a09e12e7e4df6ddb1?s=24&d=retro",
        avatar_normal:
          "https://cdn.v2ex.com/gravatar/dfd675d7c53e738a09e12e7e4df6ddb1?s=48&d=retro",
        avatar_large:
          "https://cdn.v2ex.com/gravatar/dfd675d7c53e738a09e12e7e4df6ddb1?s=73&d=retro",
        created: 1594776651,
        last_modified: 1594776651,
      },
      last_reply_by: "documentzhangx66",
      last_touched: 1689970786,
      title: "中国首款量子计算机操作系统开放下载",
      url: "https://www.v2ex.com/t/958759",
      created: 1689992831,
      deleted: 0,
      content:
        "PilotOS\r\n下载地址\r\nhttps://qcloud.originqc.com.cn/zh/pilotos\r\n有没有大佬试验呀，这个是面子工程还是有东西的",
      content_rendered:
        '<p>PilotOS\n下载地址\n<a href="https://qcloud.originqc.com.cn/zh/pilotos" rel="nofollow">https://qcloud.originqc.com.cn/zh/pilotos</a>\n有没有大佬试验呀，这个是面子工程还是有东西的</p>\n',
      last_modified: 1689992831,
      replies: 35,
      id: 958759,
    },
    {
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
        id: 553505,
        username: "unregister",
        url: "https://www.v2ex.com/u/unregister",
        website: "https://www.cnblogs.com/metatreasure/",
        twitter: null,
        psn: null,
        github: null,
        btc: null,
        location: "",
        tagline: "",
        bio: "",
        avatar_mini:
          "https://cdn.v2ex.com/gravatar/c1823de355abcada38d6f701e04de75a?s=24&d=retro",
        avatar_normal:
          "https://cdn.v2ex.com/gravatar/c1823de355abcada38d6f701e04de75a?s=48&d=retro",
        avatar_large:
          "https://cdn.v2ex.com/gravatar/c1823de355abcada38d6f701e04de75a?s=73&d=retro",
        created: 1629100092,
        last_modified: 1674288121,
      },
      last_reply_by: "wtdd",
      last_touched: 1690030940,
      title: "同一个医院里面，不同的科室能看到之前的就医记录吗？",
      url: "https://www.v2ex.com/t/958752",
      created: 1689991065,
      deleted: 0,
      content:
        "比如之前我在骨科看过，又去看皮肤科，不同的科室医生能看到之前的记录吗？",
      content_rendered:
        "<p>比如之前我在骨科看过，又去看皮肤科，不同的科室医生能看到之前的记录吗？</p>\n",
      last_modified: 1689991065,
      replies: 31,
      id: 958752,
    },
    {
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
        id: 557289,
        username: "ZC3746",
        url: "https://www.v2ex.com/u/ZC3746",
        website: null,
        twitter: null,
        psn: null,
        github: null,
        btc: null,
        location: null,
        tagline: null,
        bio: null,
        avatar_mini:
          "https://cdn.v2ex.com/avatar/976a/cf2f/557289_mini.png?m=1683521416",
        avatar_normal:
          "https://cdn.v2ex.com/avatar/976a/cf2f/557289_normal.png?m=1683521416",
        avatar_large:
          "https://cdn.v2ex.com/avatar/976a/cf2f/557289_large.png?m=1683521416",
        avatar_xlarge:
          "https://cdn.v2ex.com/avatar/976a/cf2f/557289_xlarge.png?m=1683521416",
        avatar_xxlarge:
          "https://cdn.v2ex.com/avatar/976a/cf2f/557289_xlarge.png?m=1683521416",
        created: 1632924584,
        last_modified: 1683521416,
      },
      last_reply_by: "levelworm",
      last_touched: 1690048603,
      title: "纠结：加拿大上学，电工 VS Computer science 本科？",
      url: "https://www.v2ex.com/t/958789",
      created: 1690002685,
      deleted: 0,
      content:
        "我今年 41 岁，在加拿大蒙特利尔，目前处于人生的十字路口，到底是学电工（排队 1-2 年、上学 1.5 年、学徒 5 年），还是读 Computer science 本科（最快明年 1 月、慢一点明年 9 月可以上学，4 年本科，只要能毕业，找工作应该问题不大）\r\n\r\n请大家多多指点，谢谢！\r\n\r\n████ 为了表示诚意：最优质的 3 个答案，我每人发个 50 人民币的红包（微信）████ \r\n\r\n电工\r\n好处：\r\n1. 一次学习，终身不用再学，不像 it 要学的东西太多，而且一直要学习，不进则退\r\n2. 和其他人在同一起跑线；搞 it ，则是远落后于其他科班出身的人\r\n3. 不担心大龄失业\r\n4. 对语言能力要求较低，不需要较高的沟通技巧和语言能力\r\n5. 方便接私活、收现金，避免夫妻二人高薪高报税\r\n6. 爸爸弟弟来了能搭把手干活，更快更好完工，赚更多钱，或者我更轻松\r\n7. 下班了就清空大脑、陪老婆孩子，不像 it ，脑子里一直在想事，无法充分休息\r\n8. 干体力活，走动多，不会久坐，对身体更好\r\n\r\n坏处：\r\n1. 石棉致癌★★★\r\n2. 电击风险（民用电比工业电风险小一些）★\r\n3.魁省建筑行业说法语的比较多，客户也可能只会法语，所以要额外学习法语\r\n4. 体力劳动，手腕是否吃得消（电工学徒累吗? 电工已经算建筑行业里体力要求里最小的了，但是作为学徒没有不累的，Supervisor 干活你帮衬着，而且要搬 50 公斤的电线轴举着 10 公斤的工具在房顶打钉，扛着大梯子满楼跑，拖着一大捆管子上 7 楼。←这是小红书上一个澳洲的电工的帖子，我觉得对我来说挺难的。）\r\n5. 受伤风险（刮伤、割伤、扎伤）\r\n\r\n程序员好处：\r\n1.可以居家办公\r\n2.收入较高\r\n3.福利较好\r\n\r\n坏处：\r\n1.要学习很多东西，且持续学习\r\n2.要兼顾家庭和学习，不容易\r\n3.下班后可能脑子里还在想代码问题\r\n4.久坐带来的健康问题",
      content_rendered:
        "我今年 41 岁，在加拿大蒙特利尔，目前处于人生的十字路口，到底是学电工（排队 1-2 年、上学 1.5 年、学徒 5 年），还是读 Computer science 本科（最快明年 1 月、慢一点明年 9 月可以上学，4 年本科，只要能毕业，找工作应该问题不大）<br /><br />请大家多多指点，谢谢！<br /><br />████ 为了表示诚意：最优质的 3 个答案，我每人发个 50 人民币的红包（微信）████ <br /><br />电工<br />好处：<br />1. 一次学习，终身不用再学，不像 it 要学的东西太多，而且一直要学习，不进则退<br />2. 和其他人在同一起跑线；搞 it ，则是远落后于其他科班出身的人<br />3. 不担心大龄失业<br />4. 对语言能力要求较低，不需要较高的沟通技巧和语言能力<br />5. 方便接私活、收现金，避免夫妻二人高薪高报税<br />6. 爸爸弟弟来了能搭把手干活，更快更好完工，赚更多钱，或者我更轻松<br />7. 下班了就清空大脑、陪老婆孩子，不像 it ，脑子里一直在想事，无法充分休息<br />8. 干体力活，走动多，不会久坐，对身体更好<br /><br />坏处：<br />1. 石棉致癌★★★<br />2. 电击风险（民用电比工业电风险小一些）★<br />3.魁省建筑行业说法语的比较多，客户也可能只会法语，所以要额外学习法语<br />4. 体力劳动，手腕是否吃得消（电工学徒累吗? 电工已经算建筑行业里体力要求里最小的了，但是作为学徒没有不累的，Supervisor 干活你帮衬着，而且要搬 50 公斤的电线轴举着 10 公斤的工具在房顶打钉，扛着大梯子满楼跑，拖着一大捆管子上 7 楼。←这是小红书上一个澳洲的电工的帖子，我觉得对我来说挺难的。）<br />5. 受伤风险（刮伤、割伤、扎伤）<br /><br />程序员好处：<br />1.可以居家办公<br />2.收入较高<br />3.福利较好<br /><br />坏处：<br />1.要学习很多东西，且持续学习<br />2.要兼顾家庭和学习，不容易<br />3.下班后可能脑子里还在想代码问题<br />4.久坐带来的健康问题",
      last_modified: 1690002788,
      replies: 30,
      id: 958789,
    },
    {
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
        id: 513968,
        username: "nyxsonsleep",
        url: "https://www.v2ex.com/u/nyxsonsleep",
        website: "",
        twitter: null,
        psn: null,
        github: null,
        btc: null,
        location: "",
        tagline: "",
        bio: "",
        avatar_mini:
          "https://cdn.v2ex.com/gravatar/062fe34b18cfc2655220a1e8dc71c723?s=24&d=retro",
        avatar_normal:
          "https://cdn.v2ex.com/gravatar/062fe34b18cfc2655220a1e8dc71c723?s=48&d=retro",
        avatar_large:
          "https://cdn.v2ex.com/gravatar/062fe34b18cfc2655220a1e8dc71c723?s=73&d=retro",
        created: 1603334870,
        last_modified: 1685284035,
      },
      last_reply_by: "SLink",
      last_touched: 1690044995,
      title: "关于公司交医保，能取出来吗？",
      url: "https://www.v2ex.com/t/958784",
      created: 1690000787,
      deleted: 0,
      content:
        "不太了解医保的模式，我听说自己缴纳部分的医保相当于银行二类账号，可以用可以取（取出不确定，但是通过药店之类的地方肯定有变现渠道）。但是公司缴纳的部分是进统筹账户吗？这部分怎么计算？\r\n\r\n公积金无论个人还是公司肯定都可以取出。",
      content_rendered:
        "<p>不太了解医保的模式，我听说自己缴纳部分的医保相当于银行二类账号，可以用可以取（取出不确定，但是通过药店之类的地方肯定有变现渠道）。但是公司缴纳的部分是进统筹账户吗？这部分怎么计算？</p>\n<p>公积金无论个人还是公司肯定都可以取出。</p>\n",
      last_modified: 1690000787,
      replies: 29,
      id: 958784,
    },
    {
      node: {
        avatar_large:
          "https://cdn.v2ex.com/navatar/fd2c/5e46/1135_large.png?m=1680100270",
        name: "openai",
        avatar_normal:
          "https://cdn.v2ex.com/navatar/fd2c/5e46/1135_normal.png?m=1680100270",
        title: "OpenAI",
        url: "https://www.v2ex.com/go/openai",
        topics: 1187,
        footer: "",
        header:
          "关于 OpenAI 旗下产品 GPT，DALL·E，和 ChatGPT 的讨论。请不要在 V2EX 的回复中粘贴复制来自 AI 生成的文本。",
        title_alternative: "OpenAI",
        avatar_mini:
          "https://cdn.v2ex.com/navatar/fd2c/5e46/1135_mini.png?m=1680100270",
        stars: 1595,
        aliases: [],
        root: false,
        id: 1135,
        parent_node_name: "geek",
      },
      member: {
        id: 60691,
        username: "justincnn",
        url: "https://www.v2ex.com/u/justincnn",
        website: "",
        twitter: null,
        psn: null,
        github: null,
        btc: null,
        location: "",
        tagline: "",
        bio: "",
        avatar_mini:
          "https://cdn.v2ex.com/avatar/387f/986a/60691_mini.png?m=1689252237",
        avatar_normal:
          "https://cdn.v2ex.com/avatar/387f/986a/60691_normal.png?m=1689252237",
        avatar_large:
          "https://cdn.v2ex.com/avatar/387f/986a/60691_large.png?m=1689252237",
        created: 1397875323,
        last_modified: 1689252237,
      },
      last_reply_by: "isnullstring",
      last_touched: 1690043394,
      title: "openai 已经放弃对 ip 的限制了？",
      url: "https://www.v2ex.com/t/958763",
      created: 1689993683,
      deleted: 0,
      content:
        "以前被 bloack 的 vpn ip ，今天发现又可以直接登录了。\r\n\r\n这个是不是所谓的有竞争真好",
      content_rendered:
        "<p>以前被 bloack 的 vpn ip ，今天发现又可以直接登录了。</p>\n<p>这个是不是所谓的有竞争真好</p>\n",
      last_modified: 1689993683,
      replies: 28,
      id: 958763,
    },
  ],
  header: {
    Date: "Sat, 22 Jul 2023 18:18:54 GMT",
    "Content-Type": "application/json;charset=UTF-8",
    "Transfer-Encoding": "chunked",
    Connection: "keep-alive",
    vary: "Accept-Encoding",
    "x-rate-limit-remaining": "599",
    etag: 'W/"96fd18e5b9712d74883fb4ca8d27215619ddd6fd"',
    "x-rate-limit-reset": "1690053533",
    "Cache-Control": "public, max-age=1800",
    "x-rate-limit-limit": "600",
    google: "XY",
    "x-frame-options": "sameorigin",
    "Content-Encoding": "gzip",
    "CF-Cache-Status": "EXPIRED",
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
    Server: "cloudflare",
    "CF-RAY": "7eadb0540c850676-LHR",
    "alt-svc": 'h3=":443"; ma=86400',
  },
  statusCode: 200,
  cookies: [],
  errMsg: "request:ok",
};
