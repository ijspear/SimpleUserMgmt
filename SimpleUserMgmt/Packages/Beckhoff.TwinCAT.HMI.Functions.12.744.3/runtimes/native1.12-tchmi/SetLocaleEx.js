var TcHmi;!function(TcHmi){let Functions;!function(Functions){let Beckhoff;!function(Beckhoff){Beckhoff.SetLocaleEx=function(ctx,locale){TcHmi.Locale.load(locale,data=>data.error?void ctx.error(data.error,{code:data.error,message:TcHmi.Errors[data.error],reason:"Function: TcHmi.Functions.Beckhoff.SetLocaleEx",domain:"Function",errors:data.details?[data.details]:void 0}):void ctx.success())}}(Beckhoff=Functions.Beckhoff||(Functions.Beckhoff={})),Functions.registerFunctionEx("SetLocaleEx","TcHmi.Functions.Beckhoff",Beckhoff.SetLocaleEx)}(Functions=TcHmi.Functions||(TcHmi.Functions={}))}(TcHmi||(TcHmi={}));