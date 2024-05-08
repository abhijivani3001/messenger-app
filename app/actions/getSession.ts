import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/auth';

export default async function getSession() {
  return await getServerSession(authOptions);
}
