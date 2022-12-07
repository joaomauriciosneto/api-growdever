import { Pool } from "pg";

export const dbConnection = new Pool({
    // Opção 1
    connectionString:
        "postgres://notes_ddic_user:w1ZrHFmNI2wqMRA2iZF6zuz2PRvqnqgE@dpg-cdcai84gqg48t04bs90g-a.singapore-postgres.render.com/notes_ddic",

    // Opção 2
    // host: "dpg-cdauhnaen0hldb3jobgg-a.frankfurt-postgres.render.com",
    // user: "teste_py6o_user",
    // password: "kQiYH03fjw1FJpUuyuRKsu6Ha2Mzih1G",
    // database: "teste_py6o",

    ssl: {
        rejectUnauthorized: false,
    },
});
