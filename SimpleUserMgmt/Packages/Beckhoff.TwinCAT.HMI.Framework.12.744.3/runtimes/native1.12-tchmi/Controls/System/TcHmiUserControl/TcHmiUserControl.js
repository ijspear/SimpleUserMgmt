var TcHmi;!function(TcHmi){let Controls;!function(Controls){let System;!function(System){class TcHmiUserControl extends TcHmi.Controls.System.TcHmiPartial{constructor(element,pcElement,attrs){if(super(element,pcElement,attrs),TCHMI_DESIGNER){let attrPartialUrl=attrs["data-tchmi-partial-url"];if(attrPartialUrl){let url=tchmi_path(attrPartialUrl.value);if(url===TCHMI_TARGET_PARTIAL){let configUrl=url.replace(".usercontrol",".usercontrol.json");if(configUrl){let config=TcHmi.System.Data.Caches.partialCompositeConfigCache.get(configUrl);if(config&&config.parameters){let configOld=null,onUserControlConfigChanged=(evt,data)=>{if(data.url){let usercontrolUrl=data.url.replace(".usercontrol.json",".usercontrol");if(usercontrolUrl&&usercontrolUrl===TCHMI_TARGET_PARTIAL){let configUrl=data.url;if(configUrl){let config=TcHmi.System.Data.Caches.partialCompositeConfigCache.get(configUrl);config&&processConfig(config)}}}},processConfig=config=>{if(configOld){let missing=configOld.parameters.filter(itemOld=>!config.parameters.find(item=>itemOld.propertyName===item.propertyName));for(let i=0,ii=missing.length;i<ii;i++){let descr=missing[i];if(!descr)continue;if(!descr.propertyName)continue;let dataSource=TcHmi.System.Services.Engineering.designerModeManager.userControlParameterManager.get(descr.propertyName);dataSource&&(dataSource.value=null,TcHmi.EventProvider.raise("System.onDesignerUserControlParameterChanged<"+descr.propertyName+">")),TcHmi.System.Services.Engineering.designerModeManager.userControlParameterManager.remove(descr.propertyName)}}for(let i=0,ii=config.parameters.length;i<ii;i++){let descr=config.parameters[i];if(!descr)continue;if(!descr.propertyName)continue;let schema=TcHmi.Type.getSchema(descr.type);if(!schema)continue;let value=null;void 0!==descr.defaultValueInternal?value=descr.defaultValueInternal:schema&&(value=TcHmi.Type.Schema.resolveDefault(schema));let created=!1,changed=!1,dataSource=TcHmi.System.Services.Engineering.designerModeManager.userControlParameterManager.get(descr.propertyName);dataSource?dataSource&&!tchmi_equal(dataSource.value,value)&&(changed=!0):created=!0,(created||changed)&&(TcHmi.System.Services.Engineering.designerModeManager.userControlParameterManager.add(descr.propertyName,{descr:descr,value:value}),TcHmi.EventProvider.raise("System.onDesignerUserControlParameterChanged<"+descr.propertyName+">"))}configOld=config};processConfig(config),TcHmi.EventProvider.register("System.onUserControlConfigChanged",onUserControlConfigChanged)}}}}}}destroy(){this.__keepAlive||super.destroy()}}TcHmiUserControl.__type="TcHmi.Controls.System.TcHmiUserControl",System.TcHmiUserControl=TcHmiUserControl}(System=Controls.System||(Controls.System={}))}(Controls=TcHmi.Controls||(TcHmi.Controls={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("TcHmiUserControl","TcHmi.Controls.System",TcHmi.Controls.System.TcHmiUserControl);