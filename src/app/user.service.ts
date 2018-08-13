import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {User} from "./user";
import {parameters} from "../parameters";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(id) {
    return this.http.get(parameters.apiUrl + parameters.getUserUri.replace('{userId}', id)).map((user: User) => new User().deserialize(user));
  }
}