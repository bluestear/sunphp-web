(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{326:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"微信小程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序"}},[t._v("#")]),t._v(" 微信小程序")]),t._v(" "),s("h2",{attrs:{id:"获取openid信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取openid信息"}},[t._v("#")]),t._v(" 获取openid信息")]),t._v(" "),s("ol",[s("li",[t._v("引入命名空间 use sunphp\\account\\SunAccount;")]),t._v(" "),s("li",[t._v("调用session()方法既可")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 获取用户的openid */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("getOpenid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$code")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"小程序前端获取的code"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$account")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("SunAccount")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$account")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("session")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$code")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取到的数据格式如下")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $data=[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     'openid'=>\"获取到的用户openid\",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     'session_key'=>\"获取到的session值\",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ];")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"更多功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更多功能"}},[t._v("#")]),t._v(" 更多功能")]),t._v(" "),s("ol",[s("li",[t._v("获取"),s("a",{attrs:{href:"https://easywechat.com/5.x/mini-program/subscribe_message.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("easywechat"),s("OutboundLink")],1),t._v("的app对象，从而使用全部的接口功能")]),t._v(" "),s("li",[t._v("5.x文档地址：https://easywechat.com/5.x/mini-program/subscribe_message.html")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("getApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$app")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("SunAccount")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自行编写功能，如：发送小程序订阅消息")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $data = [")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     'template_id' => 'bDmywsp2oEHjwAadTGKkUJ-eJEiMiOf7H-dZ7wjdw80', // 所需下发的订阅模板id")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     'touser' => 'oSyZp5OBNPBRhG-7BVgWxbiNZm',     // 接收者（用户）的 openid")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     'page' => '',       // 点击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数,（示例index?foo=bar）。该字段不填则模板无跳转。")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//     \'data\' => [         // 模板内容，格式形如 { "key1": { "value": any }, "key2": { "value": any } }')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         'date01' => [")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//             'value' => '2019-12-01',")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         ],")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         'number01' => [")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//             'value' => 10,")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         ],")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     ],")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ];")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $app->subscribe_message->send($data);")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);