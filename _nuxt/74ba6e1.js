(window.webpackJsonp=window.webpackJsonp||[]).push([[13,6],{411:function(e,t,r){var content=r(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("7939b300",content,!0,{sourceMap:!1})},412:function(e,t,r){"use strict";r.r(t);r(28),r(4),r(418),r(45),r(419),r(420),r(421),r(422),r(423),r(424),r(425),r(426),r(427),r(428),r(429),r(430),r(431),r(432),r(433),r(434),r(46),r(61),r(131),r(11),r(12),r(272);var n={props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},titleIcon:{type:String,default:""},progresoTitle:{type:String,required:!0},dbName:{type:String,required:!0},materiasProp:{type:Array,required:!0},horasElectivasProp:{type:Number,default:44}},data:function(){return{data:this.materiasProp,cantMateriasAprobadas:0,totalHorasElectivas:0,progresoTotal:0,totalHorasSemanales:0,promedioTotal:0,"años":new Set(this.materiasProp.map((function(e){return e.ano}))),cuatrimestres:new Set(this.materiasProp.map((function(e){return e.cuatrimestre})))}},methods:{getColor:function(e){return"APROBADA"===e?"success":"REGULAR"===e?"warning":"CURSANDO"===e?"primary":void 0},progreso:function(e){var t=0,r=0;e.find((function(e){return"99"===e.id}))&&(r=e.find((function(e){return"99"===e.id})).horas/32),e.filter((function(e){return!0!==e.electiva&&"99"!==e.id})).map((function(e){return parseInt(e.horas)})).forEach((function(e){return t+=e}));var n=0;e.filter((function(e){return!0!==e.electiva&&"APROBADA"===e.estado&&"99"!==e.id})).map((function(e){return parseInt(e.horas)})).forEach((function(e){return n+=e}));var o=this.totalHorasElectivas>this.horasElectivasProp?this.horasElectivasProp:this.totalHorasElectivas,l=t+r+this.horasElectivasProp;e.find((function(e){return"99"===e.id}))&&"APROBADA"===e.find((function(e){return"99"===e.id})).estado&&(n+=r),this.progresoTotal=((n+o)/l*100).toFixed(2)},cantidadMateriasAprobadas:function(e){this.cantMateriasAprobadas=e.filter((function(e){return"APROBADA"===e.estado})).length},horasElectivas:function(e){var t=this;this.totalHorasElectivas=0,e.filter((function(e){return"APROBADA"===e.estado&&!0===e.electiva})).forEach((function(e){t.totalHorasElectivas=parseInt(e.horas)+t.totalHorasElectivas}))},horasSemanales:function(e){var t=this;this.totalHorasSemanales=0,e.filter((function(e){return"CURSANDO"===e.estado})).forEach((function(e){t.totalHorasSemanales=parseInt(e.horas)+t.totalHorasSemanales}))},materiasRegulares:function(e){var t=this,r=[];return e.paraCursar.necesitaRegular.forEach((function(element){r.push(t.data.find((function(e){return e.id===element})))})),r},materiasAprobadas:function(e){var t=this,r=[];return e.paraCursar.necesitaAprobada.forEach((function(element){r.push(t.data.find((function(e){return e.id===element})))})),r},estaAprobada:function(e){return"APROBADA"===e.estado},materiasRegularesHabilitadas:function(e){return!!this.materiasRegulares(e).map((function(e){return e.estado})).every((function(e){return"REGULAR"===e||"APROBADA"===e}))},promedio:function(e){if(e.length){this.promedioTotal=0;var t=0,r=e.filter((function(e){return"APROBADA"===e.estado&&null!==e.nota})).map((function(e){return parseInt(e.nota)}));r.forEach((function(e){return t+=e}));var n=t/(r.length?r.length:1);this.promedioTotal=n.toFixed(2)}},materiasAprobadasHabilitadas:function(e){var t=this.materiasAprobadas(e).map((function(e){return e.estado})).every((function(e){return"APROBADA"===e}));return!!t},cambiarEstadoMateria:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.data.find((function(t){return t.id===e})).nota=r,this.data.find((function(t){return t.id===e})).estado=t,localStorage.setItem(this.dbName,JSON.stringify(this.data)),this.data=JSON.parse(localStorage.getItem(this.dbName)),this.actualizarEstadisticas(this.data)},"aprobarAño":function(e){this.data.filter((function(t){return t.ano===e})).forEach((function(e){return e.estado="APROBADA"})),localStorage.setItem(this.dbName,JSON.stringify(this.data)),this.data=JSON.parse(localStorage.getItem(this.dbName)),this.actualizarEstadisticas(this.data)},getButtonColor:function(e){if(this.data.filter((function(t){return t.ano===e})).every((function(e){return"APROBADA"===e.estado})))return"success"},actualizarEstadisticas:function(e){this.cantidadMateriasAprobadas(e),this.horasElectivas(e),this.horasSemanales(e),this.progreso(e),this.promedio(e)},materias:function(e,t){return this.data.filter((function(r){return r.ano===e&&r.cuatrimestre===t}))}},mounted:function(){localStorage.getItem(this.dbName)?this.data=JSON.parse(localStorage.getItem(this.dbName)):localStorage.setItem(this.dbName,JSON.stringify(this.data)),this.cantMateriasAprobadas=this.data.filter((function(e){return"APROBADA"===e.estado})).length,this.actualizarEstadisticas(this.data)}},o=n,l=(r(413),r(91)),c=r(132),A=r.n(c),d=r(270),f=r(455),m=r(408),v=r(456),E=r(504),R=r(407),S=r(505),D=r(506),h=r(507),C=r(508),I=r(402),O=r(187),_=r(509),P=r(510),N=r(458),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-card-text",[r("p",{staticClass:"headline"},[r("v-icon",[e._v(e._s(e.titleIcon))]),e._v("\n      "+e._s(e.title)+"\n    ")],1),e._v(" "),r("p",{staticClass:"subtitle-1"},[e._v("\n      "+e._s(e.subtitle)+"\n    ")])]),e._v(" "),r("v-row",e._l(e.años,(function(t,i){return r("v-col",{key:i,attrs:{cols:"12",sm:"6",md:"4",xl:"3"}},[r("v-card",[r("v-card-title",[e._v("\n          "+e._s(t)+"° Año\n          "),r("v-btn",{staticStyle:{"margin-left":"10px"},attrs:{small:"",color:e.getButtonColor(t),icon:""},on:{click:function(r){e.aprobarAño(t)}}},[r("v-icon",[e._v("mdi-check")])],1)],1),e._v(" "),r("v-card-text",e._l(e.cuatrimestres,(function(n,i){return e.materias(t,n).length?r("div",{key:i},["0"===n?r("v-subheader",[e._v("Anual")]):e._e(),e._v(" "),"1"===n?r("v-subheader",[e._v("Primer Cuatrimestre")]):e._e(),e._v(" "),"2"===n?r("v-subheader",[e._v("Segundo Cuatrimestre")]):e._e(),e._v(" "),r("div",{staticStyle:{margin:"5px"}},[r("v-expansion-panels",{attrs:{focusable:""}},e._l(e.materias(t,n),(function(t,i){return r("v-expansion-panel",{key:i},[r("v-expansion-panel-header",{attrs:{color:e.getColor(t.estado)},scopedSlots:e._u([e.materiasAprobadasHabilitadas(t)&&e.materiasRegularesHabilitadas(t)?null:{key:"actions",fn:function(){return[r("v-icon",{attrs:{color:"error"}},[e._v(" mdi-alert-circle ")])]},proxy:!0}],null,!0)},[r("v-row",[r("v-col",[e._v("\n                        "+e._s(t.nombre)+"\n                        "),[t.integradora?r("v-chip",{attrs:{"x-small":""}},[e._v("\n                            INTEGRADORA\n                          ")]):e._e()],e._v(" "),[t.electiva?r("v-chip",{attrs:{"x-small":""}},[e._v("\n                            ELECTIVA\n                          ")]):e._e()],e._v(" "),[t.optativa?r("v-chip",{attrs:{"x-small":""}},[e._v("\n                            OPTATIVA\n                          ")]):e._e()]],2),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("strong",[e._v(e._s(t.horas)+" hs")])])],1)],1),e._v(" "),r("v-expansion-panel-content",[t.paraCursar.necesitaRegular.length||t.paraCursar.necesitaAprobada.length?r("v-container",[r("v-expansion-panels",[r("v-expansion-panel",[r("v-expansion-panel-header",[e._v("Para cursar necesito\n                          ")]),e._v(" "),r("v-expansion-panel-content",[t.paraCursar.necesitaRegular.length?r("div",[r("v-card-subtitle",{staticStyle:{color:"orangered"}},[e._v("Regulares")]),e._v(" "),r("v-card-text",e._l(e.materiasRegulares(t),(function(t,i){return r("p",{key:i},[r("small",[e._v("\n                                    "+e._s(t.nombre)+"\n                                    "),[r("v-chip",{attrs:{"x-small":"",color:e.getColor(t.estado)}},[e._v("\n                                        "+e._s(t.estado)+"\n                                      ")]),e._v(" "),e.materiasAprobadasHabilitadas(t)&&e.materiasRegularesHabilitadas(t)?e._e():r("v-icon",{attrs:{small:"",color:"error"}},[e._v("\n                                        mdi-alert-circle\n                                      ")])]],2)])})),0)],1):e._e(),e._v(" "),t.paraCursar.necesitaAprobada.length?r("div",[r("v-card-subtitle",{staticStyle:{color:"green"}},[e._v("Aprobadas")]),e._v(" "),r("v-card-text",e._l(e.materiasAprobadas(t),(function(t,i){return r("p",{key:i},[r("small",[e._v("\n                                    "+e._s(t.nombre)+"\n                                    "),[r("v-chip",{attrs:{"x-small":"",color:e.getColor(t.estado)}},[e._v("\n                                        "+e._s(t.estado)+"\n                                      ")]),e._v(" "),e.materiasAprobadasHabilitadas(t)&&e.materiasRegularesHabilitadas(t)?e._e():r("v-icon",{attrs:{small:"",color:"error"}},[e._v("\n                                        mdi-alert-circle\n                                      ")])]],2)])})),0)],1):e._e()])],1)],1)],1):e._e(),e._v(" "),r("v-container",[r("v-select",{attrs:{dense:"",items:["DESAPROBADA","CURSANDO","REGULAR","APROBADA"],label:"Condición",filled:"",rounded:""},on:{change:function(r){return e.cambiarEstadoMateria(t.id,t.estado,null)}},model:{value:t.estado,callback:function(r){e.$set(t,"estado",r)},expression:"materia.estado"}}),e._v(" "),"APROBADA"===t.estado?r("div",[r("v-select",{attrs:{dense:"",type:"number",items:[4,5,6,7,8,9,10],label:"Nota",filled:"",rounded:"",clearable:""},on:{change:function(r){return e.cambiarEstadoMateria(t.id,"APROBADA",t.nota)}},model:{value:t.nota,callback:function(r){e.$set(t,"nota",r)},expression:"materia.nota"}})],1):e._e()],1)],1)],1)})),1)],1)],1):e._e()})),0)],1)],1)})),1),e._v(" "),r("v-footer",{attrs:{dark:"",padless:""}},[r("v-container",{staticClass:"text-center",attrs:{flat:"",tile:""}},[r("v-card-text",{staticClass:"white--text pt-0"},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("p",{staticClass:"display-2"},[e._v("\n              "+e._s(e.cantMateriasAprobadas)+"/"+e._s(e.data.length)+"\n            ")]),e._v(" "),r("p",{staticClass:"headline"},[e._v("Materias aprobadas")])]),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("p",{staticClass:"display-2"},[e._v("\n              "+e._s(e.totalHorasElectivas)+"/"+e._s(e.horasElectivasProp)+"\n            ")]),e._v(" "),r("p",{staticClass:"headline"},[e._v("Horas electivas")])]),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("p",{staticClass:"display-2"},[e._v(e._s(e.totalHorasSemanales))]),e._v(" "),r("p",{staticClass:"headline"},[e._v("Horas semanales cursando")])]),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("p",{staticClass:"display-2"},[e._v(e._s(e.progresoTotal)+"%")]),e._v(" "),r("p",{staticClass:"headline"},[e._v(e._s(e.progresoTitle))])]),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("p",{staticClass:"display-2"},[e._v(e._s(e.promedioTotal))]),e._v(" "),r("p",{staticClass:"headline"},[e._v("Promedio")])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;A()(component,{VBtn:d.a,VCard:f.a,VCardSubtitle:m.a,VCardText:m.b,VCardTitle:m.c,VChip:v.a,VCol:E.a,VContainer:R.a,VExpansionPanel:S.a,VExpansionPanelContent:D.a,VExpansionPanelHeader:h.a,VExpansionPanels:C.a,VFooter:I.a,VIcon:O.a,VRow:_.a,VSelect:P.a,VSubheader:N.a})},413:function(e,t,r){"use strict";r(411)},414:function(e,t,r){var n=r(21)(!1);n.push([e.i,".v-expansion-panel-content__wrap{padding:0!important}",""]),e.exports=n},497:function(e){e.exports=JSON.parse('[{"nota":null,"id":"2","nombre":"SISTEMAS Y ORGANIZACIONES","horas":"3","ano":"1","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":true,"electiva":false,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":[]}},{"nota":null,"id":"3","nombre":"ÁLGEBRA Y GEOMETRÍA ANALÍTICA","horas":"10","ano":"1","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":[]}},{"nota":null,"id":"4","nombre":"MATEMÁTICA DISCRETA","horas":"6","ano":"1","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":[]}},{"nota":null,"id":"5","nombre":"QUÍMICA","horas":"6","ano":"1","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":[]}},{"nota":null,"id":"6","nombre":"SISTEMAS DE REPRESENTACIÓN","horas":"6","ano":"1","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":[]}},{"nota":null,"id":"1","nombre":"ANÁLISIS MATEMÁTICO I","horas":"10","ano":"1","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":[]}},{"nota":null,"id":"7","nombre":"ALGORITMOS Y ESTRUCTURAS DE DATOS","horas":"10","ano":"1","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":[]}},{"nota":null,"id":"8","nombre":"ARQUITECTURA DE COMPUTADORAS","horas":"8","ano":"1","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":[]}},{"nota":null,"id":"9","nombre":"ANÁLISIS MATEMÁTICO II","horas":"5","ano":"2","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["1","3"],"necesitaAprobada":[]}},{"nota":null,"id":"11","nombre":"ANÁLISIS DE SISTEMAS","horas":"6","ano":"2","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":true,"electiva":false,"paraCursar":{"necesitaRegular":["2","7"],"necesitaAprobada":[]}},{"nota":null,"id":"13","nombre":"INGLÉS I","horas":"2","ano":"2","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":[]}},{"nota":null,"id":"10","nombre":"FÍSICA I","horas":"10","ano":"2","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":[]}},{"nota":null,"id":"12","nombre":"SINTAXIS Y SEMÁNTICA DE LOS LENGUAJES","horas":"8","ano":"2","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["4","7"],"necesitaAprobada":[]}},{"nota":null,"id":"14","nombre":"PARADIGMAS DE PROGRAMACIÓN","horas":"8","ano":"2","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["4","7"],"necesitaAprobada":[]}},{"nota":null,"id":"15","nombre":"SISTEMAS OPERATIVOS","horas":"8","ano":"2","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["4","7","8"],"necesitaAprobada":[]}},{"nota":null,"id":"16","nombre":"INGLÉS II","horas":"2","ano":"3","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":["13"]}},{"nota":null,"id":"17","nombre":"DISEÑO DE SISTEMAS","horas":"6","ano":"3","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":true,"electiva":false,"paraCursar":{"necesitaRegular":["11","14"],"necesitaAprobada":["2","4","7"]}},{"nota":null,"id":"21","nombre":"MATEMÁTICA SUPERIOR","horas":"4","ano":"3","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["9"],"necesitaAprobada":["1","3"]}},{"nota":null,"id":"18","nombre":"FÍSICA II","horas":"10","ano":"3","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["1","10"],"necesitaAprobada":["2","4","7"]}},{"nota":null,"id":"19","nombre":"ECONOMÍA","horas":"6","ano":"3","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["11"],"necesitaAprobada":["2","7"]}},{"nota":null,"id":"20","nombre":"GESTIÓN DE DATOS","horas":"8","ano":"3","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["11","12","14"],"necesitaAprobada":["2","4","7"]}},{"nota":null,"id":"22","nombre":"COMUNICACIONES","horas":"8","ano":"3","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["8","9","18"],"necesitaAprobada":["1","3","10"]}},{"nota":null,"id":"23","nombre":"PROBABILIDAD Y ESTADÍSTICAS","horas":"6","ano":"3","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["1","3"],"necesitaAprobada":[]}},{"nota":null,"id":"24","nombre":"INGENIERÍA Y SOCIEDAD","horas":"4","ano":"3","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":[]}},{"nota":null,"id":"25","nombre":"METODOLOGÍA DE LA INVESTIGACIÓN","horas":"4","ano":"3","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":true,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":["2"]}},{"nota":null,"id":"46","nombre":"TALLER DE PROGRAMACIÓN","horas":"8","ano":"3","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":true,"paraCursar":{"necesitaRegular":["12","14"],"necesitaAprobada":["7"]}},{"nota":null,"id":"26","nombre":"ADMINISTRACIÓN DE RECURSOS","horas":"6","ano":"4","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":true,"electiva":false,"paraCursar":{"necesitaRegular":["15","17","19"],"necesitaAprobada":["8","11","13","14"]}},{"nota":null,"id":"27","nombre":"INVESTIGACIÓN OPERATIVA","horas":"5","ano":"4","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["21","23"],"necesitaAprobada":["9"]}},{"nota":null,"id":"28","nombre":"LEGISLACIÓN","horas":"4","ano":"4","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["11","24"],"necesitaAprobada":["2","7"]}},{"nota":null,"id":"29","nombre":"SIMULACIÓN","horas":"8","ano":"4","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["21","23"],"necesitaAprobada":["9"]}},{"nota":null,"id":"30","nombre":"REDES DE INFORMACIÓN","horas":"8","ano":"4","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["15","22"],"necesitaAprobada":["4","7","8","9","18"]}},{"nota":null,"id":"31","nombre":"INGENIERÍA DE SOFTWARE","horas":"6","ano":"4","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["17","20","23"],"necesitaAprobada":["11","12","14"]}},{"nota":null,"id":"32","nombre":"TEORÍA DE CONTROL","horas":"6","ano":"4","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["5","21"],"necesitaAprobada":["9","18"]}},{"nota":null,"id":"33","nombre":"SISTEMAS DISTRIBUIDOS","horas":"8","ano":"4","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":true,"paraCursar":{"necesitaRegular":["30"],"necesitaAprobada":[]}},{"nota":null,"id":"34","nombre":"PROYECTO FINAL","horas":"6","ano":"5","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":true,"electiva":false,"paraCursar":{"necesitaRegular":["26","28","30","31"],"necesitaAprobada":["6","15","16","17","19","20","22","23","24"]}},{"nota":null,"id":"35","nombre":"SISTEMAS DE GESTIÓN","horas":"8","ano":"5","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["26","27","29"],"necesitaAprobada":["15","17","19","21","23"]}},{"nota":null,"id":"37","nombre":"RELACIONES HUMANAS","horas":"5","ano":"5","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":true,"paraCursar":{"necesitaRegular":["26"],"necesitaAprobada":[]}},{"nota":null,"id":"38","nombre":"TECNOLOGÍAS PARA LA EXPLOTACIÓN DE DATOS","horas":"6","ano":"5","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":true,"paraCursar":{"necesitaRegular":["26","27","31"],"necesitaAprobada":["29"]}},{"nota":null,"id":"41","nombre":"SEGURIDAD EN SISTEMAS DE INFORMACIÓN","horas":"5","ano":"5","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":true,"paraCursar":{"necesitaRegular":["30"],"necesitaAprobada":["20"]}},{"nota":null,"id":"45","nombre":"CONSOLIDACIÓN DE TECNOLOGÍAS DE LA INFORMACIÓN Y LAS COMUNICACIONES","horas":"6","ano":"5","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":true,"paraCursar":{"necesitaRegular":["30"],"necesitaAprobada":["15"]}},{"nota":null,"id":"99","nombre":"PRÁCTICA SUPERVISADA","horas":"200","ano":"5","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["26","28","30","31"],"necesitaAprobada":["6","15","16","17","19","20","22","23","24"]}},{"nota":null,"id":"36","nombre":"DESARROLLO DE APLICACIONES CLIENTE-SERVIDOR","horas":"5","ano":"5","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":true,"paraCursar":{"necesitaRegular":["30"],"necesitaAprobada":["20"]}},{"nota":null,"id":"39","nombre":"ADMINISTRACIÓN GERENCIAL","horas":"6","ano":"5","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["26","27"],"necesitaAprobada":["15","17","19","21","23"]}},{"nota":null,"id":"40","nombre":"INTELIGENCIA ARTIFICIAL","horas":"6","ano":"5","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["27","29"],"necesitaAprobada":["17","21","23"]}},{"nota":null,"id":"42","nombre":"GESTIÓN AVANZADA DE DATOS","horas":"6","ano":"5","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":true,"paraCursar":{"necesitaRegular":["30"],"necesitaAprobada":["20"]}},{"nota":null,"id":"43","nombre":"AUDITORÍA DE SISTEMAS DE INFORMACIÓN","horas":"6","ano":"5","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":true,"paraCursar":{"necesitaRegular":["26","31"],"necesitaAprobada":[]}},{"nota":null,"id":"44","nombre":"EMPRENDEDORISMO","horas":"4","ano":"5","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":true,"paraCursar":{"necesitaRegular":["19"],"necesitaAprobada":[]}},{"nota":null,"id":"47","nombre":"UIT Y LOS ORGANISMOS INTERNACIONALES DE TIC","horas":"3","ano":"5","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":true,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":["2","11","17"]}}]')},514:function(e,t,r){"use strict";r.r(t);var n=r(412),o=r(497),l={components:{PlanDeEstudios:n.default},data:function(){return{materias:o}}},c=r(91),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("PlanDeEstudios",{attrs:{title:"Ingeniería en Sistemas de Información",subtitle:"UTN-FRCU",titleIcon:"mdi-laptop",progresoTitle:"Ingeniero/a",dbName:"materiasIsi",materiasProp:e.materias,horasElectivasProp:44}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PlanDeEstudios:r(412).default})}}]);