
import { Document } from 'mongoose';

export class TodoInterface extends Document{
  title: string;
  description: string;
}
