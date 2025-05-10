import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';

export async function createUser({ email, password, name }) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await sql`
      INSERT INTO users (email, password, name)
      VALUES (${email}, ${hashedPassword}, ${name})
      RETURNING id, email, name
    `;
    return result.rows[0];
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

export async function getUserByEmail(email) {
  try {
    const result = await sql`
      SELECT * FROM users WHERE email = ${email}
    `;
    return result.rows[0];
  } catch (error) {
    console.error('Error getting user:', error);
    throw error;
  }
} 