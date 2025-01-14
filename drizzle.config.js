/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://MockInterview_owner:vGACp1cft4qK@ep-raspy-cake-a17rtnbz.ap-southeast-1.aws.neon.tech/MockInterview?sslmode=require',
    }
};