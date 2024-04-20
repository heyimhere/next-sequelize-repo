
import db from '../../../db/models';
const { NextResponse } = require('next/server');
export async function GET(req) {
	const users = await db.User.findAll();
	return NextResponse.json({users});
}
