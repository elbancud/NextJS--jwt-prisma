import jwt from "jsonwebtoken";
import secret from "../../config/secrets";
interface IUserType {
	id?: string;
	username?: string;
}
export default function getAccessToken(user: IUserType) {
	return jwt.sign(user, secret);
}
