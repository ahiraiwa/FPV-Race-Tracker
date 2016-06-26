/// <reference path="../_reference.ts"/>
class BaseEntity {
    
    public uuid: string;
    public saved: Date;
    public synced: Date;
    public deleted: boolean;

    constructor(json: any) {
        this.uuid = (json.uuid != undefined ? json.uuid : UUIDService.next());
        this.saved = (json.saved != undefined ? new Date(json.saved) : null);
        this.synced = (json.synced != undefined ? new Date(json.synced) : null);
        this.deleted = (json.deleted ? json.deleted : false);
    }
}