import User from "../../Models/user";

const AllTables = [
    User
]

const CollectiveTableModifier = async (ChangeTables:any[], action:string="alter") => {
    for (let i = 0; i<ChangeTables.length; i++){
        await ChangeTables[i].sync({ [action]: true });
        console.log(ChangeTables[i], "Synced")
    }
}

CollectiveTableModifier(AllTables)