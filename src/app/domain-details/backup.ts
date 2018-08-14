export class Backup {
    sql:boolean = false;
    ftp:boolean = false;
    name:string = '';
    date:string = '';
    id:number;
    scanMode:number = 0;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
