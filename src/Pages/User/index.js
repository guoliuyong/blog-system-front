/*
 * @Author: your name
 * @Date: 2022-02-18 14:10:11
 * @LastEditTime: 2022-03-03 20:03:50
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog_backStageSystem\blog_front\src\Pages\User\index.js
 */
import { useEffect, useState } from 'react'
import request from '../../api'
import { Button, Table } from 'antd'
import ContentHeader from '../../Containers/ContentHeader';
import Main from '../../Containers/main'
const UserList = () => {
  const [total, setTotal] = useState(0)

  const [pageSize, setPageSie] = useState(1)
  const [pageNum, setpageNum] = useState(10)
  const [data, setData] = useState([])
  const columns = [
    {
      title: '序号',
      dataIndex: 'userId',
      key: 'userId',
      render: (text, record, index) => {
        return <span>{index + 1}</span>
      },
    },
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '电话号码',
      dataIndex: 'telphone',
      key: 'telphone',
    },
    {
      title: '昵称',
      dataIndex: 'nickname',
      key: 'nickname',
    },
    {
      title: '邮箱地址',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '爱好',
      dataIndex: 'hobby',
      key: 'hobby',
    },
  ]
  /**
   * @description: 查询表格数据
   * @param {*}
   * @return {*}
   */

  const queryData = () => {
    request({
      method: 'GET',
      url: 'v1/userlist',
      params: {
        pageSize,
        pageNum,
      },
    }).then((res) => {
      setTotal(res.total)
      setData(res.content)
    })
  }
  const onShowSizeChange = (current, size) => {
    setPageSie(current)
    setpageNum(size)
  }
  useEffect(() => {
    queryData()
  }, [pageNum, pageSize])
  return (
    <>
    <ContentHeader title="用户列表管理">
       <Button>
         按钮
       </Button>
    </ContentHeader>
    <Main>
  <Table
      dataSource={data}
      columns={columns}
      bordered
      pagination={{
        pageSize: pageNum,
        total,
        current: pageSize,
        showTotal: (total) => `共${total}条`,
        onChange: onShowSizeChange,
        showSizeChanger: true,
      }}
    />
    </Main>
    </>
  )
}
export default UserList
