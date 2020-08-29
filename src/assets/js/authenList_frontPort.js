export default [
    {
        id: "1",
        btnName: "权限管理",
        iconfont: "icon-authen",
        name: "roleAuthenList",
        modulesName: "authen",
    },
    {
        id: "2",
        btnName: "用户管理",
        iconfont: "icon-user",
        name: "userList",
        modulesName: "user",
    },
    {
        id: "3",
        btnName: "网格管理",
        iconfont: "icon-grid",
        name: "gridList",
    },
    {
        id: "4",
        btnName: "舆情管理",
        iconfont: "icon-surperive",
        name: "superviseList",
        items: [{
            id: '92',
            btnName: '我的舆情列表',
            name: 'superviseList-1',
        }, {
            id: '93',
            btnName: '舆情列表',
            name: 'superviseList-2',
        },
        ],
    },
    {
        id: "5",
        btnName: "工单管理",
        iconfont: "icon-order",
        name: "workOrderList",
        items: [{
            id: '98',
            btnName: '我的工单列表',
            name: 'workOrderList-1',
        }, {
            id: '97',
            btnName: '工单列表',
            name: 'workOrderList-2',
        },
        ],
    },
    {
        id: "6",
        btnName: "测评管理",
        iconfont: "icon-time",
        name: "evaluateList",
        items: [{
            id: '108',
            btnName: 'KPI模板列表',
            name: 'evaluateList',
        }, {
            id: '104',
            btnName: 'KPI测评指标',
            name: 'subjectItemList',
        }, {
            id: '117',
            btnName: 'KPI测评得分',
            name: 'subjectList',
        },
        ],
    },
    {
        id: "7",
        btnName: "知识库管理",
        iconfont: "icon-notice",
        name: "libraryList"
    },
    {
        id: "56",
        btnName: "责任部门管理",
        iconfont: "icon-depart",
        name: "departmentList"
    },
    {
        id: "121",
        btnName: "值班管理",
        iconfont: "icon-onDutyRecord",
        name: "ondurty"
    },
    {
        id: "62",
        btnName: "流程管理",
        iconfont: "icon-flowPath",
        items: [{
            id: '125',
            btnName: '舆情',
            name: 'processList-1', //1舆情 2工单
        }, {
            id: '125',
            btnName: '工单',
            name: 'processList-2',
        },
        ]
    },
    {
        id: "130",
        btnName: "图文信息管理",
        iconfont: "icon-email",
        name: "infomationCenter",
        items: [{
            id: '131',
            btnName: '公告栏',
            name: 'infomationCenter-1',
        }, {
            id: '131',
            btnName: '宣传栏',
            name: 'infomationCenter-2',
        }, {
            id: '131',
            btnName: '工作动态',
            name: 'infomationCenter-3',
        }, {
            id: '131',
            btnName: '知识库',
            name: 'infomationCenter-4',
        },
        ]
    },
    {
        id: "136",
        btnName: "风险点管理",
        iconfont: "icon-risk",
        name: "riskList",
    },
    {
        id: "142",
        btnName: "数据看板",
        iconfont: "icon-dataView",
        name: "dataBoard"
    },
]