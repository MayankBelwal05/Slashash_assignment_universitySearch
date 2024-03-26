const express = require("express");
const { sequelize } = require("./schema/connect");
const { University } = require("./schema/university");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
    try {
        const data = await University.findAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

app.post("/university", async (req, res) => {
    const { country, name, state_province, web_pages } = req.body;

    try {
        const data = await University.create({ country, name, state_province, web_pages });
        res.status(200).send({ msg: "university added", data: data });
    } catch (error) {
        console.log(error);
    }

});




sequelize.sync().then(() => {
    app.listen(2500, () => {
        console.log("Server is running at port 2500");
    })
})