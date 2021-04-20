/*
 * @Author: 24
 * @Date: 2021-04-19 18:40:02
 * @LastEditors: 24
 * @LastEditTime: 2021-04-19 18:43:13
 * @Description:
 */
import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";
const rtm = require("./rtmMiniapp.js");

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "首页",
  };

  render() {
    console.log("rtm------->", rtm);
    return (
      <View className="index">
        <Text>Hello world!</Text>
      </View>
    );
  }
}
