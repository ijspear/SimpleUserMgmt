// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../SimpleUserMgmt/Packages/Beckhoff.TwinCAT.HMI.Framework.12.744.3/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var SimpleUserMgmtHMI;
        (function (SimpleUserMgmtHMI) {
            function AddUser(par1) {
//-----------------end boilerplate head------------------------------------------
                (async () => {
                    var plcUsers = new Array();
                    var str1 = '%s%PLC1.MAIN.aArray';
                    var currentDate = function(sp) {
                        today = new Date();
                        var dd = today.getDate();
                        var mm = today.getMonth();
                        var yyyy = today.getFullYear();
                        if (dd < 10) dd = '0' + dd;
                        if (mm < 10) mm = '0' + mm;
                        return (mm + sp + dd + sp + yyyy);
                    };
                    TcHmi.Symbol.readEx2('%s%PLC1.MAIN.aArray%/s%', function(data) {
                        plcUsers = data.value;
                        //console.log(data);
                    });
                    
                    var userExists;
                    const steps = ['1', '2', '3', '4', '5', '6'];
                    const titleInfo = ['Add New User', 'Add New User', 'Add New User', 'Add New User', 'Add New User'];
                    const textInfo = ['Enter First Name', 'Enter Last Name', 'Create a 4 digit PIN not starting with 0', 'Confirm 4 digit PIN', 'Should user be an admin?'];
                    const inputTypeInfo = ['text', 'text', 'password', 'password', 'radio'];
                    const inputOptionsInfo = ['', '', '', '', inputOptions];
                    const valMsgInfo = ['Please enter first name.', 'Please enter last name.', 'Please create a 4 digit PIN not starting with 0', 'PINs do not match. Press Back to enter again', 'Should new user be and Admin?','User already exists. Please edit current user.'];                  
                    const swalQueueStep = Swal.mixin({
                        allowOutsideClick: false,
                        inputAutoTrim: true,
                        cancelButtonText: '&larr; Back',
                        showCancelButton: true,
                        reverseButtons: true,
                        progressSteps: steps
                    });
                    var values = new Array();
                    let currentStep;
                    for (currentStep = 0; currentStep < steps.length;){
                        var inputOptions = {false:'No', true:'Yes'}; 
                        const inputOptionsInfo = ['', '', '', '', inputOptions];
                        if (currentStep < 5){
                            const result = await swalQueueStep.fire({
                                confirmButtonText: 'Next &rarr;',
                                showCloseButton: true,
                                title: titleInfo[currentStep],
                                text: textInfo[currentStep],
                                input: inputTypeInfo[currentStep],
                                inputOptions: inputOptionsInfo[currentStep],
                                inputValue: values[currentStep],
                                inputValidator: (inputValue) => {
                                    return new Promise((resolve) => {
                                        var textChecker = (inputValue == '');
                                        if (currentStep == 1) {
                                            let userStep2;
                                            for (userStep2 = 0; userStep2 < plcUsers.length;){
                                                if (inputValue == '') {
                                                    resolve(valMsgInfo[1]);
                                                    break;
                                                } else if  (plcUsers[userStep2].sFirstName.toLowerCase() == values[0].toLowerCase() && plcUsers[userStep2].sLastName.toLowerCase() == inputValue.toLowerCase()){
                                                    userExists = true;
                                                    resolve(valMsgInfo[5]);
                                                    break;
                                                } else if (userStep2 === plcUsers.length -1 ) {
                                                    userExists = false;
                                                    break;
                                                } else {
                                                    userStep2++;
                                                };
                                            };    
                                        };
                                        var numChecker
                                        if (currentStep == 4) {
                                            numChecker = '';
                                        } else {
                                            numChecker = inputValue == '' || parseInt(inputValue.charAt(0)) == 0 || isNaN(inputValue) || parseInt(inputValue) < 1000 || parseInt(inputValue) > 9999;
                                        };
                                        var pinChecker = !(parseInt(inputValue) === parseInt(values[2]));
                                        var radioChecker = (inputValue == null);
                                        var inputValInfo = [textChecker, userExists, numChecker, pinChecker, radioChecker];
                                        if (inputValInfo[currentStep]){
                                            resolve(valMsgInfo[currentStep]);
                                        } else {
                                            resolve();
                                        };
                                    });
                                },
                                showCancelButton: currentStep > 0,
                                currentProgressStep: currentStep,
                            });
                            if (result.value) {
                                values[currentStep] = result.value
                                currentStep++;
                            } else if (result.dismiss === Swal.DismissReason.cancel) {
                                currentStep--;
                            } else {
                                break
                            };  
                        } else {
                            const result = await swalQueueStep.fire({
                                showCloseButton: true,
                                title: 'Confirm Information',
                                html: 'First Name: <b>' + values[0] + '</b><br>Last Name: <b>' + values[1] + '</b><br>PIN: <b>Confirmed</b>' + '<br>Admin: <b>' + values[4] + '</b>',
                                confirmButtonText: 'Save',
                                showCancelButton: true,
                                currentProgressStep: currentStep,
                            });
                            if (result.value) {
                                values[currentStep] = result.value;
                                currentStep++;
                            } else if (result.dismiss === Swal.DismissReason.cancel) {
                                currentStep--;
                            } else {
                                break
                            };
                        };
                    };
                    if (currentStep === steps.length) {

                        let userStep;
                        for (userStep = 0; userStep < plcUsers.length;){
                            if (plcUsers[userStep].sFirstName == '') {
                                var writeThis = {};
                                writeThis['sFirstName'] = values[0];
                                writeThis['sLastName'] = values[1];
                                writeThis['iPin'] = parseInt(values[3]);
                                writeThis['sDateCreated'] = currentDate('/');
                                writeThis['bAdmin'] = JSON.parse(values[4]);
                                writeThis['bDisable'] = false;
                                let targetIndex = str1.concat('[' + userStep + ']%/s%');
                                TcHmi.Symbol.writeEx(targetIndex, writeThis, function(data) {
                                    Swal.fire('User Added Successfully!', '', 'success');
                                    console.log(targetIndex);
                                    console.log(writeThis);
                                    //%s%PLC1.MAIN.aArray%/s%

                                });
                                break;
                            } else {
                                userStep++;
                            };
                        };
                    };
                })
                ()

//----------------start boilerplate foot-----------------------------------------
            }
            SimpleUserMgmtHMI.AddUser = AddUser;
        })(SimpleUserMgmtHMI = Functions.SimpleUserMgmtHMI || (Functions.SimpleUserMgmtHMI = {}));
        Functions.registerFunctionEx('AddUser', 'TcHmi.Functions.SimpleUserMgmtHMI', SimpleUserMgmtHMI.AddUser);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);