export class Serializable {
    fillFromJSONString(json: string):any {
        var jsonObj = JSON.parse(json);
        this.fillFromJSON(jsonObj);

        return this;
    }

    fillFromJSON(jsonObj):any {
        for (var propName in jsonObj) {
            this[propName] = jsonObj[propName]
        }

        return this;
    }
}