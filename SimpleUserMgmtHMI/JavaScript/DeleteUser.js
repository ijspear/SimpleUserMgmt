// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../SimpleUserMgmt/Packages/Beckhoff.TwinCAT.HMI.Framework.12.744.3/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var SimpleUserMgmtHMI;
        (function (SimpleUserMgmtHMI) {
            function DeleteUser(bDelete) {
                if (TcHmi.Controls.get('TcHmiDatagrid').getSelectedRowIndex() == null) {
                    //console.log(TcHmi.Controls.get('TcHmiDatagrid').getSelectedRowIndex());
                    Swal.fire({
                        title: 'Select User First',
                        text: "Select the user you want to delete",
                        icon: 'warning',
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Back'
                    });
                } else {
                    //console.log(TcHmi.Controls.get('TcHmiDatagrid').getSelectedRowIndex());
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete the user!'
                    }).then((result) => {
                        if (result.value) {
                            bDelete.write(true); //WRITE TRUE TO PLC-VARIABLE
                            Swal.fire(
                                'Deleted!',
                                'The user has been deleted.',
                                'success'
                            );
                        };
                    });
                };
            };
            SimpleUserMgmtHMI.DeleteUser = DeleteUser;
        })(SimpleUserMgmtHMI = Functions.SimpleUserMgmtHMI || (Functions.SimpleUserMgmtHMI = {}));
        Functions.registerFunctionEx('DeleteUser', 'TcHmi.Functions.SimpleUserMgmtHMI', SimpleUserMgmtHMI.DeleteUser);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);