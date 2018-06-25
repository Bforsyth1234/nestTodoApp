
import { Document } from 'mongoose';

export class UserInterface extends Document{
  email: string;
  name: string;
  password: string;
}
