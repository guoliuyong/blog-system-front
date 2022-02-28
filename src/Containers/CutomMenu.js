import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import { routerConfig } from '../routers/router';
import { openTab } from '../util/menTab';
const { SubMenu } = Menu

const CoustomMenu = () => {
  const renderSumMenu = () => {
    return routerConfig.map((d) => {
      return (
        <SubMenu key={d.key} title={d.name}>
          {d.routes.map((item, index) => {
            return (
              <Menu.Item
                key={item.path}
                onClick={() => {
                  openTab({
                    ...item,
                    key: item.path
                  })
                }}
              >
                <Link to={item.path}>{item.name}</Link>
              </Menu.Item>
            )
          })}
        </SubMenu>
      )
    })
  }
  return (
    <Menu
      mode="inline"
      theme="dark"
      style={{ marginTop: 10, width: '100%' }}
    >
      {renderSumMenu()}
    </Menu>
  )
}
export default CoustomMenu
