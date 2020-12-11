import Mock from 'mockjs'
Mock.mock('/api/list',{
    'data|20':[{
        title:'作业学完没  666',
        name:'我的同桌'
    }]
})