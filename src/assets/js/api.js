export default {
    //其他
    getDDJsConfigOptions: '/api/dingtalk/jsApiConfig',      //获取钉钉配置参数
    uploadFile: '/api/tool/uploadFile',                     //上传文件

    // 用户相关
    login: '/api/account/login',                            //登录
    loginByDDCode: '/api/account/ddExemptLogin',            //钉钉免密登录
    loginOut: '/api/account/logout',                        //退出登录
    getAdminAuthenDetailsByToken: '/api/account/role',      //获取管理权限详情
    getUserList: '/api/user/list',                          //获取用户列表
    getUserDetailsByUserID: '/api/user/info',               //根据用户id获取用户详情
    delMemberByID: '/api/user/del',                         //删除用户
    editUser: '/api/user/edit',                             //编辑用户
    addUser: '/api/user/add',                               //新增用户
    bindUserRole: '/api/user/userBindRole',                 //绑定用户权限
    delUserAuthen: '/api/user/delUserRole',                 //删除用户权限
    changeUserStatus: '/api/user/changeUserStatus',         //禁用/启用用户
    editUserInfo: '/api/user/editUserInfo',                 //编辑用户信息

    // 网格相关
    getGridsList: '/api/grids/list',                        //获取网格id
    getGridsDetailsByID: '/api/grids/info',                 //根据网格id，获取网格详情
    editGrid: '/api/grids/edit',                            //编辑网格
    delectGrid: '/api/grids/del',                           //删除网格
    addGrid: '/api/grids/add',                              //新增网格
    getWorkTrend: '/api/grids/workTrend',                   //获取网格工作动态
    getAllSuperiorGridsByID: '/api/grids/superiorGrids',    //获取所有的上级网格

    // 角色相关
    getRoleListByGridID: '/api/role/list',                  //根据网格id，获取角色列表
    getRoleDetailsByRoleID: '/api/role/info',               //根据网格id，获取角色详情
    delRoleByRoleID: '/api/role/del',                       //根据角色id，删除角色
    getPowerList: '/api/role/powerList',                    //获取权限列表
    addRole: '/api/role/add',                               //新增角色
    editRole: '/api/role/edit',                             //编辑角色
    getUserAuthenListByID: '/api/user/userRoleList',        //用户权限列表

    // 知识库相关
    getLibraryTabList: '/api/library/categoryList',         //获取知识库的分类导航
    addNewLibraryTab: '/api/library/categoryAdd',           //新增知识库的分类导航
    editLibraryTab: '/api/library/categoryEdit',            //修改知识库的分类导航
    getCategoryInfoDetails: '/api/library/categoryInfo',    //获取智库分类详情
    removeLibraryTab: '/api/library/categoryDel',           //删除分类导航
    getLibraryList: '/api/library/list',                    //获取知识库列表
    getLibraryDetailsByID: '/api/library/info',             //获取知识库详情
    editLibraryDetailsByID: '/api/library/edit',            //编辑知识库详情
    addLibrary: '/api/library/add',                         //新增知识库详情
    delLibraryItemByID: '/api/library/del',                 //删除知识库

    //责任部门
    getDepartList: '/api/dept/list',                                //获取责任部门列表
    getDepartDetails: '/api/dept/info',                             //获取责任部门详情
    editDepart: '/api/dept/edit',                                   //编辑责任部门详情
    switchDepart: '/api/dept/switchType',                           //启用/禁用责任部门
    getValidDeptList: '/api/dept/getValidDeptList',                 //获取可用的责任部门列表

    //舆情
    getSuperviseList: '/api/sentiment/list',                        //获取舆情列表
    addNewSupervise: '/api/sentiment/add',                          //新增舆情
    getSuperviseDetails: '/api/sentiment/info',                     //获取舆情详情
    editSupervise: '/api/sentiment/edit',                           //编辑舆情
    getOperatingFlowByID: '/api/sentiment/getOperatingFlow',        //获取单据
    approveProcessByFlowSn: '/api/sentiment/approve',               //审批流程
    assignDepartment: '/api/sentiment/assign',                      //指派部门
    reAssignDepartment: '/api/sentiment/afreshAssign',              //重新指派部门
    submitSuperviseComment: '/api/sentiment/comment',               //提交舆情评论
    getFlowMsgDetails: '/api/sentiment/flowMsgInfo',                //获取舆情流程记录详情
    getFlowMsgList: '/api/sentiment/flowMsg',                       //获取舆情流程记录列表
    getMySuperviseList: '/api/sentiment/myList',                    //获取我的舆情列表
    addNewSupervise_public: '/api/sentiment/addMasses',             //新增舆情——群众
    getSuperviseDetailsBySn_public: '/api/sentiment/infoMasses',    //获取舆情详情——群众
    getSuperviseCommentDetailsByID: '/api/sentiment/checkComment',  //查看舆情评价详情

    //工单
    getWorkOrderList: '/api/workorder/list',                        //获取工单列表
    getMyWorkOrderList: '/api/workorder/myList',                    //获取我的工单列表
    getWorkerDetails: '/api/workorder/info',                        //获取工单详情
    addNewWorkerOrder: '/api/workorder/add',                        //新增工单
    editWorkerOrder: '/api/workorder/edit',                         //编辑工单
    getWorkOrderOperatingFlow: '/api/workorder/getOperatingFlow',   //获取工单可操作流程
    approveWorkerOrderProcessByFlowSn: '/api/workorder/approve',    //审批工单流程
    assignWorkOrderToDepartment: '/api/workorder/assign',           //指派工单到部门
    reAssignWorkOrderToDepartment: '/api/workorder/afreshAssign',   //重新指派工单到部门
    commentWorkOrder: '/api/workorder/comment',                     //评论工单
    getWorkOrderFlowMsgList: '/api/workorder/flowMsg',              //获取工单流程记录列表
    getWorkOrderFlowMsgDetails: '/api/workorder/flowMsgInfo',       //获取工单流程记录详情
    getWorkOrderComment: '/api/workorder/checkComment',              //获取工单评价

    //流程配置
    getProcessList: '/api/flowconf/list',                           //获取流程配置列表
    addNewProcess: '/api/flowconf/add',                             //新增流程配置
    delProcessItemByID: '/api/flowconf/del',                        //删除流程
    getProcessDetailsByID: '/api/flowconf/info',                    //根据流程id，获取流程详情
    editProcess: '/api/flowconf/edit',                              //编辑流程配置

    //评测管理
    getKpiTemplateList: '/api/kpi/questionMbList',                  //获取KPI评测模板列表
    getKpiTemplateDetailsListByID: '/api/kpi/questionMbMxList',     //获取评测模板明细列表
    addKpiTemplateItem: '/api/kpi/questionMbMxAdd',                 //新增指定模板题目
    getKpiQuestList: '/api/kpi/questionList',                       //获取KPI题库列表
    getUsableQuestionList: '/api/kpi/getUsableQuestionList',        //获取可选题目（带过滤功能，选过的没有了）
    addTemplateItem: '/api/kpi/questionMbMxAdd',                    //新增kpi模板题目item
    getTemplateItemDetails: '/api/kpi/questionMbMxInfo',            //获取kpi模板题目item
    editTemplateItem: '/api/kpi/questionMbMxEdit',                  //编辑模板明细
    delTemplateDetailsItem: '/api/kpi/questionMbMxDel',             //删除模板明细
    editTemplateName: '/api/kpi/questionMbEdit',                    //编辑模板名字
    getTemplateNameDetails: '/api/kpi/questionMbInfo',                    //获取kpi模板名字
    addNewTemplate: '/api/kpi/questionMbAdd',                       //新增模板
    delTemplateItem: '/api/kpi/questionMbDel',                      //删除模板
    dispathTemplate: '/api/kpi/kpiMbAssign',                        //指派模板
    addNewSubject: '/api/kpi/questionAdd',                          //添加新题目
    getTestSubjectCateoryList: '/api/kpi/categoryList',             //获取测试题目分类
    editTestSubject: '/api/kpi/questionEdit',                       //编辑题库题目
    delSubjectHubItem: '/api/kpi/questionDel',                      //删除题库题目
    getSubjectDetails: '/api/kpi/questionInfo',                     //获取kpi题目详情
    addSubjectCatogoryItem: '/api/kpi/categoryAdd',                 //增加题目分类
    editSubjectCatogoryItem: '/api/kpi/categoryEdit',               //增加题目分类
    delSubjectCategoryByID: '/api/kpi/categoryDel',                 //删除题目分类
    getKpiList: '/api/kpi/kpiList',                                 //获取评测列表
    getKpiListDetailsByID: '/api/kpi/kpiInfo',                      //获取评测列表详情
    submitKpiAnswer: '/api/kpi/kpiAnswer',                          //提交kpi答题
    submitKpiMark: '/api/kpi/kpiMarking',                           //提交kpi评测题目

    //值班管理
    getCurrentWatchDutyerInfo: '/api/watch/getWatchInfo',           //获取当前值班人员信息
    setCurrentWatchDutyer: '/api/watch/config',                     //设置当前值班人员
    getWatchUserList: '/api/watch/getWatchUserList',                //获取值班用户列表


    //图文管理
    getInfomationListByType: '/api/cms/list',                   //图文列表
    delInfomationItem: '/api/cms/del',                          //删除图文列表子项
    addInfomationItem: '/api/cms/add',                          //添加图文列表子项
    editInfomationItem: '/api/cms/edit',                        //编辑图文列表子项
                
    getInfomationDetailsByID: '/api/cms/info',                  //根据id获取信息详情


    //风险点
    getRiskPointList: '/api/risk/list',                         //获取风险点列表
    getRiskInfoByID: '/api/risk/info',                         //获取风险点详情
    addRiskPoint: '/api/risk/add',                              //增加风险点
    editRiskPoint: '/api/risk/edit',                            //编辑风险点
    delRiskPoint: '/api/risk/del',                              //删除风险点
    getAssessList: '/api/risk/assessList',                      //反馈信息列表
    addAssess: '/api/risk/assessAdd',                           //添加反馈信息
    editAssess: '/api/risk/assessEdit',                         //编辑反馈信息
    getRiskFlowMsgList: '/api/risk/riskFlowMsgList',            //获取风险点操作流程列表

    //数据看板
    getDashBoard: '/api/databoard/index',                       //获取数据看板
    getdashBoardSentimentList: '/api/databoard/sentimentList',  //获取舆情列表数据
    getdashBoardWorkOrderList: '/api/databoard/workOrderList',  //获取工单列表数据
    getBigScreenData: '/api/databoard/bigScreenIndex',          //获取大屏数据
}

