//1.MedenkaWars
function medenka(args){
    "use strict";

    const singleMedenkaDmg = 60;

    let naskorDamageDone = 0;
    let vitkorDamageDone = 0;

    let naskorPreviousAttackDmg = -1;
    let naskorStreak = 0;

    let vitkorPreviousAttackDmg = -1;
    let vitkorStreak = 0;

    for (let line of args) {
        let inputInfo = line.split(/\s+/);
        let medenkaCount = inputInfo[0];
        let medenkaType = inputInfo[1];

        let medenkaDmg = medenkaCount * singleMedenkaDmg;
        if (medenkaType === 'white') {
            if (medenkaDmg === vitkorPreviousAttackDmg) {
                vitkorStreak++;

                if (vitkorStreak === 2) {
                    medenkaDmg *= 2.75;
                    vitkorStreak = 0;
                }
            } else {
                vitkorPreviousAttackDmg = medenkaDmg;
                vitkorStreak = 1;
            }

            vitkorDamageDone += medenkaDmg;
        } else {
            if (medenkaDmg === naskorPreviousAttackDmg) {
                naskorStreak++;

                if (naskorStreak == 5) {
                    medenkaDmg *= 4.5;
                    naskorStreak = 0;
                }
            } else {
                naskorPreviousAttackDmg = medenkaDmg;
                naskorStreak = 1;
            }

            naskorDamageDone += medenkaDmg;
        }
    }

    let winner = vitkorDamageDone > naskorDamageDone ? 'Vitkor' : 'Naskor';
    let damage = vitkorDamageDone > naskorDamageDone ? vitkorDamageDone : naskorDamageDone;

    console.log('Winner - ' + winner);
    console.log('Damage - ' + damage);
}
medenka([
    '5 white medenkas',
    '5 dark medenkas',
    '4 white medenkas'

])

//2.BunnyKIlls
function solve(args) {
    "use strict";

    function bombMatrix(matrix, bombRow, bombCol) {
        let startCol = Math.max(0, +bombCol - 1);
        let endCol = Math.min(matrix[bombRow].length - 1, +bombCol + 1);

        let startRow = Math.max(0, +bombRow - 1);
        let endRow = Math.min(matrix.length - 1, +bombRow + 1);

        let bombDmg = +matrix[bombRow][bombCol];

        for (let row = startRow; row <= endRow; row++) {
            for (let col = startCol; col <= endCol; col++) {
                matrix[row][col] -= bombDmg;
            }
        }
    }

    let matrix = [];
    let damageDone = 0;
    let killedBunnies = 0;

    for (let line = 0; line < args.length - 1; line++) {
        let lineInfo = args[line].split(/\s+/); // filter memory issue?
        matrix[line] = [];
        for (let number of lineInfo) {
            matrix[line].push(+number);
        }
    }

    let bombCoordinates = args[args.length - 1].split(/\s+/);

    for (let bombCoordinate of bombCoordinates) {
        let bombInfo = bombCoordinate.trim().split(/,+/);
        let row = bombInfo[0];
        let col = bombInfo[1];

        if (matrix[row][col] > 0) {
            killedBunnies++;
            damageDone += matrix[row][col];
            bombMatrix(matrix, row, col);
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        let upperBound = matrix[row].length;
        for (let col = 0; col < upperBound; col++) {
            if (matrix[row][col] > 0) {
                damageDone += +matrix[row][col];
                killedBunnies++;
            }
        }
    }

    console.log(damageDone);
    console.log(killedBunnies);
}

//3.AJAXREquest
function solve(args) {
    "use strict";

    function isValidAuthenticationType(methodType, credentialsType) {
        if (credentialsType === 'Basic' &&
            (methodType === 'POST' ||
            methodType === 'PUT' ||
            methodType === 'DELETE')) {
            return false;
        }

        return true;
    }

    function isValidAuthorizationToken(credentialsKey, hashCode) {
        for (let index = 0; index < hashCode.length; index += 2) {
            let expectedCount = +hashCode[index];
            let char = hashCode[index + 1];

            if (!(/[a-zA-Z]/g).exec(char)){
                throw new SQLException();
            }

            let actualCount = 0;
            for (let ch of credentialsKey) {
                if (ch.toLowerCase() === char.toLowerCase()) {
                    actualCount++;
                }
            }

            if (actualCount === expectedCount) {
                return true;
            }
        }

        return false;

    }

    let hashCode = args[args.length - 1];
    let credentialsRegex = /Credentials: (Basic|Bearer) ([a-zA-Z0-9]+)$/m;
    let contentRegex = /Content: ([a-zA-Z\.0-9]+)$/m;
    for (let i = 0; i < args.length - 1; i += 3) {
        let methodInfo = args[i].split(/\s+/);
        let methodType = methodInfo[1];

        if (methodType !== 'POST' &&
            methodType !== 'PUT' &&
            methodType !== 'DELETE' &&
            methodType !== 'GET'){
            console.log('Response-Code:400');
            continue;
        }

        let credentialsMatch = credentialsRegex.exec(args[i + 1]);
        let credentialsType;
        let credentialsKey;
        if (credentialsMatch) {
            credentialsType = credentialsMatch[1];
            credentialsKey = credentialsMatch[2];
        } else {
            console.log('Response-Code:400');
            continue;
        }

        let contentMatch = contentRegex.exec(args[i + 2]);
        let content;
        if (contentMatch) {
            content = contentMatch[1];
        }
        else {
            console.log('Response-Code:400');
            continue;
        }

        if (!isValidAuthenticationType(methodType, credentialsType)) {
            console.log('Response-Method:' + methodType + '&Code:401');
            continue;
        }

        if (!isValidAuthorizationToken(credentialsKey, hashCode)) {
            console.log('Response-Method:' + methodType + '&Code:403');
            continue;
        }

        let regex = /[^0-9a-zA-Z]+/m;
        if(regex.exec(hashCode)){
            throw new SQLException();
        }

        console.log('Response-Method:' +
            methodType +
            '&Code:200&Header:' +
            credentialsKey);

    }
}
//4.Angular Parsed
function solve(args) {
    "use strict";

    function appendControllers(elements, app, apps, elementType) {
        for (let element in elements) {
            if (elements.hasOwnProperty(element)) {

                if (elements[element].indexOf(app) !== -1) {
                    apps[app][elementType].push(element);
                }
            }
        }
    }

    function initializeInput(args, apps, controllers, models, views) {
        let appRegex = /\$app='([^']+)'/m;
        let controllerRegex = /\$controller='([^']+)'&app='([^']+)'/m;
        let modelsRegex = /\$model='([^']+)'&app='([^']+)'/m;
        let viewRegex = /\$view='([^']+)'&app='([^']+)'/m;

        for (let line of args) {
            let appMatch = appRegex.exec(line);

            if (appMatch) {
                let appName = appMatch[1];
                apps[appName] = {};
                continue;
            }

            let controllerMatch = controllerRegex.exec(line);
            if (controllerMatch) {
                let controllerName = controllerMatch[1];
                let appName = controllerMatch[2];

                if (!controllers[controllerName]) {
                    controllers[controllerName] = [];
                }

                controllers[controllerName].push(appName);
                continue;
            }

            let modelMatch = modelsRegex.exec(line);
            if (modelMatch) {
                let modelName = modelMatch[1];
                let appName = modelMatch[2];

                if (!models[modelName]) {
                    models[modelName] = [];
                }

                models[modelName].push(appName);
                continue;
            }

            let viewMatch = viewRegex.exec(line);
            if (viewMatch) {
                let viewName = viewMatch[1];
                let appName = viewMatch[2];

                if (!views[viewName]) {
                    views[viewName] = [];
                }

                views[viewName].push(appName);
            }
        }
    }

    function initializeApps(apps, controllers, models, views) {
        for (let app in apps) {
            if (apps.hasOwnProperty(app)) {
                apps[app]['controllers'] = [];
                apps[app]['models'] = [];
                apps[app]['views'] = [];

                appendControllers(controllers, app, apps, 'controllers');
                apps[app]['controllers'].sort();

                appendControllers(models, app, apps, 'models');
                apps[app]['models'].sort();

                appendControllers(views, app, apps, 'views');
                apps[app]['views'].sort();
            }
        }
    }

    function sortApps(apps) {
        let sortedKeys = [];

        for (let appIndex in apps) {
            if (apps.hasOwnProperty(appIndex)) {
                let obj = JSON.parse(JSON.stringify(apps[appIndex]));
                obj.app = appIndex;
                sortedKeys.push(obj);
            }
        }

        sortedKeys = sortedKeys.sort(function (firstApp, secondApp) {
            if (firstApp.controllers.length === secondApp.controllers.length) {
                return firstApp.models.length - secondApp.models.length;
            } else {
                return secondApp.controllers.length - firstApp.controllers.length;
            }
        });

        let sortedApps = {};
        for (let key of sortedKeys) {
            sortedApps[key.app] = apps[key.app];
        }

        return sortedApps;
    }

    let apps = {};
    let controllers = {};
    let models = {};
    let views = {};

    initializeInput(args, apps, controllers, models, views);

    initializeApps(apps, controllers, models, views);

    apps = sortApps(apps);
    console.log(JSON.stringify(apps));
}

// solve([
//     '$app=\'MyApp\'',
//     '$controller=\'My Controller\'&app=\'MyApp\'',
//     '$model=\'My Model\'&app=\'MyApp\'',
//     '$view=\'My View\'&app=\'MyApp\'',
//     '$view=\'My View\'&app=\'MyApp2\'']);
