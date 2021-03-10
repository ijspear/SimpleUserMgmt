// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../SimpleUserMgmt/Packages/Beckhoff.TwinCAT.HMI.Framework.12.744.3/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var SimpleUserMgmtHMI;
        (function (SimpleUserMgmtHMI) {
            function EditUser(par1) {
            }
            SimpleUserMgmtHMI.EditUser = EditUser;
        })(SimpleUserMgmtHMI = Functions.SimpleUserMgmtHMI || (Functions.SimpleUserMgmtHMI = {}));
        Functions.registerFunctionEx('EditUser', 'TcHmi.Functions.SimpleUserMgmtHMI', SimpleUserMgmtHMI.EditUser);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);