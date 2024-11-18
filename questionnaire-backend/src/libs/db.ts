import mongoose from 'mongoose';
import {environment} from '../environments/environment';

const connect: Promise<typeof mongoose> = mongoose.connect(environment.mongoose.uri, environment.mongoose.options);

const connection = mongoose.connection;

export default {connect, connection};