
// queryCondition: any = {}
export const readData = async (Model: any) => {
    try {
        const foundData = await Model.findAll();
        return foundData;
    } catch (error: any) {
        console.log(error)
    }
}

export const InsertData = async (data: any, Model: any, options: { [key: string]: any } = {}) => {
    try {
        const creation = await Model.create(data, { ...options });
        return creation;
    } catch (error: any) {
        console.log(error)
    }
}