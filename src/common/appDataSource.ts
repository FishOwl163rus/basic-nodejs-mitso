import { DataSource } from "typeorm"
import options from "../common/ormconfig";

const AppDataSource = new DataSource(options)
export default AppDataSource
