(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{295:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"frequently-asked-questions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frequently-asked-questions"}},[t._v("#")]),t._v(" Frequently Asked Questions")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Before you ask, check out the FAQ below.")])]),t._v(" "),s("h2",{attrs:{id:"session-start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session-start"}},[t._v("#")]),t._v(" session_start()")]),t._v(" "),s("h3",{attrs:{id:"app-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-module"}},[t._v("#")]),t._v(" /app/ module")]),t._v(" "),s("ol",[s("li",[t._v("thinkphp6 does not support manipulating the native $"),s("em",[t._v("SESSION array and all functions starting with session")])]),t._v(" "),s("li",[t._v("It can only be operated by the Session class (or helper functions)")]),t._v(" "),s("li",[t._v("session data is written uniformly when the current request ends. Therefore, do not execute exit after the Session data is written.")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("user think\\facade\\Session"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Session")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'thinkphp'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Session")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"addons-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addons-module"}},[t._v("#")]),t._v(" /addons/ module")]),t._v(" "),s("ol",[s("li",[t._v("session_start() If repeated startup errors occur, modify the error as follows\nThe session_start() method is replaced with if(! session_id())session_start();")]),t._v(" "),s("li",[t._v("Get into the habit of calling session_commit() manually;")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("session_start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Logical operation XXX")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("session_commit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"php-eol-error-in-template"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php-eol-error-in-template"}},[t._v("#")]),t._v(" PHP_EOL error in template")]),t._v(" "),s("ol",[s("li",[t._v("The Thinkphp6 template renders PHP_EOL incorrectly")]),t._v(" "),s("li",[t._v('You can replace PHP_EOL with "\\n", using double quotation marks')])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("!")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("--")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("{php}echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("PHP_EOL{php}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n{php}echo "\\n"{/php}\n'),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);