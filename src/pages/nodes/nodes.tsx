import { View, Text, Navigator } from '@tarojs/components'
import api from '@/utils/api'

import allNodes from './all_node'

import './nodes.scss'

function Nodes () {
  const element = allNodes.map(item => {
    return (
      <View key={item.title} className='container'>
        <View className='title'>
          <Text style='margin-left: 5px'>{item.title}</Text>
        </View>
        <View className='nodes'>
          {item.nodes.map(node => {
            return (
              <Navigator
                className='tag'
                url={`/pages/node_detail/node_detail${api.queryString(node)}`}
                key={node.full_name}
              >
                <Text>{node.full_name}</Text>
              </Navigator>
            )
          })}
        </View>
      </View>
    )
  })
  return <View className='node-container'>{element}</View>
}

export default Nodes
