(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{101:function(a,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return m}));var t=n(0),r=n.n(t);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function c(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function b(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function l(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var p=r.a.createContext({}),u=function(a){var e=r.a.useContext(p),n=e;return a&&(n="function"==typeof a?a(e):b(b({},e),a)),n},o=function(a){var e=u(a.components);return r.a.createElement(p.Provider,{value:e},a.children)},s={inlineCode:"code",wrapper:function(a){var e=a.children;return r.a.createElement(r.a.Fragment,{},e)}},d=r.a.forwardRef((function(a,e){var n=a.components,t=a.mdxType,i=a.originalType,c=a.parentName,p=l(a,["components","mdxType","originalType","parentName"]),o=u(n),d=t,m=o["".concat(c,".").concat(d)]||o[d]||s[d]||i;return n?r.a.createElement(m,b(b({ref:e},p),{},{components:n})):r.a.createElement(m,b({ref:e},p))}));function m(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var i=n.length,c=new Array(i);c[0]=d;var b={};for(var l in e)hasOwnProperty.call(e,l)&&(b[l]=e[l]);b.originalType=a,b.mdxType="string"==typeof a?a:t,c[1]=b;for(var p=2;p<i;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return b})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return u}));var t=n(3),r=n(7),i=(n(0),n(101)),c={id:"become-validator",title:"Menjadi Validator",sidebar_label:"Menjadi Validator"},b={unversionedId:"learn/become-validator",id:"learn/become-validator",isDocsHomePage:!1,title:"Menjadi Validator",description:"Untuk menjadi validator pastikan Anda telah memiliki akun Nuchain terlebih dahulu, cara membuat akun",source:"@site/docs/learn/become-validator.md",sourceDirName:"learn",slug:"/learn/become-validator",permalink:"/docs/learn/become-validator",editUrl:"https://github.com/nusantarachain/wiki/edit/master/docs/learn/become-validator.md",version:"current",sidebar_label:"Menjadi Validator",frontMatter:{id:"become-validator",title:"Menjadi Validator",sidebar_label:"Menjadi Validator"},sidebar:"tutorialSidebar",previous:{title:"Apa itu Validator",permalink:"/docs/learn/validator-basic"},next:{title:"Menggunakan Docker",permalink:"/docs/learn/docker"}},l=[{value:"Memasang Nuchain Node",id:"memasang-nuchain-node",children:[]},{value:"Hubungkan",id:"hubungkan",children:[]},{value:"Mengajukan Sebagai Validator",id:"mengajukan-sebagai-validator",children:[]},{value:"Tips",id:"tips",children:[]}],p={toc:l};function u(a){var e=a.components,n=Object(r.a)(a,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Untuk menjadi validator pastikan Anda telah memiliki akun Nuchain terlebih dahulu, cara membuat akun\nbisa baca ",Object(i.b)("a",{parentName:"p",href:"/docs/learn/account"},"di sini"),"."),Object(i.b)("h2",{id:"memasang-nuchain-node"},"Memasang Nuchain Node"),Object(i.b)("p",null,"Anda bisa memasang Nuchain node di server/komputer Anda dengan cara mengkompilasi kode sumber dari\n",Object(i.b)("inlineCode",{parentName:"p"},"master")," ",Object(i.b)("em",{parentName:"p"},"branch")," di ",Object(i.b)("a",{parentName:"p",href:"https://github.com/nusantarachain/nuchain"},"repository")," atau download\n",Object(i.b)("em",{parentName:"p"},"pre-built binary"),"-nya di halaman ",Object(i.b)("a",{parentName:"p",href:"https://github.com/nusantarachain/nuchain/releases"},"releases"),"."),Object(i.b)("p",null,"Jika ingin memasang dari kode sumber bisa ikuti langkah-langkah\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/nusantarachain/nuchain/blob/master/README.md#dari-kode-sumber"},"pasang dari kode sumber"),"."),Object(i.b)("p",null,"Setelah Anda ",Object(i.b)("em",{parentName:"p"},"download")," dari halaman ",Object(i.b)("a",{parentName:"p",href:"https://github.com/nusantarachain/nuchain/releases"},"releases"),"\nextract/unzip file zip-nya, contoh:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ unzip nuchain-0.1.3-3cb5203af-linux.zip\n")),Object(i.b)("p",null,"Jalankan:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ ./nuchain --validator\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"CATATAN:")," Jalankan Nuchain sebagai service agar apabila komputer mati/restart bisa jalan lagi\nsecara otomatis."),Object(i.b)("p",null,"Cara lain tercepat untuk dapat menjalankan Nuchain node adalah dengan menggunakan\n",Object(i.b)("a",{parentName:"p",href:"https://docker.com/"},"Docker"),", baca caranya ",Object(i.b)("a",{parentName:"p",href:"/docs/learn/docker"},"di sini"),"."),Object(i.b)("h2",{id:"hubungkan"},"Hubungkan"),Object(i.b)("p",null,"Anda perlu menghubungkan akun Anda dengan mesin validator sehingga sistem Nuchain mengetahui kemana\n",Object(i.b)("em",{parentName:"p"},"rewards")," akan diberikan dari hasil kerja mesin validator tersebut. Berikut adalah cara\nmenghubungkan akun Nuchain dengan mesin validator:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Dapatkan session key dari mesin validator kita yang sudah jalan:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'curl -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}\' http://localhost:9933\n')),Object(i.b)("p",null,"Output kurang lebih seperti berikut:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{"jsonrpc":"2.0","result":"0x2320085170b06281aedc2df4296d7b5042abcef201c57f2e55201f7aefc6af0c5ac19e74b674cb97913d54d63255dc18fbe88ad73392576130e00803c7082716147a5768a1c7f8708379649c0c9246b049699109c94b7d8957ebb813af62620464a70e69288323168afd69358746d684fc178eefac06aa9e94028a0f409a6d1a","id":1}\n')),Object(i.b)("p",null,"Kopi teks heksa yang panjang pada ",Object(i.b)("em",{parentName:"p"},"field")," ",Object(i.b)("em",{parentName:"p"},"result")," yang diawalai dengan ",Object(i.b)("inlineCode",{parentName:"p"},"0x..."),", teks tersebut\nadalah session key yang nantinya perlu dimasukkan pada tahap pendaftaran/pengajuan menjadi\nvalidator."),Object(i.b)("h2",{id:"mengajukan-sebagai-validator"},"Mengajukan Sebagai Validator"),Object(i.b)("p",null,"Untuk mengajukan diri sebagai validator masuk ke ",Object(i.b)("a",{parentName:"p",href:"https://nuchain.riset.tech"},"Nuchain Dashboard"),"\nlalu menuju ke menu ",Object(i.b)("strong",{parentName:"p"},"Network")," > ",Object(i.b)("strong",{parentName:"p"},"Staking")," > ",Object(i.b)("strong",{parentName:"p"},"Account actions"),' kemudian klik tombol "',Object(i.b)("strong",{parentName:"p"},"+\nValidator"),'":'),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/Gr1SNgD.png",alt:"Nuchain Validator"})),Object(i.b)("p",null,"Isi data yang diperlukan untuk proses ",Object(i.b)("em",{parentName:"p"},"Staking")," kemudian klik tombol ",Object(i.b)("strong",{parentName:"p"},"next"),"."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Paste")," teks heksa yang panjang tadi --yang didapatkan dari langkah sebelumnya-- ke dalam input\n",Object(i.b)("em",{parentName:"p"},"Keys from rotateKeys"),":"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/pqUCE6X.png",alt:"Set Session Key"})),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"rewards commission percentage")," bisa diisi 100% untuk mendapatkan seluruh ",Object(i.b)("em",{parentName:"p"},"rewards")," untuk diri\nsendiri (tidak termasuk ",Object(i.b)("em",{parentName:"p"},"nominator"),")."),Object(i.b)("p",null,"Apabila ada kesulitan bisa tanya-tanya di grup\n",Object(i.b)("a",{parentName:"p",href:"https://app.element.io/#/room/!aYWUxhUvutqbMBQIsN:matrix.org"},"Element")," atau\n",Object(i.b)("a",{parentName:"p",href:"https://t.me/nusantarachain"},"Telegram")),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("p",null,"Ketika menjadi validator baru untuk pertama kali maka ",Object(i.b)("em",{parentName:"p"},"node")," akan melakukan proses singkronisasi,\nproses ini akan memakan waktu yang lumayan lama ketika blok sudah sangat banyak, untuk mempercepat\nproses singkronisasi Anda bisa download ",Object(i.b)("em",{parentName:"p"},"presync")," data berikut:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://dmcd6hvaqrxz0.cloudfront.net/nuchain/presync-data/nuchain-snapshot-2021-05-09.7z"},"Nuchain Data 9 Mei 2021 full"),"\n(6GB)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://dmcd6hvaqrxz0.cloudfront.net/nuchain/presync-data/nuchain-snapshot-20210421-full-rocks.7z"},"Nuchain Data 14 April 2021 full"),"\n(2GB)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://dmcd6hvaqrxz0.cloudfront.net/nuchain/presync-data/nuchain-snapshot-20210521-pruning1000-rocks.7z"},"Nuchain Data 21 Mei 2021 pruning 1000"),"\n(993M)")),Object(i.b)("p",null,"Extract menggunakan ",Object(i.b)("a",{parentName:"p",href:"https://www.7-zip.org/"},"7zip")," dan arahkan ",Object(i.b)("em",{parentName:"p"},"Nuchain node")," ke data tersebut\nmenggunakan parameter ",Object(i.b)("inlineCode",{parentName:"p"},"--base-path"),"."))}u.isMDXComponent=!0}}]);