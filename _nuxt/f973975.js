(window.webpackJsonp=window.webpackJsonp||[]).push([[11,6],{411:function(e,t,r){var content=r(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("7939b300",content,!0,{sourceMap:!1})},412:function(e,t,r){"use strict";r.r(t);r(28),r(4),r(418),r(45),r(419),r(420),r(421),r(422),r(423),r(424),r(425),r(426),r(427),r(428),r(429),r(430),r(431),r(432),r(433),r(434),r(46),r(61),r(131),r(11),r(12),r(272);var n={props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},titleIcon:{type:String,default:""},progresoTitle:{type:String,required:!0},dbName:{type:String,required:!0},materiasProp:{type:Array,required:!0},horasElectivasProp:{type:Number,default:44}},data:function(){return{data:this.materiasProp,cantMateriasAprobadas:0,totalHorasElectivas:0,progresoTotal:0,totalHorasSemanales:0,promedioTotal:0,"años":new Set(this.materiasProp.map((function(e){return e.ano}))),cuatrimestres:new Set(this.materiasProp.map((function(e){return e.cuatrimestre})))}},methods:{getColor:function(e){return"APROBADA"===e?"success":"REGULAR"===e?"warning":"CURSANDO"===e?"primary":void 0},progreso:function(e){var t=0,r=0;e.find((function(e){return"99"===e.id}))&&(r=e.find((function(e){return"99"===e.id})).horas/32),e.filter((function(e){return!0!==e.electiva&&"99"!==e.id})).map((function(e){return parseInt(e.horas)})).forEach((function(e){return t+=e}));var n=0;e.filter((function(e){return!0!==e.electiva&&"APROBADA"===e.estado&&"99"!==e.id})).map((function(e){return parseInt(e.horas)})).forEach((function(e){return n+=e}));var o=this.totalHorasElectivas>this.horasElectivasProp?this.horasElectivasProp:this.totalHorasElectivas,l=t+r+this.horasElectivasProp;e.find((function(e){return"99"===e.id}))&&"APROBADA"===e.find((function(e){return"99"===e.id})).estado&&(n+=r),this.progresoTotal=((n+o)/l*100).toFixed(2)},cantidadMateriasAprobadas:function(e){this.cantMateriasAprobadas=e.filter((function(e){return"APROBADA"===e.estado})).length},horasElectivas:function(e){var t=this;this.totalHorasElectivas=0,e.filter((function(e){return"APROBADA"===e.estado&&!0===e.electiva})).forEach((function(e){t.totalHorasElectivas=parseInt(e.horas)+t.totalHorasElectivas}))},horasSemanales:function(e){var t=this;this.totalHorasSemanales=0,e.filter((function(e){return"CURSANDO"===e.estado})).forEach((function(e){t.totalHorasSemanales=parseInt(e.horas)+t.totalHorasSemanales}))},materiasRegulares:function(e){var t=this,r=[];return e.paraCursar.necesitaRegular.forEach((function(element){r.push(t.data.find((function(e){return e.id===element})))})),r},materiasAprobadas:function(e){var t=this,r=[];return e.paraCursar.necesitaAprobada.forEach((function(element){r.push(t.data.find((function(e){return e.id===element})))})),r},estaAprobada:function(e){return"APROBADA"===e.estado},materiasRegularesHabilitadas:function(e){return!!this.materiasRegulares(e).map((function(e){return e.estado})).every((function(e){return"REGULAR"===e||"APROBADA"===e}))},promedio:function(e){if(e.length){this.promedioTotal=0;var t=0,r=e.filter((function(e){return"APROBADA"===e.estado&&null!==e.nota})).map((function(e){return parseInt(e.nota)}));r.forEach((function(e){return t+=e}));var n=t/(r.length?r.length:1);this.promedioTotal=n.toFixed(2)}},materiasAprobadasHabilitadas:function(e){var t=this.materiasAprobadas(e).map((function(e){return e.estado})).every((function(e){return"APROBADA"===e}));return!!t},cambiarEstadoMateria:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.data.find((function(t){return t.id===e})).nota=r,this.data.find((function(t){return t.id===e})).estado=t,localStorage.setItem(this.dbName,JSON.stringify(this.data)),this.data=JSON.parse(localStorage.getItem(this.dbName)),this.actualizarEstadisticas(this.data)},"aprobarAño":function(e){this.data.filter((function(t){return t.ano===e})).forEach((function(e){return e.estado="APROBADA"})),localStorage.setItem(this.dbName,JSON.stringify(this.data)),this.data=JSON.parse(localStorage.getItem(this.dbName)),this.actualizarEstadisticas(this.data)},getButtonColor:function(e){if(this.data.filter((function(t){return t.ano===e})).every((function(e){return"APROBADA"===e.estado})))return"success"},actualizarEstadisticas:function(e){this.cantidadMateriasAprobadas(e),this.horasElectivas(e),this.horasSemanales(e),this.progreso(e),this.promedio(e)},materias:function(e,t){return this.data.filter((function(r){return r.ano===e&&r.cuatrimestre===t}))}},mounted:function(){localStorage.getItem(this.dbName)?this.data=JSON.parse(localStorage.getItem(this.dbName)):localStorage.setItem(this.dbName,JSON.stringify(this.data)),this.cantMateriasAprobadas=this.data.filter((function(e){return"APROBADA"===e.estado})).length,this.actualizarEstadisticas(this.data)}},o=n,l=(r(413),r(91)),c=r(132),A=r.n(c),d=r(270),f=r(455),m=r(408),E=r(456),v=r(504),R=r(407),C=r(505),I=r(506),h=r(507),S=r(508),D=r(402),O=r(187),N=r(509),_=r(510),P=r(458),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-card-text",[r("p",{staticClass:"headline"},[r("v-icon",[e._v(e._s(e.titleIcon))]),e._v("\n      "+e._s(e.title)+"\n    ")],1),e._v(" "),r("p",{staticClass:"subtitle-1"},[e._v("\n      "+e._s(e.subtitle)+"\n    ")])]),e._v(" "),r("v-row",e._l(e.años,(function(t,i){return r("v-col",{key:i,attrs:{cols:"12",sm:"6",md:"4",xl:"3"}},[r("v-card",[r("v-card-title",[e._v("\n          "+e._s(t)+"° Año\n          "),r("v-btn",{staticStyle:{"margin-left":"10px"},attrs:{small:"",color:e.getButtonColor(t),icon:""},on:{click:function(r){e.aprobarAño(t)}}},[r("v-icon",[e._v("mdi-check")])],1)],1),e._v(" "),r("v-card-text",e._l(e.cuatrimestres,(function(n,i){return e.materias(t,n).length?r("div",{key:i},["0"===n?r("v-subheader",[e._v("Anual")]):e._e(),e._v(" "),"1"===n?r("v-subheader",[e._v("Primer Cuatrimestre")]):e._e(),e._v(" "),"2"===n?r("v-subheader",[e._v("Segundo Cuatrimestre")]):e._e(),e._v(" "),r("div",{staticStyle:{margin:"5px"}},[r("v-expansion-panels",{attrs:{focusable:""}},e._l(e.materias(t,n),(function(t,i){return r("v-expansion-panel",{key:i},[r("v-expansion-panel-header",{attrs:{color:e.getColor(t.estado)},scopedSlots:e._u([e.materiasAprobadasHabilitadas(t)&&e.materiasRegularesHabilitadas(t)?null:{key:"actions",fn:function(){return[r("v-icon",{attrs:{color:"error"}},[e._v(" mdi-alert-circle ")])]},proxy:!0}],null,!0)},[r("v-row",[r("v-col",[e._v("\n                        "+e._s(t.nombre)+"\n                        "),[t.integradora?r("v-chip",{attrs:{"x-small":""}},[e._v("\n                            INTEGRADORA\n                          ")]):e._e()],e._v(" "),[t.electiva?r("v-chip",{attrs:{"x-small":""}},[e._v("\n                            ELECTIVA\n                          ")]):e._e()],e._v(" "),[t.optativa?r("v-chip",{attrs:{"x-small":""}},[e._v("\n                            OPTATIVA\n                          ")]):e._e()]],2),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("strong",[e._v(e._s(t.horas)+" hs")])])],1)],1),e._v(" "),r("v-expansion-panel-content",[t.paraCursar.necesitaRegular.length||t.paraCursar.necesitaAprobada.length?r("v-container",[r("v-expansion-panels",[r("v-expansion-panel",[r("v-expansion-panel-header",[e._v("Para cursar necesito\n                          ")]),e._v(" "),r("v-expansion-panel-content",[t.paraCursar.necesitaRegular.length?r("div",[r("v-card-subtitle",{staticStyle:{color:"orangered"}},[e._v("Regulares")]),e._v(" "),r("v-card-text",e._l(e.materiasRegulares(t),(function(t,i){return r("p",{key:i},[r("small",[e._v("\n                                    "+e._s(t.nombre)+"\n                                    "),[r("v-chip",{attrs:{"x-small":"",color:e.getColor(t.estado)}},[e._v("\n                                        "+e._s(t.estado)+"\n                                      ")]),e._v(" "),e.materiasAprobadasHabilitadas(t)&&e.materiasRegularesHabilitadas(t)?e._e():r("v-icon",{attrs:{small:"",color:"error"}},[e._v("\n                                        mdi-alert-circle\n                                      ")])]],2)])})),0)],1):e._e(),e._v(" "),t.paraCursar.necesitaAprobada.length?r("div",[r("v-card-subtitle",{staticStyle:{color:"green"}},[e._v("Aprobadas")]),e._v(" "),r("v-card-text",e._l(e.materiasAprobadas(t),(function(t,i){return r("p",{key:i},[r("small",[e._v("\n                                    "+e._s(t.nombre)+"\n                                    "),[r("v-chip",{attrs:{"x-small":"",color:e.getColor(t.estado)}},[e._v("\n                                        "+e._s(t.estado)+"\n                                      ")]),e._v(" "),e.materiasAprobadasHabilitadas(t)&&e.materiasRegularesHabilitadas(t)?e._e():r("v-icon",{attrs:{small:"",color:"error"}},[e._v("\n                                        mdi-alert-circle\n                                      ")])]],2)])})),0)],1):e._e()])],1)],1)],1):e._e(),e._v(" "),r("v-container",[r("v-select",{attrs:{dense:"",items:["DESAPROBADA","CURSANDO","REGULAR","APROBADA"],label:"Condición",filled:"",rounded:""},on:{change:function(r){return e.cambiarEstadoMateria(t.id,t.estado,null)}},model:{value:t.estado,callback:function(r){e.$set(t,"estado",r)},expression:"materia.estado"}}),e._v(" "),"APROBADA"===t.estado?r("div",[r("v-select",{attrs:{dense:"",type:"number",items:[4,5,6,7,8,9,10],label:"Nota",filled:"",rounded:"",clearable:""},on:{change:function(r){return e.cambiarEstadoMateria(t.id,"APROBADA",t.nota)}},model:{value:t.nota,callback:function(r){e.$set(t,"nota",r)},expression:"materia.nota"}})],1):e._e()],1)],1)],1)})),1)],1)],1):e._e()})),0)],1)],1)})),1),e._v(" "),r("v-footer",{attrs:{dark:"",padless:""}},[r("v-container",{staticClass:"text-center",attrs:{flat:"",tile:""}},[r("v-card-text",{staticClass:"white--text pt-0"},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("p",{staticClass:"display-2"},[e._v("\n              "+e._s(e.cantMateriasAprobadas)+"/"+e._s(e.data.length)+"\n            ")]),e._v(" "),r("p",{staticClass:"headline"},[e._v("Materias aprobadas")])]),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("p",{staticClass:"display-2"},[e._v("\n              "+e._s(e.totalHorasElectivas)+"/"+e._s(e.horasElectivasProp)+"\n            ")]),e._v(" "),r("p",{staticClass:"headline"},[e._v("Horas electivas")])]),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("p",{staticClass:"display-2"},[e._v(e._s(e.totalHorasSemanales))]),e._v(" "),r("p",{staticClass:"headline"},[e._v("Horas semanales cursando")])]),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("p",{staticClass:"display-2"},[e._v(e._s(e.progresoTotal)+"%")]),e._v(" "),r("p",{staticClass:"headline"},[e._v(e._s(e.progresoTitle))])]),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("p",{staticClass:"display-2"},[e._v(e._s(e.promedioTotal))]),e._v(" "),r("p",{staticClass:"headline"},[e._v("Promedio")])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;A()(component,{VBtn:d.a,VCard:f.a,VCardSubtitle:m.a,VCardText:m.b,VCardTitle:m.c,VChip:E.a,VCol:v.a,VContainer:R.a,VExpansionPanel:C.a,VExpansionPanelContent:I.a,VExpansionPanelHeader:h.a,VExpansionPanels:S.a,VFooter:D.a,VIcon:O.a,VRow:N.a,VSelect:_.a,VSubheader:P.a})},413:function(e,t,r){"use strict";r(411)},414:function(e,t,r){var n=r(21)(!1);n.push([e.i,".v-expansion-panel-content__wrap{padding:0!important}",""]),e.exports=n},496:function(e){e.exports=JSON.parse('[{"nota":null,"id":"2","nombre":"INGENIERÍA ELECTROMECÁNICA I","horas":"3","ano":"1","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":true,"electiva":false,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":[]}},{"nota":null,"id":"1","nombre":"ANÁLISIS MATEMÁTICO I","horas":"10","ano":"1","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":[]}},{"nota":null,"id":"3","nombre":"ÁLGEBRA Y GEOMETRÍA ANALÍTICA","horas":"10","ano":"1","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":[]}},{"nota":null,"id":"4","nombre":"SISTEMAS DE REPRESENTACIÓN","horas":"6","ano":"1","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":[]}},{"nota":null,"id":"5","nombre":"QUÍMICA GENERAL","horas":"10","ano":"1","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":[]}},{"nota":null,"id":"6","nombre":"FÍSICA I","horas":"10","ano":"1","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":[]}},{"nota":null,"id":"7","nombre":"INGENIERÍA Y SOCIEDAD","horas":"4","ano":"1","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":[]}},{"nota":null,"id":"8","nombre":"REPRESENTACIÓN GRÁFICA","horas":"6","ano":"1","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":[]}},{"nota":null,"id":"9","nombre":"ESTABILIDAD","horas":"6","ano":"2","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["1","3","6"],"necesitaAprobada":[]}},{"nota":null,"id":"10","nombre":"INGENIERÍA ELECTROMECÁNICA II","horas":"3","ano":"2","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":true,"electiva":false,"paraCursar":{"necesitaRegular":["1","2","3"],"necesitaAprobada":[]}},{"nota":null,"id":"11","nombre":"ANÁLISIS MATEMÁTICO II","horas":"10","ano":"2","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["1","3"],"necesitaAprobada":[]}},{"nota":null,"id":"12","nombre":"PROBABILIDAD Y ESTADÍSTICA","horas":"6","ano":"2","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["1","3"],"necesitaAprobada":[]}},{"nota":null,"id":"13","nombre":"INGLÉS I","horas":"2","ano":"2","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":[]}},{"nota":null,"id":"14","nombre":"FÍSICA II","horas":"10","ano":"2","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["1","6"],"necesitaAprobada":[]}},{"nota":null,"id":"15","nombre":"CONOCIMIENTO DE MATERIALES","horas":"8","ano":"2","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["5"],"necesitaAprobada":[]}},{"nota":null,"id":"16","nombre":"PROGRAMACIÓN EN COMPUTACIÓN","horas":"6","ano":"2","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":true,"paraCursar":{"necesitaRegular":["1","3"],"necesitaAprobada":[]}},{"nota":null,"id":"17","nombre":"TECNOLOGÍA MECÁNICA","horas":"10","ano":"3","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["14","15"],"necesitaAprobada":["1","4","5","6","8"]}},{"nota":null,"id":"18","nombre":"INGENIERÍA ELECTROMECÁNICA III","horas":"3","ano":"3","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":true,"electiva":false,"paraCursar":{"necesitaRegular":["10","11","14"],"necesitaAprobada":["1","2","3","4","6"]}},{"nota":null,"id":"19","nombre":"ELECTROTECNIA","horas":"6","ano":"3","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["11","14"],"necesitaAprobada":["1","3","4","6"]}},{"nota":null,"id":"20","nombre":"TERMODINÁMICA TÉCNICA","horas":"4","ano":"3","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["14"],"necesitaAprobada":["1","4","6"]}},{"nota":null,"id":"21","nombre":"MATEMÁTICA PARA INGENIERÍA ELECTROMECÁNICA","horas":"6","ano":"3","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["11"],"necesitaAprobada":["1","3","4"]}},{"nota":null,"id":"22","nombre":"INGLÉS II","horas":"2","ano":"3","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":["13"]}},{"nota":null,"id":"23","nombre":"MECÁNICA Y MECANISMOS","horas":"8","ano":"3","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["8","9","11"],"necesitaAprobada":["1","3","4","6"]}},{"nota":null,"id":"24","nombre":"HIGIENE Y SEGURIDAD INDUSTRIAL","horas":"4","ano":"3","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["14"],"necesitaAprobada":["1","4","5","6","7"]}},{"nota":null,"id":"25","nombre":"ELEMENTOS DE MÁQUINAS","horas":"6","ano":"4","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":true,"electiva":false,"paraCursar":{"necesitaRegular":["17","18","23"],"necesitaAprobada":["9","10","11","13","14","15","16"]}},{"nota":null,"id":"26","nombre":"MECÁNICA DE LOS FLUIDOS Y MÁQUINAS FLUIDODINÁMICAS","horas":"5","ano":"4","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["20","23"],"necesitaAprobada":["9","11","14","16"]}},{"nota":null,"id":"27","nombre":"MÁQUINAS ELÉCTRICAS","horas":"5","ano":"4","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["19"],"necesitaAprobada":["14"]}},{"nota":null,"id":"28","nombre":"MEDICIONES ELÉCTRICAS","horas":"8","ano":"4","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["19","21"],"necesitaAprobada":["11","14"]}},{"nota":null,"id":"29","nombre":"MÁQUINAS TÉRMICAS","horas":"10","ano":"4","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["20"],"necesitaAprobada":["14"]}},{"nota":null,"id":"30","nombre":"ELECTRÓNICA INDUSTRIAL","horas":"6","ano":"4","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["19"],"necesitaAprobada":["14"]}},{"nota":null,"id":"31","nombre":"ECONOMÍA","horas":"6","ano":"4","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["10"],"necesitaAprobada":["7"]}},{"nota":null,"id":"32","nombre":"LEGISLACIÓN","horas":"4","ano":"4","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["10"],"necesitaAprobada":["7"]}},{"nota":null,"id":"33","nombre":"DISEÑO Y FABRICACIÓN ASISTIDO POR COMPUTADORA","horas":"4","ano":"4","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":true,"paraCursar":{"necesitaRegular":["15","17","23"],"necesitaAprobada":["9","11","14"]}},{"nota":null,"id":"48","nombre":"INGENIERÍA DE SUPERFICIES","horas":"6","ano":"4","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":["6","14","15"]}},{"nota":null,"id":"34","nombre":"REDES DE DISTRIBUCIÓN E INSTALACIONES ELÉCTRICAS","horas":"5","ano":"5","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["27","28"],"necesitaAprobada":["19"]}},{"nota":null,"id":"35","nombre":"ORGANIZACIÓN INDUSTRIAL","horas":"6","ano":"5","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["31","32"],"necesitaAprobada":["10","12"]}},{"nota":null,"id":"36","nombre":"AUTOMATIZACIÓN Y CONTROL INDUSTRIAL","horas":"6","ano":"5","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["21","26","27","28","30"],"necesitaAprobada":["19","20","23"]}},{"nota":null,"id":"37","nombre":"PROYECTO FINAL","horas":"3","ano":"5","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":true,"electiva":false,"paraCursar":{"necesitaRegular":["25","26","27","29"],"necesitaAprobada":["13","17","19","20","21","22","23","24"]}},{"nota":null,"id":"38","nombre":"MÁQUINAS DE ELEVACIÓN Y TRANSPORTE","horas":"8","ano":"5","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":true,"paraCursar":{"necesitaRegular":["25","26"],"necesitaAprobada":["17","18","20","23"]}},{"nota":null,"id":"39","nombre":"ELECTRÓNICA DE POTENCIA","horas":"4","ano":"5","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":true,"paraCursar":{"necesitaRegular":["28","30"],"necesitaAprobada":["19","21"]}},{"nota":null,"id":"40","nombre":"INTRODUCCIÓN AL PROYECTO DE INSTALACIONES INDUSTRIALES","horas":"6","ano":"5","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":true,"paraCursar":{"necesitaRegular":[],"necesitaAprobada":["19","20","21","23"]}},{"nota":null,"id":"46","nombre":"AMBIENTAL","horas":"4","ano":"5","cuatrimestre":"1","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":true,"paraCursar":{"necesitaRegular":["31","32"],"necesitaAprobada":["24"]}},{"nota":null,"id":"99","nombre":"PRÁCTICA SUPERVISADA","horas":"200","ano":"5","cuatrimestre":"0","esAnual":true,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["25","26","27","29"],"necesitaAprobada":["17","19","20","21","22","23","24"]}},{"nota":null,"id":"41","nombre":"INSTALACIONES TÉRMICAS, MECÁNICAS Y FRIGORÍFICAS","horas":"6","ano":"5","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["26","29"],"necesitaAprobada":["20","23"]}},{"nota":null,"id":"42","nombre":"CENTRALES Y SISTEMAS DE TRANSMISIÓN","horas":"10","ano":"5","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":false,"paraCursar":{"necesitaRegular":["26","27","28","29"],"necesitaAprobada":["19","20","21","23"]}},{"nota":null,"id":"43","nombre":"HIDRODINÁMICA Y NEUMÁTICA","horas":"4","ano":"5","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":true,"paraCursar":{"necesitaRegular":["26"],"necesitaAprobada":["20","23"]}},{"nota":null,"id":"44","nombre":"AUTOMATISMOS","horas":"8","ano":"5","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":true,"paraCursar":{"necesitaRegular":["36","39"],"necesitaAprobada":["19","20","21","23"]}},{"nota":null,"id":"45","nombre":"INSTALACIONES INDUSTRIALES REGIONALES","horas":"6","ano":"5","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":true,"paraCursar":{"necesitaRegular":["40"],"necesitaAprobada":["19","20","21","23"]}},{"nota":null,"id":"47","nombre":"EMPRENDEDORISMO","horas":"4","ano":"5","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":true,"paraCursar":{"necesitaRegular":["35"],"necesitaAprobada":["31","32"]}},{"nota":null,"id":"49","nombre":"INTRODUCCIÓN A LA INVESTIGACIÓN CIENTÍFICA","horas":"4","ano":"5","cuatrimestre":"2","esAnual":false,"estado":"DESAPROBADA","integradora":false,"electiva":true,"paraCursar":{"necesitaRegular":["10"],"necesitaAprobada":["7"]}}]')},513:function(e,t,r){"use strict";r.r(t);var n=r(412),o=r(496),l={components:{PlanDeEstudios:n.default},data:function(){return{materias:o}}},c=r(91),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("PlanDeEstudios",{attrs:{title:"Ingeniería Electromecánica",subtitle:"UTN-FRCU",titleIcon:"mdi-cog",progresoTitle:"Ingeniero/a",dbName:"materiasElectro",materiasProp:e.materias,horasElectivasProp:28}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PlanDeEstudios:r(412).default})}}]);