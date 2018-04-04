import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database'

@Injectable()
export class UserService {

    private dbref = 'user';
    constructor(private db: AngularFireDatabase) {

    }
}