export class Restore {
    type:string;
    backupId:number;
    excluded_files_on:boolean = false;
    files_delete_mode = 0;
    sqlClean = 0;
}
