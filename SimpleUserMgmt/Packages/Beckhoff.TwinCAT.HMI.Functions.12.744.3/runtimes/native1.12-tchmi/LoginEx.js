var TcHmi;!function(TcHmi){let Functions;!function(Functions){let Beckhoff;!function(Beckhoff){Beckhoff.LoginEx=function(ctx,username,password,persistent=!0,reload=!0){TcHmi.Server.loginEx2(username,password,persistent,reload,null,data=>{if(data.error!==TcHmi.Errors.NONE)return TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.error("[Source=Framework, Module=TcHmi.Functions.Beckhoff.LoginEx] "+TcHmi.Log.buildMessage(data.details)),void ctx.error(data.error,{code:data.error,message:TcHmi.Errors[data.error],reason:"Function: TcHmi.Functions.Beckhoff.LoginEx",domain:"Function",errors:data.details?[data.details]:void 0});ctx.success()})}}(Beckhoff=Functions.Beckhoff||(Functions.Beckhoff={})),Functions.registerFunctionEx("LoginEx","TcHmi.Functions.Beckhoff",Beckhoff.LoginEx)}(Functions=TcHmi.Functions||(TcHmi.Functions={}))}(TcHmi||(TcHmi={}));