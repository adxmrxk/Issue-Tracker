
import { PrismaClient } from '../app/generated/prisma';

type PrismaClientType = InstanceType<typeof PrismaClient>;

let prisma: PrismaClientType;

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClientType | undefined;
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;