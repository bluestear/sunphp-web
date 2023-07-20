(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{303:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"text-message"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#text-message"}},[s._v("#")]),s._v(" Text Message")]),s._v(" "),t("h2",{attrs:{id:"ali-cloud-sms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ali-cloud-sms"}},[s._v("#")]),s._v(" Ali Cloud SMS")]),s._v(" "),t("ol",[t("li",[s._v("Set cloud SMS parameters in the background")]),s._v(" "),t("li",[s._v("Reference the namespace use sunphp\\sms\\SunSms")]),s._v(" "),t("li",[s._v("Call the send() method")])]),s._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("sunphp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("sms"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("SunSms")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 短信示例 */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[s._v("Sms")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 发送一条短信——阿里云短信 */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("sendAliSms")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$args")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"phoneNumbers"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"+8618871715453"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"templateCode"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"SMS_140665220"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"templateParam"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"{\\"code\\":\\"8888\\"}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "signName" => "自定义签名（可选）"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 第二个参数：1表示阿里云，2表示腾讯云 */")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$res")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("SunSms")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("send")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$args")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$res")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"发送阿里云短信成功"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"发送阿里云短信失败"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"tencent-cloud-sms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tencent-cloud-sms"}},[s._v("#")]),s._v(" Tencent Cloud SMS")]),s._v(" "),t("ol",[t("li",[s._v("Set cloud SMS parameters in the background")]),s._v(" "),t("li",[s._v("Reference the namespace use sunphp\\sms\\SunSms")]),s._v(" "),t("li",[s._v("Call the send() method")])]),s._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("sunphp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("sms"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("SunSms")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 短信示例 */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[s._v("Sms")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 发送一条短信——腾讯云短信 */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("sendTencentSms")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$args")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"PhoneNumberSet"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"+8618871715453"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// * 示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号，最多不要超过200个手机号*/")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"TemplateId"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"1786569"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//模板ID")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"TemplateParamSet"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'123456'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 模板参数: 模板参数的个数需要与 TemplateId 对应模板的变量个数保持一致，若无模板参数，则设置为空*/")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "SmsSdkAppId" => "SDKAppID（可选）",')]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "SignName" => "自定义签名（可选）",')]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "SenderId" => "国内短信无需填写（可选）"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 第二个参数：1表示阿里云，2表示腾讯云 */")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$res")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("SunSms")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("send")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$args")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$res")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"发送腾讯云短信成功"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"发送腾讯云短信失败"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);