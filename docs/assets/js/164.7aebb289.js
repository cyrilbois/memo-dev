(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{519:function(s,a,e){"use strict";e.r(a);var t=e(45),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"ubuntu-nvidia"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-nvidia"}},[s._v("#")]),s._v(" ubuntu - nvidia")]),s._v(" "),e("h2",{attrs:{id:"update-drivers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-drivers"}},[s._v("#")]),s._v(" update drivers")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://askubuntu.com/questions/1112814/install-driver-for-gtx-1070",target:"_blank",rel:"noopener noreferrer"}},[s._v("Install driver for GTX 1070?"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("First delete the currently installed drivers.")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" purge nvidia*\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Add sources repo if necessary.")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" add-apt-repository ppa:graphics-drivers\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Update sources.")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("List the availables drivers")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("ubuntu-drivers devices\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" /sys/devices/pci0000:00/0000:00:01.0/0000:01:00.0 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\nmodalias "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" pci:v000010DEd00001B81sv00001462sd00003302bc03sc00i00\nvendor   "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" NVIDIA Corporation\nmodel    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" GP104 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("GeForce GTX "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1070")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ndriver   "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" nvidia-driver-410 - third-party "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v("\ndriver   "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" nvidia-driver-396 - third-party "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v("\ndriver   "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" nvidia-driver-415 - third-party "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" recommended\ndriver   "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" nvidia-driver-390 - third-party "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v("\ndriver   "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" xserver-xorg-video-nouveau - distro "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("builtin")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("Install the recommended drivers.")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nvidia-driver-415\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);