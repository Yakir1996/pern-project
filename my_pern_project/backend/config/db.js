import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
);

//psql 'postgresql://neondb_owner:npg_rCNXi8uVGs2z@ep-damp-moon-abc7fxw7-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require'