const Router = require('koa-router');
let router = new Router();
const koaBody = require('koa-body')({
  multipart: true,  // 允许上传多个文件
});


let id = 3

/*
指标参数
agent_type：代理类型
backend_type：后台类型
* */
let metrics = [
  {
    type: 'system',
    metrics: [
      {
        agent_type: "counter",
        backend_type: "counter",
        counted: true,
        id: 28,
        labels: ["ens32", "lo", "ens32", "ens32", "lo", "lo"],
        measurement_class: {default: "integer", rate: "double"},
        method: "sum",
        name: "system.net.packets_in.count",
        source: "psutil",
        visible: true
      }
    ]
  }
];


/*单位*/

let units = [
  {
    name: "bytes_usage",
    base: "bytes",
    axis: [
      {
        unit: "bytes", divider: 1, precision: 0, border: 1024
      },
      {
        unit: "KB", divider: 1024, precision: 2, border: 1024
      },
      {
        unit: "MB", divider: 1048576, precision: 2, border: 1024
      },
      {
        unit: "GB", divider: 1073741824, precision: 2, border: 1024
      }
    ],
    points: [
      {
        unit: "bytes", divider: 1, precision: 0, border: 1024
      },
      {
        unit: "KB", divider: 1024, precision: 2, border: 1024
      },
      {
        unit: "MB", divider: 1048576, precision: 2, border: 1024
      },
      {
        unit: "GB", divider: 1073741824, precision: 2, border: 1024
      }
    ]
  }
]

/*
* 行为
* ctime:标准时间
* mtime：最后修修改时间
* */
let custom = [
  {
    id: 1,
    ctime: 1557901583,
    mtime: 1571795897,
    name: "Untitled dashboard (8/12 上午11:20:38)",
    data: {
      settings: {timeWindow: "1h"},
      widgets: {}
    }
  }
]

/*
* 电子邮件*/
let emails = [
  {
    account_id: 1,
    ctime: 1557901479,
    email: "tosof.tao@gmail.com",
    id: 1,
    internal: true,
    mtime: 1557901479,
    verified: false
  }
]


/*图表*/

let graphs = [
  {
    aggr: "avg",
    comb: "avg",
    displayName: "system.cpu.system",
    from: 1571794200000,
    granularity: "1m",
    name: "system.cpu.system",
    query: "system.cpu.system",
    queryId: 41,
    timeseries: [[1571794260000, 0.1], [1571794320000, 0.1], [1571794380000, 0.1], [1571794440000, 0.1]],
    to: 1571797800000
  }
]

/*参数请求*/
let values = [
  {
    aggr: "avg",
    comb: "avg",
    displayName: "system.cpu.idle",
    from: 1571801460000,
    name: "system.cpu.idle",
    query: "system.cpu.idle",
    queryId: 1,
    to: 1571801520000,
    value: null
  }
]

/*所有信息*/
let alltrue = [
  {
    account_id: 1,
    agent: "1.7.0_1",
    agent_version_status: "latest",
    children: [],
    ctime: 1558592882,
    custom_meta: {},
    definition: {
      local_id: "151d8728e792f42e129337573a21bb30ab3065d59102f075efc2ded28e713ff8",
      root_uuid: "e0ff70f92f8b5012aa133320b09f5540",
      type: "nginx"
    },
    definition_hash: "84c5e31c8a94f6c9728e91bcf01e11d98d558e9a3ce50cd88a8288e93f121b5e",
    id: 10,
    last_seen: 1571881875,
    meta: {
      agent: "1.7.0_1",
      built_from_source: false,
      add_dynamic_module: [],
      conf_path: "/etc/nginx/nginx.conf",
      error_log_path: "/var/log/nginx/error.log",
      http_client_body_temp_path: "/var/lib/nginx/body",
      http_fastcgi_temp_path: "/var/lib/nginx/fastcgi",
      http_log_path: "/var/log/nginx/access.log",
      http_proxy_temp_path: "/var/lib/nginx/proxy",
      http_scgi_temp_path: "/var/lib/nginx/scgi",
      http_uwsgi_temp_path: "/var/lib/nginx/uwsgi",
      lock_path: "/var/lock/nginx.lock",
      modules_path: "/usr/lib/nginx/modules",
      pid_path: "/run/nginx.pid",
      prefix: "/usr/share/nginx",
      with_cc_opt: "'_g _O2 _fdebug_prefix_map=/build/nginx_0TiIP5/nginx_1.10.3=. _fstack_protector_strong _Wformat _Werror=format_security _Wdate_time _D_FORTIFY_SOURCE=2'",
      with_debug: true,
      with_http_addition_module: true,
      with_http_auth_request_module: true,
      with_http_dav_module: true,
      with_http_geoip_module: "dynamic",
      with_http_gunzip_module: true,
      with_http_gzip_static_module: true,
      with_http_image_filter_module: "dynamic",
      with_http_realip_module: true,
      with_http_slice_module: true,
      with_http_ssl_module: true,
      with_http_stub_status_module: true,
      with_http_sub_module: true,
      with_http_v2_module: true,
      with_http_xslt_module: "dynamic",
      with_ipv6: true,
      with_ld_opt: "'_Wl,_z,relro _Wl,_z,now'",
      with_mail: "dynamic",
      with_mail_ssl_module: true,
      with_pcre_jit: true,
      with_stream: "dynamic",
      with_stream_ssl_module: true,
      with_threads: true
    },
    display_name: "nginx 1.10.3 @ nginx-TG",
    extended_metrics: false,
    local_id: "151d8728e792f42e129337573a21bb30ab3065d59102f075efc2ded28e713ff8",
    packages: {nginx_full: "1.10.3-1+deb9u2"},
    parent_hostname: "nginx-TG",
    path: {bin: "/usr/sbin/nginx", conf: "/etc/nginx/nginx.conf"},
    pid: 487,
    plus: {release: null, enabled: false},
    plus_status_url: null,
    root_uuid: "e0ff70f92f8b5012aa133320b09f5540",
    running: true,
    ssl:{
      built: ["OpenSSL", "1.1.0f", "25 May 2017"],
      run: ["OpenSSL", "1.1.0j", "20 Nov 2018"],
      start_time: 1571740589000,
      status_module_enabled: false,
      stub_status_enabled: true,
      stub_status_url: "http://127.0.0.1:80/nginx_status",
      type: "nginx",
      version: "1.10.3"
    },
    mtime: 1571881875,
    muted: false,
    parent_id: 9,
    settings: {},
    status: "ONLINE",
    tags: [],
    type: "nginx",
  }
]

/*时段请求*/
let period = [
  {
    profile: "default",
    root_objects: 4,
    score: 75,
    tags: [],
    title: "Application Health Score",
    breakdown: [
      {
        enabled: true,
        high: 2,
        low: 0.5,
        metric: "nginx.http.request.time.pctl95",
        score: null,
        value: 0
      }
    ]
  }
]


/*分析请求*/
let Analyzer =[
  {
    dynamic_analysis: {},
    overview:{
      addresses: {counts: {total: 0, ipv4: 0, ipv6: 0}},
      checksum: "fbc80a0f8ff447e8801119b9163672339a8fa3abf61b4cb05e90314498797dab",
      created: 1570603376,
      directory_map:{
        '/etc/nginx/':{
          files:{
            '/etc/nginx/mime.types': {info: {size: 3957, mtime: 1541569242, lines: 89, permissions: "0644", index: 11}},
            info: {size: 3957, mtime: 1541569242, lines: 89, permissions: "0644", index: 11}
          },
          info:{
            info: {size: 4096, mtime: 1570603365, permissions: "0755"}
          }
        },
      },
      dynamic_modules:[],
      errors: {test: 0, parser: 0},
      files:{
        '/etc/nginx/mime.types':{
          index: 11,
          lines: 89,
          mtime: 1541569242,
          permissions: "0644",
          size: 3957
        }
      },
      ip_ports: ["*:80"],
      listens: {counts: {ssl: 0, http2: 0, http2_ssl: 0, total: 1}},
      locations: {counts: {total: 2, exact: 0, prefix: 2, regex: 0}},
      logs_data:{
        access_logs: [{dirname: "/var/log/nginx", basename: "access.log", permissions: "0640", log_format: "main"}],
        error_logs: [{dirname: "/var/log/nginx", basename: "error.log", permissions: "0640", log_level: "error"}],
        logs_parsed: true,
        modified: 1571899363
      },
      nginx_version: {version: "1.10.3", date: 1485820800000, branch: "stable", age: 86078563000, latest: "1.14.0"},
      path: "/etc/nginx/nginx.conf",
      plus_version: {},
      server_info: [{listen: ["*:80"], server_name: [], where: ["/etc/nginx/sites-enabled/default", 1]}],
      server_names: {counts: {total: 0, exact: 0, wildcard: 0, regex: 0}},
      servers: {counts: {total: 1, uniq_names: 0}},
      ssl: {run: ["OpenSSL", "1.1.0j", "20 Nov 2018"], built: ["OpenSSL", "1.1.0f", "25 May 2017"]},
      third_party_modules: [],
      upstreams: {counts: {total: 0}},
    },
    security_analysis:{
      security_advisories:{
        advisory: [{name: "CVE-2017-7529", url: "http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-7529"}],
        description: "Integer overflow in the range filter",
        not_vulnerable: ["1.13.3+", "1.12.1+"],
        severity: "medium",
        vulnerable: [{from: "0.5.6", to: "1.13.2"}]
      }
    },
    ssl_analysis: {},
    ssl_overview: {},
    static_analysis:{
      error_log:[
        {
          code: 25,
          directive: "error_log",
          problem: "missing error_log in config in the main context",
          where: [["/etc/nginx/nginx.conf", 1, ""]]
        }
      ],
      missing_default_conf:[],
      proxy_pass:[],
      server_name:[]
    }
  }
]

/*角色信息*/
let rules=[
  {
    alert_started: null,
    alerts_count: 0,
    ctime: 1568258916,
    id: 1,
    last_check: null,
    method: "avg",
    metric_id: 186,
    metric_name: "controller.agent.cpu.user",
    mtime: 1568258947,
    muted: false,
    notify_contact: "tosof.tao@gmail.com",
    notify_type: "email",
    objects: {parent_objects: [5], tags: [], objects: []},
    operator: ">",
    period: "10m",
    threshold: 10,
    threshold_unit: "%",
    user_email: "tosof.tao@gmail.com",
    user_id: 1
  }
]

/*蓝图*/
let blueprints=[
  {
    account_id: 1,
    actual_blueprint_id: 28,
    ctime: 1558592942,
    latest_blueprint_id: 28,
    mtime: 1570603376,
    object_id: 10,
    rollback_allowed: false
  }
]

/*用户信息*/
let users=[
  {
    account_id: 1,
    authn: "amplify",
    email: "tosof.tao@gmail.com",
    first_name: "Tosof",
    icom_hash: "a76799f74ac2ffc272307ca38b0ad535d78f5c13421a4ef95b01f3d73b747e56",
    id: 1,
    last_login: 1571880048,
    last_name: "Tao",
    role: {level: 1, name: "Admin"},
  }
]

/*邀请信息*/
let invite=[
  {
    account_id: 1,
    code: "e098f2c3d693e772b0d787e75e759aa35cc7633f1a1a888dcc09424d9c532641",
    ctime: 1568965990,
    email: "guotao.zhang@wingsbro.com",
  }
]

/*配置信息*/
let configs=[
  {
    category_description: "Agent events and errors",
    category_id: 2,
    category_name: "agent",
    mtime: null,
    muted: false,
    transports: {ui: 0}
  }
]

/*产品许可信息*/
let license=[
  {
    active: true,
    data:{
      days_until_expiry: 33,
      description: null,
      expiry_date: 1574724303,
      limits: 30,
      product: "NGINX Controller",
      serial: "144",
      subscription: "A-S00077095",
      type: "production",
      valid: true,
      version: "1"
    },
    id: 3,
    product_name: "controller"
  }
]

let data2 =[
    {
      name: 'john',
      id: 123,
      tel: 'test'
    },
  {
    name: 'john3',
    id: 1233,
    tel: 'test3'
  }
];
let data3=[
  {
    sysname: "nginx-TG1",
    sysaliasname: "nginx 1.10.3"
  },
  {
    sysname: "nginx-TG2",
    sysaliasname: "nginx 1.10.4"
  },
  {
    sysname: "nginx-TG3",
    sysaliasname: "nginx 1.10.5"
  },
  {
    sysname: "nginx-TG4",
    sysaliasname: "nginx 1.10.6"
  },
  {
    sysname: "nginx-TG5",
    sysaliasname: "nginx 1.10.7"
  }
]
router.get('/contactList', async (ctx) => {
  ctx.body = {
    code: 200,
    data: data2
  }
});

router.get('/sidelist', async (ctx) => {
  ctx.body = {
    code: 200,
    data: data3
  }
});



router.get('/metrics', async (ctx) => {
  ctx.body = {
    status: 200,
    data: metrics
  }
});


router.get('/units', async (ctx) => {
  ctx.body = {
    status: 200,
    data: units
  }
});
router.get('/custom', async (ctx) => {
  ctx.body = {
    status: 200,
    data: custom
  }
});

router.get('/graphs', async (ctx) => {
  ctx.body = {
    status: 200,
    data: custom
  }
});
router.get('/values', async (ctx) => {
  ctx.body = {
    status: 200,
    data: custom
  }
});

router.get('/alltrue', async (ctx) => {
  ctx.body = {
    status: 200,
    data: alltrue
  }
});
router.get('/period', async (ctx) => {
  ctx.body = {
    status: 200,
    data: period
  }
});
router.get('/Analyzer', async (ctx) => {
  ctx.body = {
    status: 200,
    data: Analyzer
  }
});
router.get('/rules', async (ctx) => {
  ctx.body = {
    status: 200,
    data: rules
  }
});
router.get('/blueprints', async (ctx) => {
  ctx.body = {
    status: 200,
    data: blueprints
  }
});
router.get('/users', async (ctx) => {
  ctx.body = {
    status: 200,
    data: users
  }
});
router.get('/invite', async (ctx) => {
  ctx.body = {
    status: 200,
    data: invite
  }
});
router.get('/configs', async (ctx) => {
  ctx.body = {
    status: 200,
    data: configs
  }
});router.get('/license', async (ctx) => {
  ctx.body = {
    status: 200,
    data: license
  }
});



function getQueryVariable(url, variable) {
  var query = url.split('?')[1];
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return (false);
}

//form_data
router.post('/contact/new/form', koaBody, async (ctx) => {
  let newData = ctx.request.body
  console.log(newData)
  id++
  newData.id = id
  data.push(newData)
  ctx.body = {
    code: 200,
    data: newData
  }
});
router.post('/contact/new/json', async (ctx) => {
  
  let pattern = /(\w+)=(\w+)/ig;//定义正则表达式
  let parames = {};//定义数组
  ctx.request.url.replace(pattern, function (a, b, c) {
    parames[b] = c;
  });
  console.log(ctx.request.url);
  console.log(parames);
  if (parames.ngCode === '1') {
    ctx.body = {
      code: 200,
      data: data
    }
  }
});
router.put('/contact/edit', async (ctx) => {
  let newData = ctx.request.body
  console.log(newData)
  data.map((item, index) => {
    if (item.id == newData.id) {
      data[index] = newData
    }
  })
  console.log(data)
  ctx.body = {
    code: 200,
    data: newData
  }
});
router.patch('/contact/edit', async (ctx) => {
  let newData = ctx.request.body
  console.log(newData)
  data.map((item, index) => {
    if (item.id == newData.id) {
      data[index] = newData
    }
  })
  console.log(data)
  ctx.body = {
    code: 200,
    data: newData
  }
});
router.del('/contact', async (ctx) => {
  let id = getQueryVariable(ctx.request.url, 'id')
  data = data.filter(item => item.id != id)
  console.log(id)
  ctx.body = {
    code: 200,
    message: '删除成功'
  }
});
router.get('/longtime', async (ctx) => {
  let query = () => {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve('请求成功');
      }, 5000)
    })
  }
  let result = await query();
  ctx.body = {
    code: 200,
    message: result
  }
});
module.exports = router;
