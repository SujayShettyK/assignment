import { HttpService, Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Identity, IdentityDocument } from './identity.schema';
import {IdentityInput} from './identity.input'

@Injectable()
export class IdentityService {

  constructor(@InjectModel(Identity.name) private identityModel: Model<IdentityDocument>) {}
  async create(createIdentityinput: IdentityInput): Promise<Identity> {
    const createdIdentity = new this.identityModel(createIdentityinput);
    return createdIdentity.save();
  }
  
}

  
