export class Serializable {
    fillFromJSONString(json: string):any {
        var jsonObj = JSON.parse(json);
        this.fillFromJSON(jsonObj);

        return this;
    }

    fillFromJSON(jsonObj):any {
        for (var propName in jsonObj) {
            if(typeof this[propName] == 'object')
                for (var subpropName in jsonObj[propName]) {
                    this[propName][subpropName] = jsonObj[propName][subpropName]
                }
            else
                this[propName] = jsonObj[propName]
        }

        return this;
    }
}